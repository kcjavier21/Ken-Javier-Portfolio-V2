import React, { useState } from "react"
import * as styles from "./styles/css/sampleProjects.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { useSwipeable } from "react-swipeable"
import ControlButtons from "./ControlButtons"
import { CarouselLarge, CarouselSmall } from "./Carousel"

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

  // ==== Functions for Side solutions =====
  const noMoreClicking = () => {
    console.log("No More Clicking!")
  }

  const handleClick = () => {
    console.log("Clicked!")
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Left"),
    onSwipedRight: () => console.log("Right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })


  return (
    <div className={styles.sampleProjects}>
      <h1>Selected sample projects</h1>

      {/* === Slide Show Container === */}
      <div className={styles.projectSlideShowContainer}>
        {/* ==== Slides (one slide at a time ) ===== */}
        <div
          className={styles.projectSlideShow}
          style={{ gridTemplateColumns: `repeat(${nodes.length}, 100%)` }}
        >
          {nodes.map((item, index) =>
            props.innerWidth > 680
              ? <CarouselLarge item={item} slideNumber={slideNumber} />
              : <CarouselSmall item={item} slideNumber={slideNumber} handlers={handlers} />
          )}
        </div>

        {/* ==== Control Buttons to switch between slides (Left and Right) ==== */}
        <ControlButtons 
          handleClick={handleClick}
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
          noMoreClicking={noMoreClicking}
          nodes={nodes}
          styles={styles}
        />

        {/* ==== Beads that identify which slide you are looking at the moment ==== */}
        <div className={styles.slideBeads}>
          {nodes.map((item, index) => (
            <span
              key={index}
              className={index === slideNumber ? `${styles.active}` : ""}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
