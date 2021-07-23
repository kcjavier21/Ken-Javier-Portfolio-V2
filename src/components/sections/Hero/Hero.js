import React, { useState, useEffect } from 'react';
import * as styles from './styles/css/hero.module.css';
import myPhoto from "../../../assets/images/jpg-png/Me Edited w Shadow.png";
import scrollTo from 'gatsby-plugin-smoothscroll';

import facebook from "../../../assets/images/svg/Facebook.svg";
import instagram from "../../../assets/images/svg/Instagram.svg";
import linkedin from "../../../assets/images/svg/LinkedIn.svg";
import github from "../../../assets/images/svg/GitHub.svg";

const Hero = () => {

    let [innerWidth, setInnerWidth] = useState(768);

    useEffect(() => {
        window.addEventListener('load', getInnerWidth);
        window.addEventListener('mouseover', getInnerWidth);
        window.addEventListener('resize', getInnerWidth);

        return () => {

            window.removeEventListener('load', getInnerWidth);
            window.removeEventListener('mouseover', getInnerWidth);
            window.removeEventListener('resize', getInnerWidth);
        }
    }, []);
    
    // ==== Determines the width of the website ====
    const getInnerWidth = () => {
        setInnerWidth(window.innerWidth);
    };

    return (
        <div className={styles.heroSection}>

            <div className={styles.leftPart}>
                { innerWidth > 535 ? <>
                                        <h3>Hello, My name is Ken!</h3>
                                        <h1>I am a <span>Web Developer</span></h1>
                                    </> : <> <h3>Hello, My name is Ken! I am a</h3>
                                        <h1><span>Web Developer</span></h1> </>              
                 }
                

                <div className={styles.socialButtons}>
                    <a href="https://www.facebook.com/kcjavier21/" target="_blank" rel="noreferrer"><img src={facebook} alt="Ken Javier on Facebook" /></a>
                    <a href="https://www.linkedin.com/in/kcjavier21/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Ken Javier on Facebook" /></a>
                    <a href="https://github.com/kcjavier21" target="_blank" rel="noreferrer"><img src={github} alt="Ken Javier on Facebook" /></a>
                    <a href="https://www.instagram.com/kcjavier21/" target="_blank" rel="noreferrer"><img src={instagram} alt="Ken Javier on Facebook" /></a>
                </div>


                <div className={styles.buttonContainer}>
                    <button onClick={() => scrollTo(`#projects`)} className={styles.seeMyWork} >See My Work</button>
                    <button onClick={() => scrollTo(`#projects`)} className={styles.getMyResume}>Get My Resume</button>

                </div>
            </div>

            <div className={styles.shade}/>

            <img
                className={styles.heroImage}
                src={myPhoto}
                alt="Ken Javier"
                placeholder="blurred"
                // layout="constrained"
            />
            
        </div>
    )
}

export default Hero
