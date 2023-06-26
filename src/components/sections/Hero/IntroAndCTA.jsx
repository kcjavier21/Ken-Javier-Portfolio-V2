import React from 'react'
import Intro from './Intro'
import SocialButtons from './SocialButtons'
import ProjectsAndResume from './ProjectsAndResume'

// @ts-ignore
import * as styles from './styles/css/hero.module.css'

const IntroAndCTA = () => {
  return (
    <div className={styles.leftPart}>
      <Intro />
      <SocialButtons />
      <ProjectsAndResume />
    </div>
  )
}

export default IntroAndCTA
