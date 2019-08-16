import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ApplicationHero from "../components/ApplicationHero"
import ChooseCity from "../components/ChooseCity"
import applicationHero from "../assets/application.png"

class application extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ApplicationHero
          background={applicationHero}
          headingFirst="Application"
          intro="Do you want to learn state-of-the-art tech? Do you want to dive into a thriving community? Apply now for the TechLabs Digital Shaper Program. "
        />
        <ChooseCity/>
      </>
    )
  }
}

export default application
