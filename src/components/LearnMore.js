import React from "react"
import { Link } from "gatsby"

const LearnMore = ({
  heading,
  subheading,
  firstProjectHeading,
  firstProjectText,
  firstProjectImage,
  secondProjectHeading,
  secondProjectText,
  secondProjectImage,
  thirdProjectHeading,
  thirdProjectText,
  thirdProjectImage,
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
      <div className="row">
        <div className="col-md-4 py-5">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">{firstProjectHeading}</span>
            </h3>
            <div className="card-body">
              <div className="row h-75 pb-5 mb-2">
                <p className="projects--text">{firstProjectText}</p>
                <img
                  src={firstProjectImage}
                  alt=""
                  className="projects--img text-center my-5"
                />
              </div>
              <Link to="/web" className="mt-5 projects--btn noDec">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-5">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">{secondProjectHeading}</span>
            </h3>
            <div className="card-body">
              <div className="row h-75 pb-5 mb-2">
                <p className="projects--text">{secondProjectText}</p>
                <img
                  src={secondProjectImage}
                  alt=""
                  className="projects--img text-center my-5"
                />
              </div>
              <Link to="/dataScience" className="mt-5 projects--btn noDec">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-5">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">{thirdProjectHeading}</span>
            </h3>
            <div className="card-body">
              <div className="row h-75 pb-5 mb-2">
                <p className="projects--text">{thirdProjectText}</p>
                <img
                  src={thirdProjectImage}
                  alt=""
                  className="projects--img text-center my-5"
                />
              </div>
              <Link to="/ai" className="mt-5 projects--btn noDec">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LearnMore
