import React from "react";
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

  return <Layout>
            <div id="home">
                <Hero/>
            </div>

            <div id="about">
                <About/>
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
