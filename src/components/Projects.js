import React from "react"
import Charts from "../assets/charts2.png"
import smartCity from "../assets/smartCity.png"

const Projects = ({
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
        <div className="col-4">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">{firstProjectHeading}</span>
            </h3>
            <div className="card-body">
              <p className="projects--text">{firstProjectText}</p>
              <img src={firstProjectImage} alt="" />
              <button className="btn btn-primary mt-5">More information</button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">{secondProjectHeading}</span>
            </h3>
            <div className="card-body">
              <p className="projects--text">{secondProjectText}</p>
              <img src={secondProjectImage} alt="" />
              <button className="btn btn-primary mt-5">More information</button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading">
              <span className="highlighted">{thirdProjectHeading}</span>
            </h3>
            <div className="card-body">
              <p className="projects--text">{thirdProjectText}</p>
              <img src={thirdProjectImage} alt="" />
              <button className="btn btn-primary mt-5">More information</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
