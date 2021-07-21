import React from "react";
import Layout from '../components/Layout';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../assets/styles/css/main.css';

import Hero from '../components/sections/Hero/Hero.js';
import About from '../components/sections/About/About.js';
import Services from '../components/sections/Services/Services.js';
import Projects from '../components/sections/Projects/Projects.js';
import Contact from '../components/sections/Contact/Contact.js';

export default function Home() {
  return <Layout>

          <nav className="navbar">
            <h1>Navbar</h1>
              <div className="nav-links">
                  <a onClick={() => scrollTo('#projects')}>Projects</a>
              </div>
          </nav>

          <div id="hero">
              <Hero/>
          </div>

          <div id="about-me">
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
