import React from "react"
import dashboard from "../assets/dashboard.png"

const FirstImpression = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>Get a first Impression</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">Check out our Open Curriculum</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-5">
          <div className="firstImpression--card">
            <h3 className="firstImpression--card-heading text-center">
              Introduction to Data Science with Python
            </h3>
            <div className="text-center mt-3">
              <img src={dashboard} alt="" className="w-50" />
            </div>
            <p className="firstImpression--card-text text-center">
              Start with our free Track and learn the fundamentals with Python
              now and see if it’s right for you
            </p>
            <div className="text-center">
              <button className="firstImpression--card-btn">Start now</button>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-none d-lg-flex">
          <div className="row m-auto h-100 align-items-center d-none d-md-flex">
            <div className="firstImpression--card-circle-1 firstImpression--card-circle" />
            <div className="firstImpression--card-circle-2 firstImpression--card-circle ml-4" />
            <div className="firstImpression--card-circle-3 firstImpression--card-circle ml-4" />
          </div>
        </div>
        <div className="col-6 col-md-5">
          <div className="firstImpression--card">
            <h3 className="firstImpression--card-heading text-center">
              Introduction to Data Science with R
            </h3>
            <div className="text-center mt-3">
              <img src={dashboard} alt="" className="w-50" />
            </div>
            <p className="firstImpression--card-text text-center">
              Start with our free Track and learn the fundamentals with R now
              and see if it’s right for you
            </p>
            <div className="text-center">
              <button className="firstImpression--card-btn">Start now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstImpression
