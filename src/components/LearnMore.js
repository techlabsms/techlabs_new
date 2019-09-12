import React from "react"
import { Link } from "gatsby"
import arrow from "../assets/arrow.svg";

const LearnMore = ({
  heading,
  subheading,
  firstProjectHeading,
  firstLink,
  firstProjectImage,
  secondProjectHeading,
  secondLink,
  secondProjectImage,
  thirdProjectHeading,
  thirdLink,
  thirdProjectImage,
  fourthProjectHeading,
  fourthLink,
  fourthProjectImage,
}) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>{heading}</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
        </div>
      </div>
      <div className="learn--card w-100 mb-4">
        <div className="row p-3 d-flex align-items-center">
          <div className="col-md-4 text-center text-md-left">
            <h3>{firstProjectHeading}</h3>
          </div>
          <div className="col-md-3 text-center py-2">
            <img src={firstProjectImage} alt="" className="w-50" />
          </div>
          <div className="col-md-5 text-center text-md-right py-4">
            <Link to={firstLink} className="btn btn-primary">Learn more</Link>
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
            <Link to={secondLink} className="btn btn-primary">Learn more</Link>
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
            <Link to={thirdLink} className="btn btn-primary">Learn more</Link>
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
            <Link to={fourthLink} className="btn btn-primary">Learn more</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LearnMore
