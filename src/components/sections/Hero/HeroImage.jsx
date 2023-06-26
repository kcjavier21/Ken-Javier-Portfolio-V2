import React from 'react'

// @ts-ignore
import * as styles from './styles/css/hero.module.css'
// @ts-ignore
import myPhoto from '../../../assets/images/jpg-png/Me Edited w Shadow.png'

const HeroImage = () => {
  return (
    <>
      {/* === Hero Image==== */}
      <img
        className={styles.heroImage}
        src={myPhoto}
        alt="Ken Javier"
        placeholder="blurred"
      />
    </>
  )
}

export default HeroImage
