import React from 'react'
// @ts-ignore
import * as styles from './styles/css/sampleProjects.module.css'

const CarouselIndicator = ({ sampleProjects, slideNumber }) => {
  return (
    <div className={styles.slideBeads}>
      {sampleProjects.map((item, index) => (
        <span
          key={index}
          className={index === slideNumber ? `${styles.active}` : ''}
        />
      ))}
    </div>
  )
}

export default CarouselIndicator
