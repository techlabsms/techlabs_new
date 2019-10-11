import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ApplicationHero from "../components/ApplicationHero"
import ChooseCity from "../components/ChooseCity"
import Requirements from "../components/Requirements"
import applicationHero from "../assets/application.png"
import ApplicationProcess from "../components/ApplicationProcess"
import CallToActionApplication from "../components/CallToActionApplication"
import Faq from "../components/Faq"
import FaqQuestion from "../components/FaqQuestion"
import Footer from "../components/Footer"
import AI from "../assets/ai-robot.png"
import Web from "../assets/webdevpro.png"
import Ds from "../assets/dashboard.png"
import LearnMore from "../components/LearnMore"
import UX from "../assets/UX.png"

class apply extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      city: "",
      cityData: [
        {
          name: "muenster",
          isOpen: true,
          link: "https://techlabsorg.typeform.com/to/sD79sQ",
          startDate: "2019-09-27",
        },
        {
          name: "copenhagen",
          link: "www.google.de",
          isOpen: false,
          startDate: "2019-09-01",
        },
        {
          name: "barcelona",
          link: "www.google.de",
          isOpen: false,
          startDate: "2019-09-03",
        },
      ],
      index: 0,
    }

    this.isClicked = this.isClicked.bind(this)
  }

  isClicked(city, cityIsClicked) {
    this.setState({
      isClicked: cityIsClicked,
      city,
    })

    this.state.cityData.forEach(data => {
      if (data.name === city) {
        this.setState({
          index: this.state.cityData.indexOf(data),
        })
      }
    })
  }
  render() {
    const { cityData, index } = this.state
    return (
      <>
        <Navbar />
        <ApplicationHero
          background={applicationHero}
          headingFirst="Application"
          intro="Do you want to learn state-of-the-art tech? Do you want to be part of a thriving community? Apply now for the TechLabs Digital Shaper Program."
        />
        <ChooseCity
          heading="Choose Your City"
          subheading="At the moment, we are located in Muenster, Copenhagen and Barcelona!"
          isClicked={this.isClicked}
          muensterStart={cityData[0].startDate}
          muensterIsOpen={cityData[0].isOpen}
          copenhagenStart={cityData[1].startDate}
          copenhagenIsOpen={cityData[1].isOpen}
          barcelonaStart={cityData[2].startDate}
          barcelonaIsOpen={cityData[2].isOpen}
        />
        <div className={this.state.isClicked ? "d-block" : "d-none"}>
          <Requirements
            heading="Application Requirements"
            subheading="What we are looking for in an applicant?"
            link={cityData[index].link}
            isOpen={cityData[index].isOpen}
          />
          <ApplicationProcess
            heading="Application Process"
            subheading="What are the steps for a successful application?"
          />
          <div className="container">
            <CallToActionApplication
              isOpen={cityData[index].isOpen}
              link={cityData[index].link}
            />
            <LearnMore
              heading="Missed the deadline?"
              subheading="Get a first impression of what it’s like to study Data Science, Web Development, AI, or UX. Prepare yourself before the next Kick-Off!"
              firstProjectHeading="Web Development"
              firstProjectImage={Web}
              firstLink="https://app.edyoucated.org/login"
              firstButtonText="Start now"
              secondProjectHeading="Data Science"
              secondProjectImage={Ds}
              secondLink="https://app.edyoucated.org/login"
              secondButtonText="Start now"
              thirdProjectHeading="Artificial Intelligence"
              thirdProjectImage={AI}
              thirdLink="https://app.edyoucated.org/login"
              thirdButtonText="Start now"
              fourthProjectHeading="User Experience Design"
              fourthProjectImage={UX}
              fourthLink="https://app.edyoucated.org/login"
              fourthButtonText="Start now"
              externalLink={true}
            />
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
        </div>
        <Footer />
      </>
    )
  }
}

export default apply
