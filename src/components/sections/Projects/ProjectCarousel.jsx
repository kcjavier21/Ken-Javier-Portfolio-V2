import React from 'react'
import ControlButtons from './ControlButtons'
import CarouselIndicator from './CarouselIndicator'
import CarouselContent from './CarouselContent'
// @ts-ignore
import * as styles from './styles/css/sampleProjects.module.css'

const CarouselMain = ({
  handlers,
  innerWidth,
  sampleProjects,
  setSlideNumber,
  slideNumber,
}) => {
  return (
    <div className={styles.projectCarousel}>
      {/* ==== Slides (one slide at a time ) ===== */}
      <CarouselContent
        sampleProjects={sampleProjects}
        slideNumber={slideNumber}
        handlers={handlers}
        innerWidth={innerWidth}
      />

      {/* ==== Control Buttons to switch between slides (Left and Right) ==== */}
      <ControlButtons
        slideNumber={slideNumber}
        setSlideNumber={setSlideNumber}
        nodes={sampleProjects}
        styles={styles}
      />

      <CarouselIndicator
        sampleProjects={sampleProjects}
        slideNumber={slideNumber}
      />
    </div>
  )
}

export default CarouselMain
