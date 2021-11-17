import React, { useState, useEffect } from "react"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Seo from "../components/SEO"
import Layout from "../components/Layout"

import "../assets/styles/css/main.css"
import "../assets/styles/css/all.min.css"
import "../assets/styles/css/fontawesome.min.css"

// ==== SECTIONS =====
import Hero from "../components/sections/Hero/Hero.js"
import About from "../components/sections/About/About.js"
import Services from "../components/sections/Services/Services.js"
import Projects from "../components/sections/Projects/Projects.js"
import Contact from "../components/sections/Contact/Contact.js"

export default function Home() {
  let [innerWidth, setInnerWidth] = useState(768)
  let [loadingState, setLoadingState] = useState(true);
  let [contentVisibility, setContentVisibility] = useState(false);

  useEffect(() => {
    getInnerWidth()
    window.addEventListener("load", getInnerWidth)
    window.addEventListener("resize", getInnerWidth)

    return () => {
      window.removeEventListener("load", getInnerWidth)
      window.removeEventListener("resize", getInnerWidth)
    }
  }, [])

  // ==== Determines the width of the website ====
  const getInnerWidth = () => {
    setInnerWidth(window.innerWidth)
  }

  setTimeout(() => {
    setLoadingState(false);
    setContentVisibility(true);

}, 3500);

  const renderLoadingScreen = () => {
    return (
      <Loader
        type="Puff"
        color="#92D7FB"
        className="spinner"
        visible={loadingState}//3 secs
      />
    )
  }

  const renderMainContent = () => {
    return (
      <Layout innerWidth={innerWidth}>
        <div id="home" >
          <Hero />
        </div>

        <div id="about" style={{display: contentVisibility === false ? "none" : "block"}}>
          <About innerWidth={innerWidth} />
        </div>

        <div id="services" style={{display: contentVisibility === false ? "none" : "block"}}>
          <Services />
        </div>

        <div id="projects" style={{display: contentVisibility === false ? "none" : "block"}}>
          <Projects innerWidth={innerWidth} />
        </div>

        <div id="contact" style={{display: contentVisibility === false ? "none" : "block"}}>
          <Contact />
        </div>
      </Layout>
    )
  }

  return (
    <>
        <Seo />
        { renderLoadingScreen() }
        { renderMainContent() }
    </>
  )
}
