import React, { useState, useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import * as styles from "./styles/css/hero.module.css"
import myPhoto from "../../../assets/images/jpg-png/Me Edited w Shadow.png"
import { socialMediaLinks } from "../../../assets/data/socialMediaLinks"
import resume from "../../../assets/data/KenJavierResume2023.pdf"

const Hero = () => {
  let [innerWidth, setInnerWidth] = useState(768)

  useEffect(() => {
    window.addEventListener("load", getInnerWidth)
    window.addEventListener("click", getInnerWidth)
    window.addEventListener("resize", getInnerWidth)

    return () => {
      window.removeEventListener("load", getInnerWidth)
      window.removeEventListener("click", getInnerWidth)
      window.removeEventListener("resize", getInnerWidth)
    }
  }, [])

  // ==== Determines the width of the website ====
  const getInnerWidth = () => {
    setInnerWidth(window.innerWidth)
  }

  return (
    <div className={styles.heroSection}>
      <div className={styles.leftPart}>
        {innerWidth > 535 ? (
          <>
            {" "}
            <h3>Hello, My name is Ken!</h3>
            <h1>
              I am a <span>Web Developer</span>
            </h1>{" "}
          </>
        ) : (
          <>
            {" "}
            <h3>Hello, My name is Ken! I am a</h3>
            <h1>
              <span>Web Developer</span>
            </h1>{" "}
          </>
        )}

        {/* === Buttons of Social Networking sites ====*/}
        <div className={styles.socialButtons}>
          {socialMediaLinks.map(item => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={item.site}
            >
              <img
                src={item.image.default}
                alt={`Ken Javier on ${item.site}`}
              />
            </a>
          ))}
        </div>

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
      </div>

      {/* === Will Emphasize the Text Area of Hero Section when the inner width gets smaller ==== */}
      <div className={styles.shade} />

      {/* === Hero Image==== */}
      <img
        className={styles.heroImage}
        src={myPhoto}
        alt="Ken Javier"
        placeholder="blurred"
      />
    </div>
  )
}

export default Hero
