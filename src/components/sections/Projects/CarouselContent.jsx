import React from 'react'
import { CarouselLarge, CarouselSmall } from './CarouselTypes'
// @ts-ignore
import * as styles from './styles/css/sampleProjects.module.css'

const CarouselContent = ({
  handlers,
  innerWidth,
  sampleProjects,
  slideNumber,
}) => {
  return (
    <div
      className={styles.projectCarouselContent}
      style={{
        gridTemplateColumns: `repeat(${sampleProjects.length}, 100%)`,
      }}
    >
      {sampleProjects.map((item, index) =>
        innerWidth > 680 ? (
          <CarouselLarge item={item} slideNumber={slideNumber} />
        ) : (
          <CarouselSmall
            item={item}
            slideNumber={slideNumber}
            handlers={handlers}
          />
        )
      )}
    </div>
  )
}

export default CarouselContent
