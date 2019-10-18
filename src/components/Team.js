import React, { Component } from "react"
import linkedIn from "../assets/linkedin-brands.svg"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"

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
      <Container>
        <Heading
          heading="Our Board Members"
          subheading={`The People behind ${city}`}
        />
        <div className="row d-flex d-justify-content-center">
          <div className="col-12 col-md-3 text-center">
            <img src={firstImage} alt="" className="team--img my-4" />
            <h3 className="team--name text-center">
              <span className="highlighted">
                {firstName}
                {firstImage && (
                  <span>
                    <a href={firstLinkedIn}>
                      <img src={linkedIn} alt="" className="team--linkedIn" />
                    </a>
                  </span>
                )}
              </span>
            </h3>
            <p className="text-justify team--text mt-4">{firstDescription}</p>
          </div>
          <div className="col-12 col-md-3 text-center">
            <img src={secondImage} alt="" className="team--img my-4" />
            <h3 className="team--name text-center">
              <span className="highlighted">
                {secondName}
                {secondImage && (
                  <span>
                    <a href={secondLinkedIn}>
                      <img src={linkedIn} alt="" className="team--linkedIn" />
                    </a>
                  </span>
                )}
              </span>
            </h3>
            <p className="text-justify team--text mt-4">{secondDescription}</p>
          </div>
          <div className="col-12 col-md-3 text-center">
            <img src={thirdImage} alt="" className="team--img my-4" />
            <h3 className="team--name text-center">
              <span className="highlighted">
                {thirdName}
                {thirdImage && (
                  <span>
                    <a href={thirdLinkedIn}>
                      <img src={linkedIn} alt="" className="team--linkedIn" />
                    </a>
                  </span>
                )}
              </span>
            </h3>
            <p className="text-justify team--text mt-4">{thirdDescription}</p>
          </div>
          <div className="col-12 col-md-3 text-center">
            <img src={fourthImage} alt="" className="team--img my-4" />
            <h3 className="team--name text-center">
              <span className="highlighted">
                {fourthName}
                {fourthImage && (
                  <span>
                    <a href={fourthLinkedIn}>
                      <img src={linkedIn} alt="" className="team--linkedIn" />
                    </a>
                  </span>
                )}
              </span>
            </h3>
            <p className="text-justify team--text mt-4">{fourthDescription}</p>
          </div>
        </div>
      </Container>
    )
  }
}

export default Team
