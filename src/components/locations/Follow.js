import React from "react"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import medium from "../../assets/medium.png"
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const Follow = ({
  heading,
  subheading,
  facebookLink,
  instagramLink,
  linkedInLink,
  mediumLink,
}) => {
  return (
    <Container>
      <div className="row mt-5">
        <Heading heading={heading} subheading={subheading} />
      </div>
      <div className="row my-5 d-flex justify-content-center">
        {facebookLink && (
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mt-4">
            <a href={facebookLink}>
              <div className="follow--circle text-center">
                <img src={facebook} alt="" className="follow--facebook" />
              </div>
            </a>
          </div>
        )}
        {instagramLink && (
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mt-4">
            <a href={instagramLink}>
              <div className="follow--circle text-center">
                <img src={instagram} alt="" className="follow--img" />
              </div>
            </a>
          </div>
        )}
        {linkedInLink && (
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mt-4">
            <a href={linkedInLink}>
              <div className="follow--circle text-center">
                <img src={linkedin} alt="" className="follow--img" />
              </div>
            </a>
          </div>
        )}
        {mediumLink && (
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mt-4">
            <a href={mediumLink}>
              <div className="follow--circle text-center">
                <img src={medium} alt="" className="follow--img" />
              </div>
            </a>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Follow
