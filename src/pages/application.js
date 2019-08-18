import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ApplicationHero from "../components/ApplicationHero"
import ChooseCity from "../components/ChooseCity"
import Requirements from "../components/Requirements"
import applicationHero from "../assets/application.png"
import ApplicationProcess from "../components/ApplicationProcess"
import Dates from "../components/Dates"

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
        <ChooseCity
          heading="Choose yoour city"
          subheading="Where do you want to study?"
        />
        <Requirements
          heading="Application Requirements"
          subheading="What we are looking for in an applicant?"
        />
        <ApplicationProcess
          heading="Application Process"
          subheading="What are the steps for a successful application? "
        />
        <Dates
          heading="Important Dates"
          subheading="What is happening when?"
        />
      </>
    )
  }
}

export default application
