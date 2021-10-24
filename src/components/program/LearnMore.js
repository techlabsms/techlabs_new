import React from "react"

// plugins
import { FormattedMessage } from "gatsby-plugin-react-intl"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"
import Button from "../smallComponents/Button"

const LearnMore = ({
  heading,
  subheading,
  firstProjectHeading,
  firstLink,
  firstButtonText,
  firstProjectImage,
  secondProjectHeading,
  secondLink,
  secondButtonText,
  secondProjectImage,
  thirdProjectHeading,
  thirdLink,
  thirdButtonText,
  thirdProjectImage,
  fourthProjectHeading,
  fourthLink,
  fourthButtonText,
  fourthProjectImage,
  externalLink,
}) => {
  const learnMoreButton = (
    <FormattedMessage id={"program.local.learn_more.button"} />
  )
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />

      <div className="learn--card w-100 mb-4">
        <div className="row p-3 d-flex align-items-center">
          <div className="col-md-4 text-center text-md-left">
            <h3>{firstProjectHeading}</h3>
          </div>
          <div className="col-md-3 text-center py-2">
            <img src={firstProjectImage} alt="" className="w-50" />
          </div>
          <div className="col-md-5 text-center text-md-right py-4">
            <Button
              text={firstButtonText || learnMoreButton}
              primary={true}
              link={firstLink}
              isExternal={externalLink || false}
            />
          </div>
        </div>
      </div>
      <div className="learn--card w-100 mb-4">
        <div className="row p-3 d-flex align-items-center">
          <div className="col-md-4 text-center text-md-left">
            <h3>{secondProjectHeading}</h3>
          </div>
          <div className="col-md-3 text-center">
            <img src={secondProjectImage} alt="" className="w-50" />
          </div>
          <div className="col-md-5 text-center text-md-right py-4">
            <Button
              text={secondButtonText || learnMoreButton}
              primary={true}
              link={secondLink}
              isExternal={externalLink || false}
            />
          </div>
        </div>
      </div>
      {thirdProjectHeading && (
        <div className="learn--card w-100 mb-4">
          <div className="row p-3 d-flex align-items-center">
            <div className="col-md-4 text-center text-md-left">
              <h3>{thirdProjectHeading}</h3>
            </div>
            <div className="col-md-3 text-center">
              <img src={thirdProjectImage} alt="" className="w-50" />
            </div>
            <div className="col-md-5 text-center text-md-right py-4">
              <Button
                text={thirdButtonText || learnMoreButton}
                primary={true}
                link={thirdLink}
                isExternal={externalLink || false}
              />
            </div>
          </div>
        </div>
      )}
      {fourthProjectHeading && (
        <div className="learn--card w-100">
          <div className="row p-3 d-flex align-items-center">
            <div className="col-md-4 text-center text-md-left">
              <h3>{fourthProjectHeading}</h3>
            </div>
            <div className="col-md-3 text-center">
              <img src={fourthProjectImage} alt="" className="w-50" />
            </div>
            <div className="col-md-5 text-center text-md-right py-4">
              <Button
                text={fourthButtonText || learnMoreButton}
                primary={true}
                link={fourthLink}
                isExternal={externalLink || false}
              />
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default LearnMore
