import React from "react"
import locationsImg from "../assets/locations.png"

const Requirements = ({ heading, subheading }) => {
  return (
    <div className="requirements my-5 py-5">
      <div className="container ">
        <div className="row">
          <div className="col">
            <h2>{heading}</h2>
            <div className="section-divider" />
            <p className="basicSection--sub">{subheading}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 pt-5 order-2 order-md-1">
            <ol className="requirements--list">
              <li className="requirements--list_item py-2">
                <span className="highlighted requirements--text_first">
                  Motivation
                </span>{" "}
                - Are you motivated to learn tech skills online?
              </li>
              <li className="requirements--list_item py-2">
                <span className="highlighted requirements--text_first">
                  Drive
                </span>{" "}
                - Do you have the drive to push and finish a group project
                during your semester?
              </li>
              <li className="requirements--list_item py-2">
                <span className="highlighted requirements--text_first">
                  Community
                </span>{" "}
                - Do you enjoy connecting with our community during events or
                within our slack?
              </li>
              <li className="requirements--list_item py-2">
                <span className="highlighted requirements--text_first">
                  English
                </span>{" "}
                - Are your english skills sufficient?
              </li>
            </ol>
          </div>
          <div className="col-md-7 text-center order-1 order-md-2">
            <img src={locationsImg} alt="" className="w-75"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Requirements
