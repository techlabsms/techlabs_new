import React, { useEffect, useState } from "react"
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
import Explainer from "../components/applyPage/Explainer"
import Seo from "../components/Layout/Seo"

const Apply = props => {
  const [value, setValue] = useState({
    isClicked: false,
    cityValue: "",
    link: "",
    available: false,
  })

  let width = 0

  if (typeof window !== `undefined`) {
    width = window.innerWidth
  }

  const [currentStep, setCurrentStep] = useState(1)
  const [windowWidth, setWindowWidth] = useState(width)
  const [showAll, setShowAll] = useState(false)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  const allCountries = props.data.allContentfulLocationPage.edges
  const { intl } = props
  return (
    <Layout>
      <Seo title="Apply now" />
      <ApplicationHero
        heading={<FormattedMessage id={"applypage.headline"} />}
        subheading={<FormattedMessage id={"applypage.subheadline"} />}
        text={<FormattedMessage id={"applypage.introText"} />}
      />

      <Explainer />

      <ApplyCheckout
        currentStep={currentStep}
        setCurrentStep={num => setCurrentStep(num)}
        city={value.cityValue}
        isMobile={windowWidth < 768}
        stepOne={
          <div className="container d-flex justify-content-center">
            <div className="pt-5 mt-3">
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
                {windowWidth < 768 && !showAll ? null : (
                  <div className="col-md-6">
                    <h5>
                      <span className="highlighted">
                        <FormattedMessage
                          id={"applypage.requirements.time.title"}
                        />
                      </span>
                    </h5>
                    <p>
                      <FormattedMessage
                        id={"applypage.requirements.time.text"}
                      />
                    </p>
                  </div>
                )}
              </div>
              {windowWidth < 768 && !showAll ? (
                <div className="c-checkout__requirements">
                  <button onClick={() => setShowAll(true)}>
                    Show all Requirements
                  </button>
                </div>
              ) : (
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
              )}
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
            handleClick={(isClicked, value, available, open, link) => {
              setValue({
                isClicked,
                cityValue: value,
                available,
                link,
              })
              if (available && open) {
                setCurrentStep(currentStep + 1)
              }
            }}
            clickedCityValue={value}
            countries={allCountries}
          />
        }
        stepThree={
          <TypeFormEmbedd
            subheading={
              <FormattedMessage id={"applypage.typeformembedd.subheading"} />
            }
            url={value.link}
            isMobile={windowWidth < 768}
            city={value.cityValue}
          />
        }
      ></ApplyCheckout>
      <div className="mt-5 pt-5">
        <Faq>
          <FaqQuestion question="faq_1.question" answer="faq_1.answer" />
          <FaqQuestion question="faq_2.question" answer="faq_2.answer" />
          <FaqQuestion question="faq_3.question" answer="faq_3.answer" />
        </Faq>
      </div>
    </Layout>
  )
}

export default injectIntl(Apply)

export const pageQuery = graphql`
  query($locale: String) {
    allContentfulLocationPage(filter: { node_locale: { eq: $locale } }, sort: {fields:[country, heading], order: [DESC, ASC]}) {
      edges {
        node {
          heading
          country
          applicationStart(formatString: "YYYY-MM-DDThh:mm:ss")
          applicationEnd(formatString: "YYYY-MM-DDThh:mm:ss")
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
