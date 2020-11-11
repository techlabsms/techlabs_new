import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, gaLabel, pageTitle }) => {
  return (
    <>
      <Navbar gaLabel={gaLabel}/>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle} | TechLabs - We Build. Digital. Shapers.</title>
          <link rel="canonical" href="https://www.techlabs.org/" />
      </Helmet>
      {children}
      <Footer gaLabel={gaLabel}/>
    </>
  )
}

export default Layout
