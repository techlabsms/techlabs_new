import React from "react"
import { Link } from "gatsby"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"

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
            {externalLink || false ? (
              <a href={firstLink} className="btn btn-primary">
                {firstButtonText || "Learn more"}
              </a>
            ) : (
              <Link to={firstLink} className="btn btn-primary">
                {firstButtonText || "Learn more"}
              </Link>
            )}
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
            {externalLink || false ? (
              <a href={secondLink} className="btn btn-primary">
                {secondButtonText || "Learn more"}
              </a>
            ) : (
              <Link to={secondLink} className="btn btn-primary">
                {secondButtonText || "Learn more"}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="learn--card w-100 mb-4">
        <div className="row p-3 d-flex align-items-center">
          <div className="col-md-4 text-center text-md-left">
            <h3>{thirdProjectHeading}</h3>
          </div>
          <div className="col-md-3 text-center">
            <img src={thirdProjectImage} alt="" className="w-50" />
          </div>
          <div className="col-md-5 text-center text-md-right py-4">
             {externalLink || false ? (
              <a href={thirdLink} className="btn btn-primary">
                {thirdButtonText || "Learn more"}
              </a>
            ) : (
              <Link to={thirdLink} className="btn btn-primary">
                {thirdButtonText || "Learn more"}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="learn--card w-100">
        <div className="row p-3 d-flex align-items-center">
          <div className="col-md-4 text-center text-md-left">
            <h3>{fourthProjectHeading}</h3>
          </div>
          <div className="col-md-3 text-center">
            <img src={fourthProjectImage} alt="" className="w-50" />
          </div>
          <div className="col-md-5 text-center text-md-right py-4">
              {externalLink || false ? (
              <a href={fourthLink} className="btn btn-primary">
                {fourthButtonText || "Learn more"}
              </a>
            ) : (
              <Link to={fourthLink} className="btn btn-primary">
                {fourthButtonText || "Learn more"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LearnMore
