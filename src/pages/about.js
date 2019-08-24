import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import Background from "../assets/about_background.png"

class about extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst="About"
            headingSecond="TechLabs"
            intro="We at TechLabs dream of a world with no digital illiterates. A world full of tech-savvy individuals who approach the challenges of our time with a digital and entrepreneurial mindset. Learn more about us and our vision."
            background={Background}
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default about
