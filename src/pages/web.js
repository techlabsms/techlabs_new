import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import WhatYouWillLearn from "../components/WhatYouWillLearn"
import RightImageSection from "../components/RightImageSection"
import LeftImageSection from "../components/LeftImageSection"
import Partners from "../components/Partners"
import Projects from "../components/Projects"
import CallToAction from "../components/CallToAction"
import FirstImpression from "../components/FirstImpression"
import FaqQuestion from "../components/FaqQuestion"
import graph from "../assets/graphs.png"
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import accenture from "../assets/accenture.png"
import webdev from "../assets/webdevpro.png"

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
          <Projects
            heading="Projects from our participants"
            subheading="Have a look at these projects, get inspired and apply now to finish your project!"
            firstProjectHeading="Project1"
            firstProjectText="The main goal was to identify customers that are likely to resign their mobile phone contracts. Aside from the resign-probabal, the team identified the impact of several variables."
            firstProjectImage={webdev}
            secondProjectHeading="Project1"
            secondProjectText="The main goal was to identify customers that are likely to resign their mobile phone contracts. Aside from the resign-probabal, the team identified the impact of several variables."
            secondProjectImage={webdev}
            thirdProjectHeading="Project1"
            thirdProjectText="The main goal was to identify customers that are likely to resign their mobile phone contracts. Aside from the resign-probabal, the team identified the impact of several variables."
            thirdProjectImage={webdev}
          />
          <CallToAction />
          <FirstImpression
            heading="Get a first Impression"
            subheading="Check out our Open Curriculum"
            firstHeading="Introduction to Web Development"
            firstImage={dashboard}
            firstText="Start with our free Track and learn the fundamentals of Web Development now and see if it’s right for you"
            secondHeading="Introduction to Web Development"
            secondImage={dashboard}
            secondText="Start with our free Track and learn the fundamentals of Web Development now and see if it’s right for you"
          />
          <div className="row mt-5">
            <div className="col">
              <h2>FAQ</h2>
              <div className="section-divider" />
              <p>Do you have more questions?</p>
              <FaqQuestion
                question="How can I apply for the Digital Shaper Program?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="What makes me a qualified Applicant?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="How does the application process look like?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="What are the costs for Participants?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="When is the next Application Deadline?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="How can I apply for the Digital Shaper Program?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="Who can I contact if I have any Questions?"
                answer="sdjhfasölfdh"
              />
              <div className="text-center mt-5">
                <button className="btn btn-primary">More questions?</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default web
