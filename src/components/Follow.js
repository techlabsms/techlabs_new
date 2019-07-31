import React from "react"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import medium from "../assets/medium.png"

const Follow = ({ heading, subheading }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>{heading}</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-2" />
        <div className="col-md-2 d-flex justify-content-center">
          <div className="follow--circle text-center">
            <img src={facebook} alt="" className="follow--facebook" />
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <div className="follow--circle text-center">
            <img src={instagram} alt="" className="follow--img" />
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <div className="follow--circle text-center">
            <img src={linkedin} alt="" className="follow--img" />
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <div className="follow--circle text-center">
            <img src={medium} alt="" className="follow--img" />
          </div>
        </div>

        <div className="col-md-2" />
      </div>
    </>
  )
}

export default Follow
