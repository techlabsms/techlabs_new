import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Components
import Navbar from "./Navbar"
import Footer from "./Footer"
import Promo from "./Promo"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     settings: contentfulGeneralSettings {
  //       announcementText
  //       showAnnouncement
  //     }
  //   }
  // `)

  return (
    <>
      <Promo
        text="💻 Join TechLabs Düsseldorf X Huawei Hackathon - 4-5th September 2021"
        target="https://techlabsorg.typeform.com/TLDusHackathon"
      />

      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
