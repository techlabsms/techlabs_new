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
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default dataScience
