import React from "react"

const LeftImageSection = ({ heading, subheading, text, image }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>{heading}</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5 text-center mb-3">
          <img src={image} alt="" className="w-100"/>
        </div>
        <div className="col-md-7">
          <p className="basicSection--text">{text}</p>
        </div>
      </div>
    </>
  )
}

export default LeftImageSection
