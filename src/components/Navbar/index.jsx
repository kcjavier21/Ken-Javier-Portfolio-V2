import React, { useState, useEffect } from 'react'
import LargeNavbar from './LargeNavbar'
import ToggleNavbar from './ToggleNavbar'
import '../../assets/styles/css/main.css'
import '../../assets/styles/css/all.min.css'
import '../../assets/styles/css/fontawesome.min.css'

const Navbar = props => {
  let [scrollPosition, setScrollPosition] = useState(0)
  let [toggleNavbarIsActive, setToggleNavbarIsActive] = useState(false)
  let [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false)
  let burgerMenuClass = burgerMenuIsActive ? 'active' : ''

  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition)
    window.addEventListener('click', getScrollPosition)

    return () => {
      window.removeEventListener('scroll', getScrollPosition)
      window.removeEventListener('click', getScrollPosition)
    }
  }, [])

  // ==== Determines the position of scroll bar ====
  const getScrollPosition = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = winScroll / height

    setScrollPosition(scrolled)
  }

  const getToggleNavbarClass = () => {
    setToggleNavbarIsActive(!toggleNavbarIsActive)
    setBurgerMenuIsActive(!burgerMenuIsActive)
  }

  // =========== NAVBAR and SIDEBAR FUNCTIONS ===============
  const navMenu = ['home', 'about', 'services', 'projects', 'contact']

  // ============ *** NAVBAR and SIDEBAR FUNCTIONS ==============

  return (
    <div>
      <LargeNavbar
        scrollPosition={scrollPosition}
        innerWidth={props.innerWidth}
        navMenu={navMenu}
        burgerMenuClass={burgerMenuClass}
        getToggleNavbarClass={getToggleNavbarClass}
      />
      <ToggleNavbar
        toggleNavbarIsActive={toggleNavbarIsActive}
        getToggleNavbarClass={getToggleNavbarClass}
        navMenu={navMenu}
      />
    </div>
  )
}

export default Navbar
