import React, { Component } from "react"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

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
import ApplyNewsletter from "../components/applyPage/ApplyNewsletter"

class apply extends Component {
  state = {
    isClicked: false,
    cityValue: "",
    link: "",
    available: false,
  }

  render() {
    const { isClicked } = this.state
    const { intl } = this.props

    const allCountries = this.props.data.allContentfulLocationPage.edges

    return (
      <Layout>
        <ApplicationHero
          background={applicationHero}
          headingFirst={
            <FormattedMessage
              id={"applypage.headline.ApplicationHero.headingFirst"}
            />
          }
          intro={
            <FormattedMessage id={"applypage.headline.ApplicationHero.intro"} />
          }
        />
        <ChooseCity
          heading={<FormattedMessage id={"applypage.choose.your.city.title"} />}
          subheading={
            <FormattedMessage
              id={"applypage.choose.your.city.subtitle"}
              values={{ count: allCountries.length - 1 }}
            />
          }
          locale={intl.locale}
          handleClick={(isClicked, value, available, link) => {
            this.setState({
              isClicked,
              cityValue: value,
              available,
              link,
            })
          }}
          clickedCityValue={this.state.cityValue}
          countries={allCountries}
        />
        <div className={isClicked ? "d-block" : "d-none"}>
          <Requirements
            heading={<FormattedMessage id={"applypage.requirements.heading"} />}
            subheading={
              <FormattedMessage id={"applypage.requirements.subheading"} />
            }
            link={this.state.link}
            isOpen={this.state.available}
          />
          <ApplicationProcess
            heading={
              <FormattedMessage id={"applypage.applicationProcess.heading"} />
            }
            subheading={
              <FormattedMessage
                id={"applypage.applicationProcess.subheading"}
              />
            }
          />
          <div className="container">
            <CallToActionApplication
              isOpen={this.state.available}
              link={this.state.link}
            />
            <ApplyNewsletter 
              allCountries={allCountries}
              actionLink={"https://techlabs.org"}
            />
            <Faq>
              <FaqQuestion
                question="faq_1.question"
                answer="faq_1.applypage.answer"
              />
              <FaqQuestion question="faq_2.question" answer="faq_2.answer" />
              <FaqQuestion question="faq_3.question" answer="faq_3.answer" />
            </Faq>
          </div>
        </div>
      </Layout>
    )
  }
}

export default injectIntl(apply)

export const pageQuery = graphql`
  query($locale: String) {
    allContentfulLocationPage(filter: { node_locale: { eq: $locale } }) {
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
