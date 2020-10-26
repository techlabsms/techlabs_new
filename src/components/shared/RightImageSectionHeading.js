import React from "react"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"
import Img from "gatsby-image"

const RightImageSectionHeading = ({
  heading,
  subheading,
  text,
  image,
  hasButton,
  buttonText,
  buttonLink,
  leftSize,
  rightSize,
  topText,
  infoText,
  galocation,
  gasection
}) => {
  return (
    <Container>
      <div className="mt-5">
        {topText && (
          <h4 className="color-gl">
            <strong>{topText}</strong>
          </h4>
        )}
        <div className="row">
          <div className={`col-lg-${leftSize || 6} order-2 order-lg-1`}>
            <Heading heading={heading} subheading={subheading} />
            <div className="basicSection--text">{text}</div>
            {hasButton && (
              <div className="row mt-5 ml-2">
                <a 
                onClick={e => {
                  trackCustomEvent({
                    category: "Button",
                    action: "Click",
                    label: galocation +  '_' + gasection,
                  })
                }}
                className="btn btn-primary d-inline" href={buttonLink}>
                  {buttonText}
                </a>
              </div>
            )}
            {infoText && <p className="highlighted my-4">{infoText}</p>}
          </div>
          <div
            className={`col-lg-${rightSize ||
              6} text-center  order-1 mb-3 d-flex`}
          >
            <Img
              fluid={image}
              alt=""
              className="w-100 mb-3 align-self-center"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default RightImageSectionHeading
