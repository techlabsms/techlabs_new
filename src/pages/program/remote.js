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
        <Footer />
      </div>
    )
  }
}

export default remote
