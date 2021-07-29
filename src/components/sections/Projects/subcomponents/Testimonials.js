import React, { useState } from 'react';
import * as styles from '../styles/css/testimonials.module.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import algoFilipino from '../../../../assets/images/jpg-png/AlgoFilipino.png';
import gdsc from '../../../../assets/images/jpg-png/GDSC.png';
import plmcss from '../../../../assets/images/jpg-png/PLM CSS.png';
import matrix from '../../../../assets/images/jpg-png/Matrix-Co.png';


const query = graphql`
  {
    allContentfulTestimonials(sort: {order: DESC, fields: contentful_id}) {
      nodes {
        attestantName
        attestantPosition
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        testimony {
          internal {
            content
          }
        }
      }
    }
  }
`


const Testimonials = (props) => {
    const data = useStaticQuery(query);
    const nodes = data.allContentfulTestimonials.nodes;
    

    let [slideNumber, setSlideNumber] = useState(0);

    const organizations = [ 
        { name: "Algo Filipino", image: algoFilipino, className: "algoFilipino" },
        { name: "Google Developer Students Club - Pamantasan ng Lungsod ng Maynila", image: gdsc, className: "gdsc"},
        { name: "PLM Computer Science Society", image: plmcss, className: "plmcss" },
        { name: "Matrix Co.", image: matrix, className: "matrix" }
    ]

    // ==== Functions for Side solutions =====
    const noMoreClicking = () => {
        console.log("No More Clicking!");
    }


    const handleClick = () => {
        console.log("Clicked!");
    }


     // === Functions to Generate Codes ====
    const generateControlButtonsForLargeDevices = () => {
        /* ==== Control Buttons to switch between slides (Left and Right) ==== */
        return <>
                    {/* === Left Button ==== */}
                    <i className={`fas fa-arrow-circle-left ${styles.left}`} role="presentation" 
                            onKeyDown={handleClick} onClick={() => { slideNumber <= nodes.length  && slideNumber >= 1 ? 
                            setSlideNumber(slideNumber - 2) : noMoreClicking() }}/>
                    
                    {/* ==== Right Button ==== */}
                    <i className={`fas fa-arrow-circle-right ${styles.right}`} role="presentation" 
                        onKeyDown={handleClick} onClick={() => { slideNumber < nodes.length-1 ? 
                        setSlideNumber(slideNumber + 2) : noMoreClicking() }}/>  
                </>
    }


    const generateControlButtonsForSmallDevices = () => {
        /* ==== Control Buttons to switch between slides (Left and Right) ==== */
        return <>
                    {/* === Left Button ==== */}
                    <i className={`fas fa-arrow-circle-left ${styles.left}`} role="presentation" 
                            onKeyDown={handleClick} onClick={() => { slideNumber <= nodes.length  && slideNumber >= 1 ? 
                            setSlideNumber(slideNumber - 1) : noMoreClicking() }}/>
                    
                    {/* ==== Right Button ==== */}
                    <i className={`fas fa-arrow-circle-right ${styles.right}`} role="presentation" 
                        onKeyDown={handleClick} onClick={() => { slideNumber < nodes.length-1 ? 
                        setSlideNumber(slideNumber + 1) : noMoreClicking() }}/>  
                </>
    }


    let counter = 0;

    const generateSlideBeadsForLargeDevices = (index) => {
        // ==== Generate Slide Beads for larger devices like laptops and desktops ====
        const half = Math.ceil(nodes.length / 2);
        counter++;
        return counter <= half ? <span key={index * 2} className={ index * 2 === slideNumber ? `${ styles.active }` : '' } /> : '';
    }


    const generateSlideBeadsForSmallDevices = (index) => {
        // ==== Generate Slide Beads for smaller devices like tablets and mobile phones ====
        return <span key={index} className={ index === slideNumber ? `${ styles.active }` : '' } /> 
    }


    const generateTestimonialSlide = (item) => {
        const pathToImage = getImage(item.image);

        return <div className={styles.testimonialSlide} key={item.attestantName} style={{transform: `translate(-${slideNumber * 100}%, 0)`}}>
                    <div className={styles.testimonialContainer}>
                        {/* Attestant's Image */}
                        <section className={styles.imageSection}>
                                <GatsbyImage image={pathToImage} alt={item.attestantName} className={styles.projImage} />
                        </section>
                        {/* Attestant's Details */}
                        <section className={styles.attestantDetails}>
                            <h4>{item.attestantName}</h4>
                            <p>{item.attestantPosition}</p>
                        </section>
                        {/* Testimony */}
                        <section className={styles.testimony}>
                            <p>{item.testimony.internal.content}</p>
                        </section>
                    </div>
            </div>
    }


    return (
        <main className={styles.testimonials}>
            <h1>Testimonials</h1>

            <div className={styles.testimonialsSlideShowContainer}>
                {/* ==== Control Buttons ===== */}
                { props.innerWidth > 834 ? generateControlButtonsForLargeDevices() : generateControlButtonsForSmallDevices() }
                
                <div className={styles.testimonialsSlideShow}>      
                     {/* ==== Testimonial Slides ===== */}
                    { nodes.map((item) => generateTestimonialSlide(item))}
                </div>

                <div className={styles.slideBeads}>
                    {/* ==== Slide Beads ===== */}
                    <div className={styles.slideBeads}>
                        { nodes.map((item, index) => props.innerWidth > 834 ? generateSlideBeadsForLargeDevices(index) : 
                            generateSlideBeadsForSmallDevices(index) ) }
                    </div>  
                </div>
            </div>

            <div className={styles.organizations}>
                { organizations.map((item) => 
                    <div className={styles.organization} key={item.name}>
                        <img src={item.image} alt={item.name} className={styles[item.className]}/>
                    </div> )}
            </div>
        </main>
    )
}

export default Testimonials
