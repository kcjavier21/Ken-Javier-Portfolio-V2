import React, { useState, useEffect } from 'react'
import IntroAndCTA from './IntroAndCTA'
import Shade from './Shade'
import HeroImage from './HeroImage'
// @ts-ignore
import * as styles from './styles/css/hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <IntroAndCTA />
      <Shade />
      <HeroImage />
    </div>
  )
}

export default Hero
