import React, { Component } from "react"
import linkedIn from "../assets/linkedin-brands.svg"

class Team extends Component {
  render() {
    const {
      city,
      firstName,
      firstDescription,
      firstImage,
      firstLinkedIn,
      secondName,
      secondDescription,
      secondImage,
      secondLinkedIn,
      thirdName,
      thirdDescription,
      thirdImage,
      thirdLinkedIn,
      fourthName,
      fourthDescription,
      fourthImage,
      fourthLinkedIn,
    } = this.props
    return (
      <div className="container my-5 py-5 h-100">
        <div className="row mt-5">
          <div className="col">
            <h2>Core Team</h2>
            <div className="section-divider" />
            <p className="basicSection--sub">people behind {city}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 text-center">
            <img src={firstImage} alt="" className="team--img my-4" />
            <h3 className="team--name text-center">
              <span className="highlighted">{firstName} </span>
              <span>
                <a href={firstLinkedIn}>
                  <img src={linkedIn} alt="" className="team--linkedIn" />
                </a>
              </span>
            </h3>
            <p className="text-justify team--text mt-4">{firstDescription}</p>
          </div>
          <div className="col-md-3 text-center">
            <img src={secondImage} alt="" className="team--img my-4" />
            <h3 className="team--name text-center">
              <span className="highlighted">{secondName} </span>
              <span>
                <a href={secondLinkedIn}>
                  <img src={linkedIn} alt="" className="team--linkedIn" />
                </a>
              </span>
            </h3>
            <p className="text-justify team--text mt-4">{secondDescription}</p>
          </div>
          <div className="col-md-3 text-center">
            <img src={thirdImage} alt="" className="team--img my-4" />
            <h3 className="team--name text-center">
              <span className="highlighted">{thirdName} </span>
              <span>
                <a href={thirdLinkedIn}>
                  <img src={linkedIn} alt="" className="team--linkedIn" />
                </a>
              </span>
            </h3>
            <p className="text-justify team--text mt-4">{thirdDescription}</p>
          </div>
          <div className="col-md-3 text-center">
            <img src={fourthImage} alt="" className="team--img my-4" />
            <h3 className="team--name text-center">
              <span className="highlighted">{fourthName} </span>
              <span>
                <a href={fourthLinkedIn}>
                  <img src={linkedIn} alt="" className="team--linkedIn" />
                </a>
              </span>
            </h3>
            <p className="text-justify team--text mt-4">{fourthDescription}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Team
