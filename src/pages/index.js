import React, { useState, useEffect } from "react";
import Layout from '../components/Layout';
import '../assets/styles/css/main.css';
import '../assets/styles/css/all.min.css';
import '../assets/styles/css/fontawesome.min.css';

// ==== SECTIONS =====
import Hero from '../components/sections/Hero/Hero.js';
import About from '../components/sections/About/About.js';
import Services from '../components/sections/Services/Services.js';
import Projects from '../components/sections/Projects/Projects.js';
import Contact from '../components/sections/Contact/Contact.js';


export default function Home() {

    let [innerWidth, setInnerWidth] = useState(768);

    useEffect(() => {
        window.addEventListener('load', getInnerWidth);
        window.addEventListener('click', getInnerWidth);
        window.addEventListener('resize', getInnerWidth);

        return () => {
            window.removeEventListener('load', getInnerWidth);
            window.removeEventListener('click', getInnerWidth);
            window.removeEventListener('resize', getInnerWidth);
        }
    }, []);
    
    // ==== Determines the width of the website ====
    const getInnerWidth = () => {
        setInnerWidth(window.innerWidth);
    };

  return <Layout innerWidth={innerWidth}>
            <div id="home">
                <Hero/>
            </div>

            <div id="about">
                <About innerWidth={innerWidth}/>
            </div>

            <div id="services">
                <Services/>
            </div>

            <div id="projects">
                <Projects/>
            </div>

            <div id="contact">
                <Contact/>
            </div>
        </Layout>
}
