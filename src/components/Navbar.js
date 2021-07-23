import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

// ==== ASSETS ====
import logo from "../assets/images/svg/Personal Logo Two - Colored 3 (Landscaped) White Text.svg";
import '../assets/styles/css/main.css';
import '../assets/styles/css/all.min.css';
import '../assets/styles/css/fontawesome.min.css';


const Navbar = (props) => {
    //let [innerWidth, setInnerWidth] = useState(768);
    let [scrollPosition, setScrollPosition] = useState(0);
    let [toggleNavbarIsActive, setToggleNavbarIsActive] = useState(false);
    let [burgerMenuIsActive, setBurgerMenuIsActive] = useState(false);
    let burgerMenuClass = burgerMenuIsActive ? 'active' : '';

    useEffect(() => {
        window.addEventListener('scroll', getScrollPosition);
        window.addEventListener('click', getScrollPosition);

        return () => {
            window.removeEventListener('scroll', getScrollPosition);
            window.removeEventListener('click', getScrollPosition);
        }

    }, []);
    
    // ==== Determines the position of scroll bar ====
    const getScrollPosition = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
        const scrolled = winScroll / height;
    
        setScrollPosition(scrolled);
    };

    const handleClick = () => {
        console.log("Clicked!");
    }

    // =========== NAVBAR and SIDEBAR FUNCTIONS ===============
    const navData = ['home', 'about', 'services', 'projects', 'contact'];

    const getToggleNavbarClass = () => {
        setToggleNavbarIsActive(!toggleNavbarIsActive);
        setBurgerMenuIsActive(!burgerMenuIsActive);
    }

    const generateToggleNavbar = () => {
        let style = toggleNavbarIsActive ? 'active' : '';


        // console.log("SCROLL POSITION: " + scrollPosition.toFixed(4));

        return <div className={`sidebar ${style}`}>
                    <div className="baseSidebar" role="presentation" onKeyDown={handleClick} onClick={() => getToggleNavbarClass()}/>
                    
                    <div className="sidebarMenu">
                        { navData.map((item) =><li className="sidebarItem" role="presentation" key={item}
                            onClick={() => scrollTo(`#${item}`)}  onMouseUp={() => getToggleNavbarClass()} onKeyDown={handleClick}>{item}</li>) }
                        <p>Tap outside the box to exit.</p>
                    </div>
                </div>
    }


    const generateNavbar = () => {
        let activeStyle = scrollPosition > 0.15 ? 'active' : '';

        return <nav className={`navbar ${activeStyle}`}>
                    <div className="nav-contents">
                    <img src={logo} alt="Ken Javier's Logo"/>

                    <ul className="nav-links">
                        { props.innerWidth > 768 ? navData.map((item) => 
                            <li role="presentation" key={item} onClick={() => scrollTo(`#${item}`)} onKeyDown={handleClick}>{item}</li>) 
                            : <i role="presentation" onKeyDown={handleClick} onClick={() => getToggleNavbarClass()} className={`fas fa-bars ${burgerMenuClass}`}/> }
                    </ul>
                    </div>
                </nav>
    }

   // ============ *** NAVBAR and SIDEBAR FUNCTIONS ==============


    return (
        <div>
            { generateNavbar() }

            { props.innerWidth <= 768 ? generateToggleNavbar() : <></> }

        </div>
    )
}


export default Navbar;

