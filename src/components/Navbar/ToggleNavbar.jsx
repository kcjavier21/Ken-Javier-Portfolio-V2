import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const ToggleNavbar = ({
  toggleNavbarIsActive,
  getToggleNavbarClass,
  navMenu
}) => {
  

  let style = toggleNavbarIsActive ? 'active' : ''
  // console.log("SCROLL POSITION: " + scrollPosition.toFixed(4));

  return (
    <div className={`sidebar ${style}`}>
      <div
        className="baseSidebar"
        role="presentation"
        onClick={() => getToggleNavbarClass()}
      />

      <div className="sidebarMenu">
        {navMenu.map(item => (
          <li
            className="sidebarItem"
            role="presentation"
            key={item}
            // @ts-ignore
            onClick={() => scrollTo(`#${item}`)}
            onMouseUp={() => getToggleNavbarClass()}
          >
            {item}
          </li>
        ))}
        <p>Tap outside the box to exit.</p>
      </div>
    </div>
  )
}

export default ToggleNavbar
