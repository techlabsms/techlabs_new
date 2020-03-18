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
import { ApplicationLinkEnum, getLink } from "../enums/ApplicationLinkEnum"
import { CityCountryEnum, CountryEnum } from "../enums/CountryEnum.js"
import { FormattedMessage } from "gatsby-plugin-intl"

class apply extends Component {
  state = {
    isClicked: false,
    cityValue: "",
    open: false,
    link: "",
  }

  render() {
    const { isClicked } = this.state
    return (
      <>
        <Navbar />
        <ApplicationHero
          background={applicationHero}
          headingFirst="Application"
          intro="Do you want to learn state-of-the-art tech? Do you want to be part of a thriving community? Apply now for the TechLabs Digital Shaper Program."
        />
        <ChooseCity
          heading={<FormattedMessage id={"applypage.choose.your.city.title"} />}
          subheading={
            <FormattedMessage id={"applypage.choose.your.city.subtitle"} />
          }
          handleClick={(isClicked, value, open) => {
            this.setState({
              isClicked,
              cityValue: value,
              open,
              link: getLink(value),
            })
          }}
          clickedCityValue={this.state.cityValue}
        />
        <div className={isClicked ? "d-block" : "d-none"}>
          <Requirements
            heading="Application Requirements"
            subheading="What we are looking for in an applicant?"
            link={this.state.link}
            isOpen={this.state.open}
          />
          <ApplicationProcess
            heading="Application Process"
            subheading="What are the steps for a successful application?"
          />
          <div className="container">
            <CallToActionApplication isOpen={true} link={this.state.link} />
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
