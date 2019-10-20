import React from "react"
import arrowDown from "../../assets/arrowDown.svg"

const ArrowButton = ({ href }) => {
  return (
    <div className="mt-5">
      <a className="locations--hero-btn" href={`#${href}`}>
        <img src={arrowDown} alt="arrow down" />
      </a>
    </div>
  )
}

export default ArrowButton
