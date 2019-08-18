import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ApplicationHero from "../components/ApplicationHero"
import ChooseCity from "../components/ChooseCity"
import Requirements from "../components/Requirements"
import applicationHero from "../assets/application.png"
import ApplicationProcess from "../components/ApplicationProcess"
import CallToAction from "../components/CallToAction"
import Faq from "../components/Faq"
import FaqQuestion from "../components/FaqQuestion"
import Footer from '../components/Footer'
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
        <Dates heading="Important Dates" subheading="What is happening when?" />
        <div className="container">
          <CallToAction />
          <Faq>
            <FaqQuestion
              question="How do I apply for the Digital Shaper Program?"
              answer="This can be done directly via our application form for the respective location."
            />
            <FaqQuestion
              question="What should I write in my application to be accepted?"
              answer="At TechLabs we want to get to know you and your motivation better. Thats why its generally true that there is no right or wrong answer to the questions. Please only make sure that your answer really refers to the question. Unfortunately, we cannot evaluate important aspects that do not relate to the question."
            />
            <FaqQuestion
              question="How can I imagine the time required?"
              answer="In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum and allow for about 5 hours per week. Please also bear in mind that the project phase can mean increased coordination effort with your project team. In any case, the invested time will be worth it."
            />
          </Faq>
        </div>
        <Footer/>
      </>
    )
  }
}

export default application
