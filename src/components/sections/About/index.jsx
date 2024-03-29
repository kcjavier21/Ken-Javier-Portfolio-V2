import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// @ts-ignore
import * as styles from "./styles/css/about.module.css"

const About = () => {
  return (
    <main className={styles.about}>
      <section className={styles.writing}>
        <div className={styles.imageSection}>
          <h1>About Me</h1>

          <StaticImage
            src="../../../assets/images/jpg-png/1.jpg"
            placeholder="tracedSVG"
            alt="Ken Javier"
            className={styles.myImage}
            layout="constrained"
          />
        </div>

        <div className={styles.paragraphSection}>
          <h1>About Me</h1>

          <p>
            Hi I’m Ken Javier, a Philippine-based full-stack web developer and
            graphic designer. I’m very passionate about programming,
            development, graphic designing, and anything about technology, and
            for this reason, I decided to pursue Computer Science in University
            of the City of Manila (Pamantasan ng Lungsod ng Maynila). I also
            participated to different organizations including the PLM Computer
            Science Society as a Public Relations Officer & Creatives Committee
            Head, Algo Filipino as Development Committee Officer, and Google
            Developer Student Clubs - PLM as Web Development Lead & Chief
            Technology Officer. Moreover, I worked as a Software Engineer Intern
            at Dashlabs.ai and Software Engineer at GoMedia.
            <br />
            <br />
            Working with you would be a great honor to me!
          </p>
        </div>
      </section>
    </main>
  )
}

export default About
