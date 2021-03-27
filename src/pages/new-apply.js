import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import Layout from "../components/Layout/Layout"
import Heading from "../components/smallComponents/Heading"
import ApplicationHero from "../components/applyPage/ApplicationHero"
import ApplyCheckout from "../components/applyPage/ApplyCheckout"
import ChooseCity from "../components/applyPage/ChooseCity"
import TypeFormEmbedd from "../components/applyPage/TypeformEmbedd"
import Faq from "../components/shared/Faq"
import FaqQuestion from "../components/shared/FaqQuestion"

const NewApply = props => {
  const [value, setValue] = useState({
    isClicked: false,
    cityValue: "",
    link: "",
    available: false,
  })
  const [currentStep, setCurrentStep] = useState(1)

  const allCountries = props.data.allContentfulLocationPage.edges
  const { intl } = props
  return (
    <Layout>
      <ApplicationHero
        heading="Application"
        subheading="Apply now for one of our Bootcamps"
        text="Do you want to learn state-of-the-art tech? Do you want to be part
        of a thriving community? Apply now for the TechLabs Digital Shaper
        Program. This is how the application works:"
      />

      <section className="c-explainer container">
        <div className="c-explainer__layout">
          <div className="c-explainer__number c-explainer__number--one">
            <div className="c-explainer__circle">1</div>
            <div className="c-explainer__circle--background"></div>
          </div>
          <div className="c-explainer__line">
            <div className="c-explainer__line--connector "></div>
          </div>
          <div className="c-explainer__number c-explainer__number--two">
            <div className="c-explainer__circle">2</div>
            <div className="c-explainer__circle--background"></div>
          </div>
          <div className="c-explainer__line">
            <div className="c-explainer__line--connector"></div>
          </div>
          <div className="c-explainer__number c-explainer__number--three">
            <div className="c-explainer__circle">3</div>
            <div className="c-explainer__circle--background"></div>
          </div>
        </div>
        <div className="c-explainer__layout">
          <div className="c-explainer__text c-explainer__text--one">
            <h5>Choose Track and City</h5>
            <p>
              Inform yourself about our program and the 4 available tracks.
              Choose one you want to apply for.
              <br />
              <Link to="/program">More about the tracks</Link>
            </p>
          </div>
          <div className="c-explainer__text c-explainer__text--two">
            <h5>Online Application</h5>
            <p>
              Apply online! We look through your application and check whether
              your motivation fits our requirements!
            </p>
          </div>
          <div className="c-explainer__text c-explainer__text--three">
            <h5>Feedback Process</h5>
            <p>
              After looking through all applications, we quickly get back to you
              with our final feedback!
            </p>
          </div>
        </div>
      </section>
      <ApplyCheckout
        currentStep={currentStep}
        setCurrentStep={num => setCurrentStep(num)}
        stepOne={
          <div className="container d-flex justify-content-center">
            <div className="pt-5 mt-5">
              <Heading
                heading="Requirements"
                subheading="What we are looking for in an applicant"
              />
              <div className="row mt-3">
                <div className="col-md-6">
                  <h5>
                    <span className="highlighted">Motivation</span>
                  </h5>
                  <p>
                    Are you motivated to learn tech skills online? The online
                    learning program requires you to learn independently!
                  </p>
                </div>
                <div className="col-md-6">
                  <span className="highlighted">Motivation</span>
                  <p>
                    Are you motivated to learn tech skills online? The online
                    learning program requires you to learn independently!
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <span className="highlighted">Motivation</span>
                  <p>
                    Are you motivated to learn tech skills online? The online
                    learning program requires you to learn independently!
                  </p>
                </div>
                <div className="col-md-6">
                  <span className="highlighted">Motivation</span>
                  <p>
                    Are you motivated to learn tech skills online? The online
                    learning program requires you to learn independently!
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <span className="highlighted">Motivation</span>
                  <p>
                    Are you motivated to learn tech skills online? The online
                    learning program requires you to learn independently!
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
        stepTwo={
          <ChooseCity
            heading={
              <FormattedMessage id={"applypage.choose.your.city.title"} />
            }
            subheading={
              <FormattedMessage
                id={"applypage.choose.your.city.subtitle"}
                values={{ count: allCountries.length - 1 }}
              />
            }
            locale={intl.locale}
            handleClick={(isClicked, value, available, link) => {
              setValue({
                isClicked,
                cityValue: value,
                available,
                link,
              })
              setCurrentStep(currentStep + 1)
            }}
            clickedCityValue={value}
            countries={allCountries}
          />
        }
        stepThree={
          <TypeFormEmbedd url="https://techlabsorg.typeform.com/to/PXpeuj0P" />
        }
      ></ApplyCheckout>
      <Faq>
        <FaqQuestion question="faq_1.question" answer="faq_1.answer" />
        <FaqQuestion question="faq_2.question" answer="faq_2.answer" />
        <FaqQuestion question="faq_3.question" answer="faq_3.answer" />
      </Faq>
    </Layout>
  )
}

export default injectIntl(NewApply)

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
