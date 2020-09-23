import React from "react"

// plugins & external
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

// assets
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import medium from "../../assets/medium.png"


const Follow = ({
  heading,
  subheading,
  facebookLink,
  instagramLink,
  linkedInLink,
  mediumLink,
  city
}) => {
  return (
    <Container>
      <div className="row mt-3">
        <Heading heading={heading} subheading={subheading} />
      </div>
      <div className="row my-5 d-flex justify-content-center">
        {facebookLink && (
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mt-4">
            <a 
            onClick={e => {
              trackCustomEvent({
                category: "Button",
                action: "Click",
                label: city + "_facebook",
              })
            }}
            href={facebookLink}>
              <div className="follow--circle text-center">
                <img src={facebook} alt="" className="follow--facebook" />
              </div>
            </a>
          </div>
        )}
        {instagramLink && (
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mt-4">
            <a 
            onClick={e => {
              trackCustomEvent({
                category: "Button",
                action: "Click",
                label: city + "_instagram",
              })
            }}
            href={instagramLink}>
              <div className="follow--circle text-center">
                <img src={instagram} alt="" className="follow--img" />
              </div>
            </a>
          </div>
        )}
        {linkedInLink && (
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mt-4">
            <a
            onClick={e => {
              trackCustomEvent({
                category: "Button",
                action: "Click",
                label: city + "_linkedin",
              })
            }} 
            href={linkedInLink}>
              <div className="follow--circle text-center">
                <img src={linkedin} alt="" className="follow--img" />
              </div>
            </a>
          </div>
        )}
        {mediumLink && (
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mt-4">
            <a 
            onClick={e => {
              trackCustomEvent({
                category: "Button",
                action: "Click",
                label: city + "_medium",
              })
            }}
            href={mediumLink}>
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
