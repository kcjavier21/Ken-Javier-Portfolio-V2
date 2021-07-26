import React, { useState } from 'react';
import * as styles from './styles/css/projects.module.css';
import { StaticImage } from 'gatsby-plugin-image';

import michiRamen from '../../../assets/images/jpg-png/MichiRamen.png';

const Projects = (props) => {

    const data = [
        { 
            name: "Michi Ramen Clone",
            description: "A Clone of the restaurant's website named Michi Ramen. Created using React, Sass, and other third-party libraries.",
            image: michiRamen
        },

        { 
            name: "Zaid Tech", 
            description: "A website of a web and creatives agency. Created using Next, Sass, Node, and Express.",
            image: michiRamen
        },
        
        { 
            name: "Sellify", 
            description: "An app that aims to hasten live selling experience with automated order collection and management, real-time queueing system, and maximizes sales engagement through customer segmentation. Still an ongoing project made with React, Sass, Bootstrap, Node, Express, and other third-party libraries.",
            image: michiRamen 
        },
        
        { 
            name: "House of Kicks", 
            description:"A simple e-commerce website where you can purchase sport shoes. Created using HTML, CSS, and Vanilla JavaScript.",
            image: michiRamen
        },
        
        { 
            name: "Guess The Number Game", 
            description: "A mini project that I made using HTML, CSS, Bootstrap, and Vanilla JavaScript.", 
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

                    { data.map((item, index) => props.innerWidth > 680 ? <>
                            <div key={item.name} className={styles.projectSlideItem} style={{transform: `translate(-${slideNumber * 100}%, 0)`}}>
                                <div className={styles.description}>
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                </div>

                                <div className={styles.imageSection}>
                                    {/* <h1>Image Section</h1> */}
                                    <StaticImage src='../../../assets/images/jpg-png/MichiRamen.png' alt="Michi Ramen" placeholder="tracedSVG" 
                                        layout="constrained" className={styles.projImage} />
                                        {/* <img src={item.image} alt="Michi Ramen" className={styles.projImage}/> */}
                                </div>
                            </div> 
                        </> : <>
                            <div key={item.name} className={styles.projectSlideItem} style={{transform: `translate(-${slideNumber * 100}%, 0)`}}>
                                <div className={styles.imageSection}>
                                    {/* <h1>Image Section</h1> */}
                                    <StaticImage src='../../../assets/images/jpg-png/MichiRamen.png' alt="Michi Ramen" placeholder="tracedSVG" 
                                        layout="constrained" className={styles.projImage} />
                                        {/* <img src={item.image} alt="Michi Ramen" className={styles.projImage}/> */}
                                </div>

                                <div className={styles.description}>
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                </div>                             
                            </div> 
                        </>
                        
                    )}

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
