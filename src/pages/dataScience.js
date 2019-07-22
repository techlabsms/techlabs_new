import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"

class dataScience extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst="Data"
            headingSecond=" Science"
            intro=" TechLabs is the community that enables you to become a Digital
                Entrepreneur. Exciting meetups, talks, hackathons, social
                events, workshops and much more await you. Discover TechLabs
                now. TechLabs is the community that enables you to become a
                Digital Entrepreneur. Exciting meetups, talks, hackathons,
                social events, workshops and much more await you. Discover
                TechLabs now."
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default dataScience
