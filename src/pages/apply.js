import React, { Component } from "react"
import { graphql } from "gatsby"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Layout from "../components/Layout/Layout"
import ApplicationHero from "../components/applyPage/ApplicationHero"
import ChooseCity from "../components/applyPage/ChooseCity"
import Requirements from "../components/applyPage/Requirements"
import applicationHero from "../assets/application.png"
import ApplicationProcess from "../components/applyPage/ApplicationProcess"
import CallToActionApplication from "../components/applyPage/CallToActionApplication"
import Faq from "../components/shared/Faq"
import FaqQuestion from "../components/shared/FaqQuestion"
import LearnMore from "../components/program/LearnMore"

// assets
import AI from "../assets/ai-robot.png"
import Web from "../assets/webdevpro.png"
import Ds from "../assets/dashboard.png"
import UX from "../assets/UX.png"

class apply extends Component {
  state = {
    isClicked: false,
    cityValue: "",
    link: "",
    available: false,
  }

  render() {
    const { isClicked } = this.state
    return (
      <Layout>
        <ApplicationHero
          background={applicationHero}
          headingFirst={<FormattedMessage id={"applypage.headline.ApplicationHero.headingFirst"}/>}
          intro={<FormattedMessage id={"applypage.headline.ApplicationHero.intro"}/>}
        />
        <ChooseCity
          heading={<FormattedMessage id={"applypage.choose.your.city.title"} />}
          subheading={
            <FormattedMessage id={"applypage.choose.your.city.subtitle"} />
          }
          handleClick={(isClicked, value, available, link) => {
            this.setState({
              isClicked,
              cityValue: value,
              available,
              link,
            })
          }}
          clickedCityValue={this.state.cityValue}
          countries={this.props.data.allContentfulLocationPage.edges}
        />
        <div className={isClicked ? "d-block" : "d-none"}>
          <Requirements
            heading={<FormattedMessage id={"applypage.requirements.heading"} />}
            subheading={<FormattedMessage id={"applypage.requirements.subheading"} />}
            link={this.state.link}
            isOpen={this.state.available}
          />
          <ApplicationProcess
            heading={<FormattedMessage id={"applypage.applicationProcess.heading"} />}
            subheading={<FormattedMessage id={"applypage.applicationProcess.subheading"} />}
          />
          <div className="container">
            <CallToActionApplication
              isOpen={this.state.available}
              link={this.state.link}
            />          
            <LearnMore
              heading={<FormattedMessage id={"applypage.moreinformation.heading"}/>}
              subheading={<FormattedMessage id={"applypage.moreinformation.subheading"}/>}
              firstProjectHeading={<FormattedMessage id={"projects.tech.webdev"}/>}
              firstProjectImage={Web}
              firstLink="https://app.edyoucated.org/invitation/team/c6a5346d-035c-4a98-bf1b-13c36fe25eb3"
              firstButtonText={<FormattedMessage id={"applypage.text.start_now"}/>}
              secondProjectHeading={<FormattedMessage id={"projects.tech.ds"}/>}
              secondProjectImage={Ds}
              secondLink="https://app.edyoucated.org/invitation/team/c6a5346d-035c-4a98-bf1b-13c36fe25eb3"
              secondButtonText={<FormattedMessage id={"applypage.text.start_now"}/>}
              thirdProjectHeading={<FormattedMessage id={"projects.tech.ai"}/>}
              thirdProjectImage={AI}
              thirdLink="https://app.edyoucated.org/invitation/team/c6a5346d-035c-4a98-bf1b-13c36fe25eb3"
              thirdButtonText={<FormattedMessage id={"applypage.text.start_now"}/>}
              fourthProjectHeading={<FormattedMessage id={"projects.tech.ux"}/>}
              fourthProjectImage={UX}
              fourthLink="https://app.edyoucated.org/invitation/team/c6a5346d-035c-4a98-bf1b-13c36fe25eb3"
              fourthButtonText={<FormattedMessage id={"applypage.text.start_now"}/>}
              externalLink={true}
            />
            <Faq>
              <FaqQuestion
                question={
                  <FormattedMessage id={"faq_1.question"}/>
                }
                answer={
                  <FormattedMessage id={"faq_1.applypage.answer"}/>
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
          </div>
        </div>
      </Layout>
    )
  }
}

export default apply

export const pageQuery = graphql`
  query {
    allContentfulLocationPage {
      edges {
        node {
          heading
          country
          applicationStart
          applicationEnd
          applicationLink
          avaiableTracks {
            ai
            web
            data
            ux
          }
        }
      }
    }
  }
`
