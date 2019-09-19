import React from "react"
import Image from "../assets/threecomponents.png"

const ThreeComponents = () => {
  return (
    <div className="threeComponents container my-5 py-5">
      <div className="row mt-5 mb-5">
        <div className="col">
          <h2>The Core Concept</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">
            Our blended learning concept consists of three main components!
          </p>
        </div>
      </div>
      <div className="row my-5 py-5">
        <div className="col text-center">
          <img src={Image} alt="" className="w-100" />
        </div>
      </div>
    </div>
  )
}

export default ThreeComponents
