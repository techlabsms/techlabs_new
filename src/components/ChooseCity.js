import React from "react"
import skylineMuenster from "../assets/SkylineMuenster.png"
import skylineKopenhagen from "../assets/skylineKopenhagen.png"

const ChooseCity = ({ heading, subheading }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>{heading}</h2>
            <div className="section-divider" />
            <p className="basicSection--sub">{subheading}</p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-3 mt-4">
            <div className="card">
              <h4 className="chooseYourCity--heading">Muenster</h4>
              <div className="section-divider" />
              <img
                src={skylineMuenster}
                alt="skyline Muenster"
                className="py-3"
              />
            </div>
          </div>
          <div className="col-md-3 d-flex mt-4">
            <div className="card h-100 w-100">
              <h4 className="chooseYourCity--heading">Copenhagen</h4>
              <div className="section-divider" />
              <div className="my-auto mx-auto py-3">
                <img
                  src={skylineKopenhagen}
                  alt="skyline Muenster"
                  className="py-3"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4">
            <div className="card">
              <h4 className="chooseYourCity--heading">Your City?</h4>
              <div className="section-divider" />
              <img
                src={skylineMuenster}
                alt="skyline Muenster"
                className="py-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChooseCity
