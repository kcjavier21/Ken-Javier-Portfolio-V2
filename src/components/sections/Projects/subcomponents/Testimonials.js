import React, { useState } from 'react';
import * as styles from '../styles/css/testimonials.module.css';
import { StaticImage } from 'gatsby-plugin-image';
//import maureen from '../../../../assets/images/jpg-png/Mau.jpg';


const Testimonials = () => {

    let [slideNumber, setSlideNumber] = useState(0);


    // ==== Functions for Side solutions =====
    const noMoreClicking = () => {
        console.log("No More Clicking!");
    }

    const handleClick = () => {
        console.log("Clicked!");
    }

    const generateControlButtons = () => {
        /* ==== Control Buttons to switch between slides (Left and Right) ==== */
        return <>
                    {/* === Left Button ==== */}
                    <i className={`fas fa-arrow-circle-left ${styles.left}`} role="presentation" 
                            onKeyDown={handleClick} onClick={() => { slideNumber <= 4 && slideNumber >= 1 ? 
                            setSlideNumber(slideNumber - 1) : noMoreClicking() }}/>
                    
                    {/* ==== Right Button ==== */}
                    <i className={`fas fa-arrow-circle-right ${styles.right}`} role="presentation" 
                        onKeyDown={handleClick} onClick={() => { slideNumber < 4 ? 
                        setSlideNumber(slideNumber + 1) : noMoreClicking() }}/>  
                </>
    }

    const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];



    return (
        <main className={styles.testimonials}>
            <h1>Testimonials</h1>

            <div className={styles.testimonialsSlideShowContainer}>
                { generateControlButtons() }
                <div className={styles.testimonialsSlideShow}>
                    
                    { console.log(slideNumber) }
                    
                    { list.map((item) => <div className={styles.testimonialSlide} key={item} style={{transform: `translate(-${slideNumber * 200}%, 0)`}}>

                            <div className={styles.testimonialContainer}>

                                <section className={styles.imageSection}>
                                    <StaticImage src='../../../../assets/images/jpg-png/Mau.jpg' alt="Maureen" 
                                        placeholder='tracedSVG' className={styles.image} />
                                </section>
        
                                <section className={styles.attestantDetails}>
                                    <h4>Maureen Catura {item}</h4>
                                    <p>CEO of Matrix Co.</p>
                                </section>
        
                                <section className={styles.testimony}>
                                    <p>I had an opportunity to work with someone who's conscientious and competent person like Ken Javier. He showed great determination and his earnest effort to learn about Web Development. For that reason, he have gained experiences and a wide skillset in developing web applications.</p>
                                </section>

                            </div>
                            
                        </div>
                    )}
                   



                    <div className={styles.testimonialSlide}>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Testimonials
