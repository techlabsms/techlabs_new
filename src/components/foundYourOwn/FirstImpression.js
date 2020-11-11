import React from "react"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const FirstImpression = ({
  heading,
  subheading,
  firstHeading,
  firstImage,
  firstText,
  firstLink,
  secondHeading,
  secondImage,
  secondText,
  secondLink,
  gaLabel
}) => {
  return (
    <Container>
      <div className="row firstImpression">
        <Heading heading={heading} subheading={subheading} />
      </div>
      <div className="row">
        <div className="col-12 col-md-5 py-5">
          <div className="firstImpression--card">
            <h3 className="firstImpression--card-heading text-center">
              {firstHeading}
            </h3>
            <div className="text-center mt-3">
              <img src={firstImage} alt="" className="w-50" />
            </div>
            <p className="firstImpression--card-text text-center">
              {firstText}
            </p>
            <div className="text-center">
              <a 
              onClick={e => {
                trackCustomEvent({
                  category: "Button",
                  action: "Click",
                  label: gaLabel
                })
              }}
              href={firstLink} 
              className="noDec">
                <div className="firstImpression--card-btn">
                  <FormattedMessage id={"dataScience.first_impression.FirstImpression.button"}/>
                </div>
              </a>
            </div>
          </div>
        </div>

        {secondHeading && (
          <>
            <div className="col-lg-2 d-none d-lg-flex">
              <div className="row m-auto h-100 align-items-center d-none d-md-flex">
                <div className="firstImpression--card-circle-1 firstImpression--card-circle" />
                <div className="firstImpression--card-circle-2 firstImpression--card-circle ml-4" />
                <div className="firstImpression--card-circle-3 firstImpression--card-circle ml-4" />
              </div>
            </div>
            <div className="col-12 col-md-5 py-5">
              <div className="firstImpression--card">
                <h3 className="firstImpression--card-heading text-center">
                  {secondHeading}
                </h3>
                <div className="text-center mt-3">
                  <img src={secondImage} alt="" className="w-50" />
                </div>
                <p className="firstImpression--card-text text-center">
                  {secondText}
                </p>
                <div className="text-center">
                  <a 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: gaLabel
                    })
                  }}
                  href={secondLink} 
                  className="noDec">
                    <div className="firstImpression--card-btn">
                      <FormattedMessage id={"dataScience.first_impression.FirstImpression.button"}/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  )
}

export default FirstImpression
