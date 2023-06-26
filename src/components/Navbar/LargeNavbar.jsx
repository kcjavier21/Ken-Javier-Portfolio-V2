import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

// @ts-ignore
import logo from '../../assets/images/svg/Personal Logo Two - Colored 3 (Landscaped) White Text.svg'

const LargeNavbar = ({
  scrollPosition,
  navMenu,
  burgerMenuClass,
  getToggleNavbarClass,
}) => {
  let activeStyle = scrollPosition > 0.05 ? 'active' : ''

  console.log(burgerMenuClass)

  return (
    <nav className={`navbar ${activeStyle}`}>
      <div className="nav-contents">
        <img src={logo} alt="Ken Javier's Logo" />

        <ul className="nav-links">
          {navMenu.map(item => (
            <li
              role="presentation"
              key={item}
              // @ts-ignore
              onClick={() => scrollTo(`#${item}`)}
            >
              {item}
            </li>
          ))}

<i
          role="presentation"
          onClick={() => getToggleNavbarClass()}
          className={`fas fa-bars ${burgerMenuClass}`}
        />
        </ul>

        
      </div>
    </nav>
  )
}

export default LargeNavbar
