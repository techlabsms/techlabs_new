import React, { Component } from "react"
import { graphql } from "gatsby"

// plugins && external
import { FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import Layout from "../components/Layout/Layout"
import CallToAction from "../components/shared/CallToAction"
import Faq from "../components/shared/Faq"
import FaqQuestion from "../components/shared/FaqQuestion"
import ProgrammHero from "../components/program/ProgrammHero"
import LeftImageSection from "../components/shared/LeftImageSection"
import RightImageSection from "../components/shared/RightImageSection"
import Projects from "../components/program/Projects"
import Testimonial from "../components/shared/Testimonial"
import WhatYouWillLearn from "../components/program/WhatYouWillLearn"

// assets
import dsCover from "../assets/ds_cover.png"
import david from "../assets/david.png"
import background from "../assets/ds_background.png"
import backgroundMobil from "../assets/courseMobil.png"

class dataScience extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <div className="container-fluid">
          <ProgrammHero
            headingFirst={
              <FormattedMessage
                id={"dataScience.headline.ProgrammHero.headingFirst"}
              />
            }
            headingSecond={
              <FormattedMessage
                id={"dataScience.headline.ProgrammHero.headingSecond"}
              />
            }
            showCard={true}
            background={background}
            intro={
              <FormattedMessage
                id={"dataScience.headline.ProgrammHero.intro"}
              />
            }
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading={
              <FormattedMessage
                id={"dataScience.why.RightImageSection.heading"}
              />
            }
            subheading={
              <FormattedMessage
                id={"dataScience.why.RightImageSection.subheading"}
              />
            }
            text={
              <FormattedMessage id={"dataScience.why.RightImageSection.text"} />
            }
            image={dsCover}
          />
          <WhatYouWillLearn
            intro={
              <FormattedMessage
                id={"dataScience.learn.WhatYouWillLearn.intro"}
              />
            }
            first={
              <FormattedMessage
                id={"dataScience.learn.WhatYouWillLearn.first"}
              />
            }
            second={
              <FormattedMessage
                id={"dataScience.learn.WhatYouWillLearn.second"}
              />
            }
            third={
              <FormattedMessage
                id={"dataScience.learn.WhatYouWillLearn.third"}
              />
            }
            fourth={
              <FormattedMessage
                id={"dataScience.learn.WhatYouWillLearn.fourth"}
              />
            }
          />
          <LeftImageSection
            heading={
              <FormattedMessage
                id={"dataScience.more.LeftImageSection.heading"}
              />
            }
            subheading={
              <FormattedMessage
                id={"dataScience.more.LeftImageSection.subheading"}
              />
            }
            text={
              <FormattedMessage id={"dataScience.more.LeftImageSection.text"} />
            }
            image={david}
          />
          <Testimonial
            heading={<FormattedMessage id={"testimonial.heading"} />}
            subheading={
              <FormattedMessage id={"dataScience.testimonial.subheading"} />
            }
            text={<FormattedMessage id={"dataScience.katharina.quote"} />}
            testimonialAvatar={data.katharina.childImageSharp.fluid}
            testimonialName="Katharina Schamber"
            testimonialTagline="Application Development Specialist @"
            testimonialLogo={data.accenture.childImageSharp.fluid}
          />
          <Projects />
          <CallToAction />
          <Faq>
            <FaqQuestion question="faq_1.question" answer="faq_1.answer" />
            <FaqQuestion question="faq_2.question" answer="faq_2.answer" />
            <FaqQuestion question="faq_3.question" answer="faq_3.answer" />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Link to="/faq" className="btn btn-primary">
                  <FormattedMessage id={"faq.button"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default dataScience

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
    katharina: file(relativePath: { eq: "katharina.png" }) {
      ...fluidImageLocal
    }
    accenture: file(relativePath: { eq: "accint.png" }) {
      ...fluidImageLocal
    }
  }
`
