import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = props => {
  return (
    <>
      <Navbar innerWidth={props.innerWidth} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
