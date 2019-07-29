import React from "react"
import Image from "../assets/threecomponents.png"

const ThreeComponents = () => {
  return (
    <div className="threeComponents">
      <div className="row mt-5 mb-5">
        <div className="col">
          <h2>The three Components</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">
            The Digital Shaper Program consists of three components
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <img src={Image} alt="" className="w-100" />
        </div>
      </div>
    </div>
  )
}

export default ThreeComponents
