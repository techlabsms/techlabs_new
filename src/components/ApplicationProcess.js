import React from "react"
import prerectangle from "../assets/precatngle.png"

const ApplicationProcess = ({ heading, subheading }) => {
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
        <div className="row mt-4">
          <div className="col-md-4">
            <div
              className=" applProcess--rectangle"
              style={{
                backgroundImage: `url(${prerectangle})`,
              }}
            >
              <h3 className="applProcess--heading">Online Application</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className=" applProcess--rectangle"
              style={{
                backgroundImage: `url(${prerectangle})`,
              }}
            >
              <h3 className="applProcess--heading">Feedback Process</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className=" applProcess--rectangle"
              style={{
                backgroundImage: `url(${prerectangle})`,
              }}
            >
              <h3 className="applProcess--heading">Kick-Off</h3>
            </div>
          </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-4">
                <p className="px-3">We look through your application and check whether your motivation fits our requirements!</p>
            </div>
            <div className="col-md-4">
                <p className="px-3">After looking through all applications we quickly get back to you with our final feedback!</p>
            </div>
            <div className="col-md-4">
                <p className="px-3">Congratulations – you are part of our TechLabs Community. Let’s start learning together!</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default ApplicationProcess
