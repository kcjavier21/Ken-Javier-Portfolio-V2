// @ts-nocheck
import React, { useState } from "react"
import * as styles from "./styles/css/sampleProjects.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { useSwipeable } from "react-swipeable"
import ProjectCarousel from "./ProjectCarousel"

const query = graphql`
  {
    allContentfulSampleProjects(sort: { order: DESC, fields: updatedAt }) {
      nodes {
        id
        title
        description {
          internal {
            content
          }
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        link
      }
    }
  }
`

const Projects = props => {
  const data = useStaticQuery(query)
  const nodes = data.allContentfulSampleProjects.nodes

  // ==== STATE ====
  let [slideNumber, setSlideNumber] = useState(0)

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Left"),
    onSwipedRight: () => console.log("Right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })


  return (
    <div className={styles.sampleProjects}>
      <h1>Selected sample projects</h1>
      
      <ProjectCarousel 
        handlers={handlers}
        innerWidth={props.innerWidth}
        sampleProjects={nodes}
        setSlideNumber={setSlideNumber}
        slideNumber={slideNumber}
      />

    </div>
  )
}

export default Projects
