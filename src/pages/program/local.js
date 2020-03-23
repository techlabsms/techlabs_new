import React, { Component } from "react"
import Navbar from "../../components/Navbar"
import ProgrammHero from "../../components/ProgrammHero"
import Academy from "../../components/Academy"
import ThreeComponents from "../../components/ThreeComponents"
import LearnMore from "../../components/LearnMore"
import background from "../../assets/p_background.png"
import Faq from "../../components/Faq"
import FaqQuestion from "../../components/FaqQuestion"
import Process from "../../components/Process"
import DataScience from "../../assets/dashboard.png"
import web from "../../assets/webdevpro.png"
import AI from "../../assets/ai-robot.png"
import UX from "../../assets/UX.png"
import Footer from "../../components/Footer"
import ProgrammMobil from "../../assets/programmMobil.png"
import KeyBenefits from "../../components/KeyBenefits"
import Button from "../../components/smallComponents/Button"
import Table from "../../components/program/Table"

import { FormattedMessage } from "gatsby-plugin-intl"

class local extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProgrammHero
          headingFirst="Digital Shaper"
          headingSecond="Program"
          intro="Our program provides you with the most effective way to build domain knowledge in the tech sphere. Our blended-learning concept combines Online Learning, Project Work, and TechLabs Community Events. Discover our program now."
          background={background}
          backgroundMobil={ProgrammMobil}
        />
        <div className="container">
          <Academy
            firstTrack={
              <FormattedMessage id={"program.local.academy.first.name"} />
            }
            firstTrackText={
              <FormattedMessage id={"program.local.academy.first.text"} />
            }
            secondTrack={
              <FormattedMessage id={"program.local.academy.second.name"} />
            }
            secondTrackText={
              <FormattedMessage id={"program.local.academy.second.text"} />
            }
            thirdTrack={
              <FormattedMessage id={"program.local.academy.third.name"} />
            }
            thirdTrackText={
              <FormattedMessage id={"program.local.academy.third.text"} />
            }
            fourthTrack={
              <FormattedMessage id={"program.local.academy.fourth.name"} />
            }
            fourthTrackText={
              <FormattedMessage id={"program.local.academy.fourth.text"} />
            }
          />
          <Table
            heading={<FormattedMessage id={"program.local.table.heading"} />}
            subheading={
              <FormattedMessage id={"program.local.table.subheading"} />
            }
            activeProgram="local"
            hasButton={false}
          />
          <ThreeComponents
            heading={
              <FormattedMessage id={"program.local.threeComponents.heading"} />
            }
            subheading={
              <FormattedMessage
                id={"program.local.threeComponents.subheading"}
              />
            }
            firstHeading={
              <FormattedMessage
                id={"program.local.threeComponents.first.heading"}
              />
            }
            firstText={
              <FormattedMessage
                id={"program.local.threeComponents.first.text"}
              />
            }
            secondHeading={
              <FormattedMessage
                id={"program.local.threeComponents.second.heading"}
              />
            }
            secondText={
              <FormattedMessage
                id={"program.local.threeComponents.second.text"}
              />
            }
            thirdHeading={
              <FormattedMessage
                id={"program.local.threeComponents.third.heading"}
              />
            }
            thirdText={
              <FormattedMessage
                id={"program.local.threeComponents.third.text"}
              />
            }
          />
          <KeyBenefits
            heading={
              <FormattedMessage id={"program.local.keyBenefits.heading"} />
            }
            subheading={
              <FormattedMessage id={"program.local.keyBenefits.subheading"} />
            }
            firstHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.first.heading"}
              />
            }
            firstText={
              <FormattedMessage id={"program.local.keyBenefits.first.text"} />
            }
            secondHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.second.heading"}
              />
            }
            secondText={
              <FormattedMessage id={"program.local.keyBenefits.second.text"} />
            }
            thirdHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.third.heading"}
              />
            }
            thirdText={
              <FormattedMessage id={"program.local.keyBenefits.third.text"} />
            }
            fourthHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.fourth.heading"}
              />
            }
            fourthText={
              <FormattedMessage id={"program.local.keyBenefits.fourth.text"} />
            }
          />
          <Process />
          <LearnMore
            heading="Learn More"
            subheading="Get more information about the three different learning tracks!"
            firstProjectHeading="Web Development"
            firstProjectImage={web}
            firstLink="/web"
            secondProjectHeading="Data Science"
            secondProjectImage={DataScience}
            secondLink="/dataScience"
            thirdProjectHeading="Artificial Intelligence"
            thirdProjectImage={AI}
            thirdLink="/ai"
            fourthProjectHeading="User Experience Design"
            fourthProjectImage={UX}
            fourthLink="/ux"
          />
          <Faq>
            <FaqQuestion
              question="How do I apply for the Digital Shaper Program?"
              answer="This can be done directly on our application page. Make sure to look up the application deadline for your location."
            />
            <FaqQuestion
              question="What should I write in my application to be accepted?"
              answer="At TechLabs we want to understand why you are motivated to join our program. We are building a vibrant and interdisciplinary team, so don’t hesitate to apply independent of your study background and previous knowledge. There is no such thing as the right answer to our questions."
            />
            <FaqQuestion
              question="How can I imagine the time required?"
              answer="In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum. Our learning materials have a total duration of 50+ hours. Please also bear in mind that the project phase is usually linked to increased coordination effort with your project team. In any case, the invested time will be worth it!"
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Button text="More Questions?" link="/faq" primary={true} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default local
