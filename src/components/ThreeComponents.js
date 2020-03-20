import React, { useState } from "react"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"
import VisibilitySensor from "react-visibility-sensor"
import { FormattedMessage } from "gatsby-plugin-intl"

const ThreeComponents = ({
  heading,
  subheading,
  firstHeading,
  firstText,
  secondHeading,
  secondText,
  thirdHeading,
  thirdText,
}) => {
  const [componentVisible, setComponentVisible] = useState(false)

  return (
    <VisibilitySensor
      onChange={isVisible => {
        setComponentVisible(isVisible)
      }}
      once
    >
      <Container>
        <Heading heading={heading} subheading={subheading} />
        <div className="row my-5 py-5 d-none d-lg-flex">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <div className="threeComponents--circle threeComponents--circle_1  d-flex justify-content-center">
                  <h3 className="align-self-center">{firstHeading}</h3>
                  <div>
                    <h5 className="align-self-center text-center">
                      {firstHeading}
                    </h5>
                    <p className="align-self-center">{firstText}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={
                    componentVisible
                      ? "threeComponents--circle threeComponents--circle_2  d-flex justify-content-center threeComponents--circle_animation"
                      : "threeComponents--circle threeComponents--circle_2  d-flex justify-content-center"
                  }
                >
                  <h3 className="align-self-center">{secondHeading}</h3>
                  <div>
                    <h5 className="align-self-center text-center">
                      {secondHeading}
                    </h5>
                    <p className="align-self-center">{secondText}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="threeComponents--circle threeComponents--circle_3  d-flex justify-content-center">
                  <h3 className="align-self-center">{thirdHeading}</h3>
                  <div>
                    <h5 className="align-self-center text-center">
                      {thirdHeading}
                    </h5>
                    <p className="align-self-center">{thirdText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
        <div className="row d-block d-lg-none">
          <div className="col-md-4">
            <h3 className="highlighted mb-3 pl-3 text-left">{firstHeading}</h3>
            <p>{firstText}</p>
          </div>
          <div className="col-md-4">
            <h3 className="highlighted mb-3 pl-3 text-left">{secondHeading}</h3>
            <p>{secondText}</p>
          </div>
          <div className="col-md-4">
            <h3 className="highlighted mb-3 pl-3 text-left">{thirdHeading}</h3>
            <p>{thirdText}</p>
          </div>
        </div>
      </Container>
    </VisibilitySensor>
  )
}

export default ThreeComponents
