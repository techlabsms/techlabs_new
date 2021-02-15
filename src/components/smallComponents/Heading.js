import React from "react"

const Heading = ({ heading, subheading }) => {
  return (
    <div className="row mt-5">
      <div className="col">
        <h2>{heading}</h2>
        <div className="section-divider" />
        <div className="subheadline">{subheading}</div>
      </div>
    </div>
  )
}

export default Heading
