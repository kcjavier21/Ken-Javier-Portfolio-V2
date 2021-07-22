import React from 'react';
import * as styles from './styles/css/hero.module.css';
import { StaticImage } from 'gatsby-plugin-image';
import myPhoto from "../../../assets/images/jpg-png/Me Edited w Shadow.png";

const Hero = () => {
    return (
        <div className={styles.heroSection}>
            <img
                className={styles.heroImage}
                src={myPhoto}
                alt="Ken Javier"
                placeholder="blurred"
                // layout="constrained"
            />
            
            {/* <StaticImage
                className={styles.heroImage}
                src="../../../assets/images/jpg-png/Me Edited w Shadow.png"
                alt="Ken Javier"
                placeholder="blurred"
                layout="constrained"
                width={800}
            /> */}
        </div>
    )
}

export default Hero
