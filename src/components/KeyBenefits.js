import React from "react"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

const KeyBenefits = ({
  heading,
  subheading,
  firstHeading,
  firstText,
  secondHeading,
  secondText,
  thirdHeading,
  thirdText,
  fourthHeading,
  fourthText,
}) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="row mt-5">
        <div className="card keyBenefits--card mt-4">
          <div className="row">
            <div className="col-2 text-center">
              <img src={icon1} alt="code file" className="mt-2" />
            </div>
            <div className="col-10 pl-5">
              <h3>{firstHeading}</h3>
              <p className="keyBenefits--card-text">{firstText}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2 text-center">
              <img src={icon4} alt="code file" className="mt-2" />
            </div>
            <div className="col-10 pl-5">
              <h3>{secondHeading}</h3>
              <p className="keyBenefits--card-text">{secondText}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2 text-center">
              <img src={icon2} alt="code file" className="mt-2" />
            </div>
            <div className="col-10 pl-5">
              <h3>{thirdHeading}</h3>
              <p className="keyBenefits--card-text">{thirdText}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2 text-center">
              <img src={icon3} alt="code file" className="mt-2" />
            </div>
            <div className="col-10 pl-5">
              <h3>{fourthHeading}</h3>
              <p className="keyBenefits--card-text">{fourthText}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default KeyBenefits
