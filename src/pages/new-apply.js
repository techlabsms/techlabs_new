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
        heading={<FormattedMessage id={"applypage.headline"} />}
        subheading={<FormattedMessage id={"applypage.subheadline"} />}
        text={<FormattedMessage id={"applypage.introText"} />}
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
            <h5>
              <FormattedMessage id={"applypage.steps.first.heading"} />
            </h5>
            <p>
              <FormattedMessage id={"applypage.steps.first.text"} />
              <br />
              <Link to="/program">
                <FormattedMessage id={"applypage.steps.first.link"} />
              </Link>
            </p>
          </div>
          <div className="c-explainer__text c-explainer__text--two">
            <h5>
              <FormattedMessage id={"applypage.steps.second.heading"} />
            </h5>
            <p>
              <FormattedMessage id={"applypage.steps.second.text"} />
            </p>
          </div>
          <div className="c-explainer__text c-explainer__text--three">
            <h5>
              <FormattedMessage id={"applypage.steps.third.heading"} />
            </h5>
            <p>
              <FormattedMessage id={"applypage.steps.third.heading"} />
            </p>
          </div>
        </div>
      </section>
      <ApplyCheckout
        currentStep={currentStep}
        setCurrentStep={num => setCurrentStep(num)}
        city={value.cityValue}
        stepOne={
          <div className="container d-flex justify-content-center">
            <div className="pt-5 mt-5">
              <Heading
                heading={
                  <FormattedMessage id={"applypage.checkout.first.heading"} />
                }
                subheading={
                  <FormattedMessage
                    id={"applypage.checkout.first.subheading"}
                  />
                }
              />
              <div className="row mt-3">
                <div className="col-md-6">
                  <h5>
                    <span className="highlighted">
                      <FormattedMessage
                        id={"applypage.requirements.motivation.title"}
                      />
                    </span>
                  </h5>
                  <p>
                    <FormattedMessage
                      id={"applypage.requirements.motivation.text"}
                    />
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>
                    <span className="highlighted">
                      <FormattedMessage
                        id={"applypage.requirements.english.title"}
                      />
                    </span>
                  </h5>
                  <p>
                    <FormattedMessage
                      id={"applypage.requirements.english.text"}
                    />
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <h5>
                    <span className="highlighted">
                      <FormattedMessage
                        id={"applypage.requirements.drive.title"}
                      />
                    </span>
                  </h5>
                  <p>
                    <FormattedMessage
                      id={"applypage.requirements.drive.text"}
                    />
                  </p>
                </div>
                <div className="col-md-6">
                  <h5>
                    <span className="highlighted">
                      <FormattedMessage
                        id={"applypage.requirements.time.title"}
                      />
                    </span>
                  </h5>
                  <p>
                    <FormattedMessage id={"applypage.requirements.time.text"} />
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <h5>
                    <span className="highlighted">
                      <FormattedMessage
                        id={"applypage.requirements.community.title"}
                      />
                    </span>
                  </h5>
                  <p>
                    <FormattedMessage
                      id={"applypage.requirements.community.text"}
                    />
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
        stepThree={<TypeFormEmbedd url={value.link} />}
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
