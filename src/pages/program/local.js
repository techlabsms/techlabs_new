import React, { Component } from "react"
import { graphql } from "gatsby"
import Navbar from "../../components/Layout/Navbar"
import ProgrammHero from "../../components/program/ProgrammHero"
import Academy from "../../components/program/Academy"
import ThreeComponents from "../../components/program/ThreeComponents"
import LearnMore from "../../components/program/LearnMore"
import background from "../../assets/p_background.png"
import Faq from "../../components/shared/Faq"
import FaqQuestion from "../../components/shared/FaqQuestion"
import Process from "../../components/applyPage/Process"
import DataScience from "../../assets/dashboard.png"
import web from "../../assets/webdevpro.png"
import AI from "../../assets/ai-robot.png"
import UX from "../../assets/UX.png"
import Footer from "../../components/Layout/Footer"
import ProgrammMobil from "../../assets/programmMobil.png"
import KeyBenefits from "../../components/shared/KeyBenefits"
import Button from "../../components/smallComponents/Button"
import Table from "../../components/program/Table"
import Testimonial from "../../components/shared/Testimonial"

import { FormattedMessage } from "gatsby-plugin-intl"

class local extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Navbar />
        <ProgrammHero
          headingFirst="Digital Shaper"
          headingSecond="Program"
          intro={<FormattedMessage id={"programs.subheading"}/>}
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
          <Testimonial
            heading={<FormattedMessage id={"testimonial.heading"}/>}
            subheading={<FormattedMessage id={"program.local.testimonial.subheading"}/>}
            text={<FormattedMessage id={"program.local.timothee.quote"}/>}
            testimonialAvatar={data.timothee.childImageSharp.fluid}
            testimonialName="Timothée Clolus"
            testimonialTagline="Front end Developer @"
            testimonialLogo={data.accenture.childImageSharp.fluid}
          />
          <Process />
          <LearnMore
            heading={<FormattedMessage id={"program.local.learn_more.heading"}/>}
            subheading={<FormattedMessage id={"program.local.learn_more.subheading"}/>}
            firstProjectHeading={<FormattedMessage id={"program.local.learn_more.firstProject"}/>}
            firstProjectImage={web}
            firstLink="/web"
            secondProjectHeading={<FormattedMessage id={"program.local.learn_more.secondProject"}/>}
            secondProjectImage={DataScience}
            secondLink="/dataScience"
            thirdProjectHeading={<FormattedMessage id={"program.local.learn_more.thirdProject"}/>}
            thirdProjectImage={AI}
            thirdLink="/ai"
            fourthProjectHeading={<FormattedMessage id={"program.local.learn_more.fourthProject"}/>}
            fourthProjectImage={UX}
            fourthLink="/ux"
          />
          <Faq>
            <FaqQuestion
              question={
                <FormattedMessage id={"faq_1.question"}/>
              }
              answer={
                <FormattedMessage id={"faq_1.answer"}/>
              }
            />
            <FaqQuestion
              question={
                <FormattedMessage id={"faq_2.question"}/>
              }
              answer={
                <FormattedMessage id={"faq_2.answer"}/>
              }
            />
            <FaqQuestion
              question={
                <FormattedMessage id={"faq_3.question"}/>
              }
              answer={
                <FormattedMessage id={"faq_3.answer"}/>
              }
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Button 
                  text={<FormattedMessage id={"faq.button"}/>}
                  link="/faq" 
                  primary={true} />
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


export const fluidImageLocal = graphql`
  fragment fluidImageLocal on File {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    timothee: file(relativePath: { eq: "timothee.png" }) {
      ...fluidImageLocal
    }
    accenture: file(relativePath: { eq: "accenture.png" }) {
      ...fluidImageLocal
    }
  }
`