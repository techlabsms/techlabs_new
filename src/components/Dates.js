import React from "react"

const Dates = ({ heading, subheading }) => {
  return (
    <div>
      <div className="container my-5 py-5 h-100">
        <div className="row mt-5">
          <div className="col">
            <h2>{heading}</h2>
            <div className="section-divider" />
            <p className="basicSection--sub">{subheading}</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-6 col-md-2">
            <ul className="dates--dateList">
              <li>16.04.2019</li>
              <li>17.04.2019</li>
              <li>24.04.2019</li>
              <li>29.05.2019</li>
              <li>31.05.2019</li>
              <li>15.06.2019</li>
              <li>07.09.2019</li>
              <li>26.09.2019</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-10">
            <ul className="dates--list">
              <li>
                <span>Kick-Off for the new batch</span>
              </li>
              <li>
                <span>Social with the TechLabs Community</span>
              </li>
              <li>
                <span>Beginner-Workshop</span>
              </li>
              <li>
                <span>Kick-Off for the Project Work </span>
              </li>
              <li>
                <span>Social with the TechLabs Community</span>
              </li>
              <li>
                <span>Hackathon I / Project Day</span>
              </li>
              <li>
                <span>Hackathon II / Project Day</span>
              </li>
              <li>
                <span>Project Pitch</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dates
