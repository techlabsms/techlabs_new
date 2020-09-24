import React, { Component } from "react"
import { graphql } from "gatsby"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

// components
import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import Button from "../../components/smallComponents/Button"
import Academy from "../../components/program/Academy"
import ThreeComponents from "../../components/program/ThreeComponents"
import LearnMore from "../../components/program/LearnMore"
import Faq from "../../components/shared/Faq"
import FaqQuestion from "../../components/shared/FaqQuestion"
import KeyBenefits from "../../components/shared/KeyBenefits"
import ProgrammHero from "../../components/program/ProgrammHero"
import Process from "../../components/applyPage/Process"
import Table from "../../components/program/Table"
import Testimonial from "../../components/shared/Testimonial"

// assets
import background from "../../assets/p_background.png"
import DataScience from "../../assets/dashboard.png"
import web from "../../assets/webdevpro.png"
import AI from "../../assets/ai-robot.png"
import UX from "../../assets/UX.png"
import ProgrammMobil from "../../assets/programmMobil.png"

class local extends Component {
  render() {
    const { data } = this.props
    const {
      whatIsIncluded,
    } = data.page.edges[0].node
    return (
      <div>
        <Navbar gaLabel="ldsp"/>
        <ProgrammHero
          headingFirst="Digital Shaper"
          headingSecond={<FormattedMessage id={"program.local.programmhero.headingSecond"}/>}
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
            page="ldsp"
          />
          <Table
            heading={<FormattedMessage id={"program.local.table.heading"} />}
            subheading={
              <FormattedMessage id={"program.local.table.subheading"} />
            }
            activeProgram="local"
            hasButton={false}
            codeathome={whatIsIncluded}
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
            firstButtonSection="lm_wd"
            secondButtonSection="lm_ds"
            thirdButtonSection="lm_ai"
            fourthButtonSection="lm_ux"
            gaLocation="ldsp"
          />
          <Faq>
            <FaqQuestion
              question="faq_1.question"
              answer="faq_1.answer"
            />
            <FaqQuestion
              question="faq_2.question"
              answer="faq_2.answer"
            />
            <FaqQuestion
              question="faq_3.question"
              answer="faq_3.answer"
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Button 
                  text={<FormattedMessage id={"faq.button"}/>}
                  link="/faq" 
                  primary={true}
                  gaLocation="ldsp"
                  gaSection="faq_mq" />
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
  query($locale: String) {
    timothee: file(relativePath: { eq: "timothee.png" }) {
      ...fluidImageLocal
    }
    accenture: file(relativePath: { eq: "accenture.png" }) {
      ...fluidImageLocal
    }
    page: allContentfulCodeAtHome(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          whatIsIncluded { 
            whatIsIncluded {
              time {
                hours,
                month
              }
              who,
              what {
                _1,
                _2,
                _3,
                _4
              }
              tracks {
                _1,
                _2,
                _3,
                _4
              },
              difference {
                _1,
                _2,
                _3,
              }
            }
          }
        }
      }
    }
  }
`