import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './styles/css/about.module.css';

//import myPicture from '../../../assets/images/jpg-png/1.jpg';

const About = (props) => {
    return (
        <main className={styles.about}>
            <section className={styles.writing}>
                <div className={styles.imageSection}>
                { props.innerWidth <= 768 ? <h1>About Me</h1> : <></> }

                        <StaticImage 
                            src='../../../assets/images/jpg-png/1.jpg'
                            placeholder='tracedSVG'
                            alt="Ken Javier"
                            className={styles.myImage}
                            layout="constrained"
                        />
                </div>

                <div className={styles.paragraphSection}>
                    { props.innerWidth > 768 ? <h1>About Me</h1> : <></> }

                    <p>Hi I’m Ken Javier, a Philippine-based full-stack web developer and graphic designer. I’m very passionate about programming, 
                        development, graphic designing, and anything about technology, that’s why I decided to take Computer Science in University of 
                        the City of Manila (Pamantasan ng Lungsod ng Maynila). I also participated to different organizations including the PLM 
                        Computer Science Society as a Public Relations Officer & Creatives Committee Head, Algo Filipino as Development Committee Officer, 
                        and Google Developer Student Clubs - PLM as Web Development Lead & Chief Technology Officer. Moreover, I worked as a Software Engineer 
                        Intern at Dashlabs.ai and Software Engineer at GoMedia.
                        <br/><br/>
                        Working with you would be a great honor to me!</p>

                </div>

            </section>

        </main>
    )
}

export default About
