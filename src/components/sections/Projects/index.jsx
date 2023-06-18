import React from "react"
import SampleProjects from "./SampleProjects"
import Testimonials from "./Testimonials"

const Projects = props => {
  return (
    <>
      <SampleProjects innerWidth={props.innerWidth} />
      <Testimonials innerWidth={props.innerWidth} />
    </>
  )
}

export default Projects
