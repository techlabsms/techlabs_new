import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import WhatYouWillLearn from '../components/WhatYouWillLearn';
import RightImageSection from '../components/RightImageSection';
import LeftImageSection from '../components/LeftImageSection';
import Partners from '../components/Partners';
import graph from "../assets/graphs.png"
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import accenture from "../assets/accenture.png"

class web extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero headingFirst="Web" headingSecond=" Development" />
        </div>
        <div className="container">
          <WhatYouWillLearn
            intro="Text, ........."
            first="text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,"
            second="text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,"
            third="text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,"
            fourth="text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,"
          />
          <RightImageSection
            heading="Web Development"
            subheading="text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,"
            text="Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text,"
            image={graph}
          />
          <LeftImageSection
            heading="More about the Track"
            subheading="text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,text,"
            text="Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text"
            image={david}
          />
          <RightImageSection
            heading="What is Web Development"
            subheading="Text Text Text Text"
            text="Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text"
            image={dashboard}
          />
          <Partners
            heading="What our partners say"
            subheading="Text text text"
            quoteText="To start with pogramming is hard when done by yourself, but TechLabs is able to accelerate your learning curve by multiples."
            quoteName="Hans Schneider"
            quoteRole="Web Developer"
            quoteCompanyLogo={accenture}
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default web
