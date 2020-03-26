import React from "react"
import Navbar from "../../components/Navbar"
import ProgrammHero from "../../components/ProgrammHero"
import ProgrammMobil from "../../assets/programmMobil.png"
import background from "../../assets/p_background.png"
import Academy from "../../components/Academy"
import RightImageSectionHeading from "../../components/RightImageSectionHeading"
import Remote from "../../assets/program/remote.png"
import ThreeComponents from "../../components/ThreeComponents"
import KeyBenefits from "../../components/KeyBenefits"
import DataScience from "../../assets/dashboard.png"
import web from "../../assets/webdevpro.png"
import AI from "../../assets/ai-robot.png"
import UX from "../../assets/UX.png"
import LearnMore from "../../components/LearnMore"
import Footer from "../../components/Footer"

import { FormattedMessage } from "gatsby-plugin-intl"
import Table from "../../components/program/Table"
import { Component } from "react"
import Faq from "../../components/Faq"
import FaqQuestion from "../../components/FaqQuestion"

class remote extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="pb-5"></div>
        <div className="container">
          <RightImageSectionHeading
            topText={
              <FormattedMessage
                id={"program.remote.rightImageSection.topText"}
              />
            }
            heading={
              <FormattedMessage
                id={"program.remote.rightImageSection.heading"}
              />
            }
            text={
              <FormattedMessage id={"program.remote.rightImageSection.text"} />
            }
            hasButton={true}
            // TODO: Add correct link and import from enum
            buttonText="Apply now"
            buttonLink="https://techlabsorg.typeform.com/to/o08v5Y"
            image={Remote}
          />
          <Academy
            firstTrack={
              <FormattedMessage id={"program.remote.academy.first.name"} />
            }
            firstTrackText={
              <FormattedMessage id={"program.remote.academy.first.text"} />
            }
            secondTrack={
              <FormattedMessage id={"program.remote.academy.second.name"} />
            }
            secondTrackText={
              <FormattedMessage id={"program.remote.academy.second.text"} />
            }
            thirdTrack={
              <FormattedMessage id={"program.remote.academy.third.name"} />
            }
            thirdTrackText={
              <FormattedMessage id={"program.remote.academy.third.text"} />
            }
            fourthTrack={
              <FormattedMessage id={"program.remote.academy.fourth.name"} />
            }
            fourthTrackText={
              <FormattedMessage id={"program.remote.academy.fourth.text"} />
            }
          />
          <Table
            heading={<FormattedMessage id={"program.remote.table.heading"} />}
            subheading={
              <FormattedMessage id={"program.remote.table.subheading"} />
            }
            activeProgram="remote"
            hasButton={true}
            buttonLink="https://techlabsorg.typeform.com/to/o08v5Y"
          />
          <ThreeComponents
            heading={
              <FormattedMessage id={"program.remote.threeComponents.heading"} />
            }
            subheading={
              <FormattedMessage
                id={"program.remote.threeComponents.subheading"}
              />
            }
            firstHeading={
              <FormattedMessage
                id={"program.remote.threeComponents.first.heading"}
              />
            }
            firstText={
              <FormattedMessage
                id={"program.remote.threeComponents.first.text"}
              />
            }
            secondHeading={
              <FormattedMessage
                id={"program.remote.threeComponents.second.heading"}
              />
            }
            secondText={
              <FormattedMessage
                id={"program.remote.threeComponents.second.text"}
              />
            }
            thirdHeading={
              <FormattedMessage
                id={"program.remote.threeComponents.third.heading"}
              />
            }
            thirdText={
              <FormattedMessage
                id={"program.remote.threeComponents.third.text"}
              />
            }
          />
          <KeyBenefits
            heading={
              <FormattedMessage id={"program.remote.keyBenefits.heading"} />
            }
            subheading={
              <FormattedMessage id={"program.remote.keyBenefits.subheading"} />
            }
            firstHeading={
              <FormattedMessage
                id={"program.remote.keyBenefits.first.heading"}
              />
            }
            firstText={
              <FormattedMessage id={"program.remote.keyBenefits.first.text"} />
            }
            secondHeading={
              <FormattedMessage
                id={"program.remote.keyBenefits.second.heading"}
              />
            }
            secondText={
              <FormattedMessage id={"program.remote.keyBenefits.second.text"} />
            }
            thirdHeading={
              <FormattedMessage
                id={"program.remote.keyBenefits.third.heading"}
              />
            }
            thirdText={
              <FormattedMessage id={"program.remote.keyBenefits.third.text"} />
            }
            fourthHeading={
              <FormattedMessage
                id={"program.remote.keyBenefits.fourth.heading"}
              />
            }
            fourthText={
              <FormattedMessage id={"program.remote.keyBenefits.fourth.text"} />
            }
          />
          <LearnMore
            heading={
              <FormattedMessage id={"program.remote.learnMore.heading"} />
            }
            subheading={
              <FormattedMessage id={"program.remote.learnMore.subheading"} />
            }
            firstProjectHeading={
              <FormattedMessage
                id={"program.remote.learnMore.firstProjectHeading"}
              />
            }
            firstProjectImage={web}
            firstLink="/web"
            secondProjectHeading={
              <FormattedMessage
                id={"program.remote.learnMore.secondProjectHeading"}
              />
            }
            secondProjectImage={DataScience}
            secondLink="/dataScience"
            thirdProjectHeading={
              <FormattedMessage
                id={"program.remote.learnMore.thirdProjectHeading"}
              />
            }
            thirdProjectImage={AI}
            thirdLink="/ai"
            fourthProjectHeading={
              <FormattedMessage
                id={"program.remote.learnMore.fourthProjectHeading"}
              />
            }
            fourthProjectImage={UX}
            fourthLink="/ux"
          />
        </div>
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
        <Footer />
      </div>
    )
  }
}

export default remote
