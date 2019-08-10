import React from "react"

const LeftImageSectionHeading = ({ heading, subheading, text, image }) => {
  return (
    <div className="container my-5 py-5 h-100">
      <div className="row mt-5">
        <div className="col-md-6 text-center mb-3">
          <img src={image} alt="" className="w-100" />
        </div>
        <div className="col-md-6">
          <h2>{heading}</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
          <p className="basicSection--text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default LeftImageSectionHeading
