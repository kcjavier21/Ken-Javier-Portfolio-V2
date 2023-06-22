import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// @ts-ignore
import * as styles from './styles/css/sampleProjects.module.css'

const CarouselLarge = ({ item, slideNumber }) => {
  const pathToImage = getImage(item.image)

  /* ==== Slides (one slide at a time ) ===== */
  return (
    <div
      key={item.title}
      className={styles.projectSlide}
      style={{ transform: `translate(-${slideNumber * 100}%, 0)` }}
    >
      <div className={styles.description}>
        <h1>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </h1>
        <p>{item.description.internal.content}</p>
      </div>

      <div className={styles.imageSection}>
        <a href={item.link} target="_blank" rel="noreferrer">
          <GatsbyImage
            // @ts-ignore
            image={pathToImage}
            alt="Michi Ramen"
            className={styles.projImage}
          />
        </a>
      </div>
    </div>
  )
}

const CarouselSmall = ({ item, slideNumber, handlers }) => {
  const pathToImage = getImage(item.image)

  /* ==== Slides (one slide at a time ) ===== */
  return (
    <div
      key={item.title}
      className={styles.projectSlide}
      style={{ transform: `translate(-${slideNumber * 100}%, 0)` }}
      {...handlers}
    >
      <div className={styles.imageSection}>
        <a href={item.link} target="_blank" rel="noreferrer">
          <GatsbyImage
            // @ts-ignore
            image={pathToImage}
            alt="Michi Ramen"
            className={styles.projImage}
          />
        </a>
      </div>

      <div className={styles.description}>
        <h1>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </h1>
        <p>{item.description.internal.content}</p>
      </div>
    </div>
  )
}

export { CarouselLarge, CarouselSmall }
