import React, { useState } from 'react';
import * as styles from './styles/css/projects.module.css';
import { StaticImage } from 'gatsby-plugin-image';

import michiRamen from '../../../assets/images/jpg-png/MichiRamen.png';

const Projects = () => {

    const data = [
        { 
            name: "Name 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
            image: michiRamen
        },

        { 
            name: "Name 2", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
            image: michiRamen
        },
        
        { 
            name: "Name 3", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
            image: michiRamen 
        },
        
        { 
            name: "Name 4", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
            image: michiRamen
        },
        
        { 
            name: "Name 5", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
            image: michiRamen
        },
    ];

    let [slideNumber, setSlideNumber] = useState(0);

    const noMoreClicking = () => {
        console.log("No More Clicking!");
    }

    return (
        <div className={styles.projects}>
            <h1>Selected sample projects</h1>


            <div className={styles.projectSlideContainer}>

                <div className={styles.projectSlide} style={{gridTemplateColumns: `repeat(${data.length}, 100%)`}}>

                    { data.map((item, index) => 
                        <div key={item.name} className={styles.projectSlideItem} style={{transform: `translate(-${slideNumber * 100}%, 0)`}}>
                            <div className={styles.description}>
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                            </div>

                            <div className={styles.imageSection}>
                                {/* <h1>{item.image}</h1> */}
                                <StaticImage src='../../../assets/images/jpg-png/MichiRamen.png' alt="Michi Ramen" placeholder="tracedSVG" 
                                    layout="constrained" className={styles.projImage} />
                            </div>
                        </div> )}

                </div>

                {/* { console.log(slideNumber) } */}
                <i className={`fas fa-arrow-circle-left ${styles.left}`}  onClick={() => { slideNumber <= 4 && slideNumber >= 0 ? setSlideNumber(slideNumber - 1) : noMoreClicking() }}></i>

                <i className={`fas fa-arrow-circle-right ${styles.right}`} onClick={() => { slideNumber < 4 ? setSlideNumber(slideNumber + 1) : noMoreClicking() }}></i>

                <div className={styles.slideBeads}>
                    { data.map((item, index) => <span key={index} className={ index === slideNumber ? `${ styles.active }` : '' } />) }
                </div>



            </div>
            
        </div>
    )
}

export default Projects
