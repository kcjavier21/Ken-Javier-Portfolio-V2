import React, { useState } from 'react';
import * as styles from '../styles/css/sampleProjects.module.css';
//import { StaticImage } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { useSwipeable } from 'react-swipeable';

// === DATA ====
// import { sampleProjects } from '../../../../assets/data/projects';

const query = graphql`
{
  allContentfulSampleProjects(sort: {order: ASC, fields: updatedAt}) {
    nodes {
      id
      title
      description {
        internal {
          content
        }
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      link
    }
  }
}
`

const Projects = (props) => {
    const data = useStaticQuery(query);
    const nodes = data.allContentfulSampleProjects.nodes;

    // ==== STATE ====
    let [slideNumber, setSlideNumber] = useState(0);


    // ==== Functions for Side solutions =====
    const noMoreClicking = () => {
        console.log("No More Clicking!");
    }

    const handleClick = () => {
        console.log("Clicked!");
    }

    // const handlers = useSwipeable({
    //     onSwipedRight: (eventData) => console.log("User Swiped!", eventData),
    //     ...config,
    // });

    const handlers = useSwipeable({
        onSwipedLeft: () => console.log("Left"),
        onSwipedRight: () => console.log("Right"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });
    




    // === Functions to Generate Codes ====
    const generateProjectSlideForLargeDevices = (item, index) => {
        const pathToImage = getImage(item.image);

         /* ==== Slides (one slide at a time ) ===== */
        return <div key={item.title} className={styles.projectSlide} style={{transform: `translate(-${slideNumber * 100}%, 0)`}}>
                    <div className={styles.description}>
                        <h1><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h1>
                        <p>{item.description.internal.content}</p>
                    </div>

                    <div className={styles.imageSection}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <GatsbyImage image={pathToImage} alt="Michi Ramen" className={styles.projImage} />
                        </a>
                    </div>
                </div>
    }


    const generateProjectSlideForSmallDevices = (item, index) => {
        const pathToImage = getImage(item.image);

         /* ==== Slides (one slide at a time ) ===== */
        return <div key={item.title} className={styles.projectSlide} style={{transform: `translate(-${slideNumber * 100}%, 0)`}} {...handlers}>
                    <div className={styles.imageSection}>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            <GatsbyImage image={pathToImage} alt="Michi Ramen" className={styles.projImage}/>
                        </a>
                    </div>

                    <div className={styles.description}>
                        <h1><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h1>
                        <p>{item.description.internal.content}</p>
                    </div>                             
                </div> 
    }


    const generateControlButtons = () => {
        /* ==== Control Buttons to switch between slides (Left and Right) ==== */
        return <>
                    {/* === Left Button ==== */}
                    <i className={`fas fa-arrow-circle-left ${styles.left}`} role="presentation" 
                            onKeyDown={handleClick} onClick={() => { slideNumber <= nodes.length && slideNumber >= 0 ? 
                            setSlideNumber(slideNumber - 1) : noMoreClicking() }}/>
                    
                    {/* ==== Right Button ==== */}
                    <i className={`fas fa-arrow-circle-right ${styles.right}`} role="presentation" 
                        onKeyDown={handleClick} onClick={() => { slideNumber < nodes.length-1 ? 
                        setSlideNumber(slideNumber + 1) : noMoreClicking() }}/>  
                </>
    }




    return (
        <div className={styles.sampleProjects}>
            <h1>Selected sample projects</h1>    

            {/* === Slide Show Container === */}
            <div className={styles.projectSlideShowContainer}>
                {/* ==== Slides (one slide at a time ) ===== */}
                <div className={styles.projectSlideShow} style={{gridTemplateColumns: `repeat(${nodes.length}, 100%)`}}>
                    { nodes.map((item, index) => props.innerWidth > 680 ? generateProjectSlideForLargeDevices(item, index) : generateProjectSlideForSmallDevices(item, index) )}
                </div>

                {/* ==== Control Buttons to switch between slides (Left and Right) ==== */}
                { generateControlButtons() }

                {/* ==== Beads that identify which slide you are looking at the moment ==== */}
                <div className={styles.slideBeads}>
                    { nodes.map((item, index) => <span key={index} className={ index === slideNumber ? `${ styles.active }` : '' } />) }
                </div>
            </div>
        </div>
    )
}

export default Projects
