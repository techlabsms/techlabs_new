import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Components
import Navbar from "./Navbar"
import Footer from "./Footer"
import Promo from "./Promo"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      settings: contentfulGeneralSettings {
        announcementText
        showAnnouncement
      }
    }
  `)

  return (
    <>
      {data.settings.showAnnouncement ? (
        <Promo text={data.settings.announcementText} />
      ) : null}
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
