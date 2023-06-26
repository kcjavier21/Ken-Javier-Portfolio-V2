import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

// @ts-ignore
import * as styles from './styles/css/hero.module.css'
// @ts-ignore
import resume from '../../../assets/data/KenJavierResume2023.pdf'

const ProjectsAndResume = () => {
  return (
    <>
      {/* === Buttons to Projects and Resume */}
      <div className={styles.buttonContainer}>
        <button
          onClick={() => scrollTo(`#projects`)}
          className={styles.seeMyWork}
        >
          See My Work
        </button>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className={styles.getMyResume}
        >
          Get My Resume
        </a>
      </div>
    </>
  )
}

export default ProjectsAndResume
