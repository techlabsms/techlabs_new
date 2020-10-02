import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, gaLabel }) => {
  return (
    <>
      <Navbar gaLabel={gaLabel}/>
      {children}
      <Footer gaLabel={gaLabel}/>
    </>
  )
}

export default Layout
