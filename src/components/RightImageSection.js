import React from "react"

const RightImageSection = ({ heading, subheading, text, image }) => {
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
        <div className="col-6">
          <p className="basicSection--text">{text}</p>
        </div>
        <div className="col-6 text-center">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  )
}

export default RightImageSection
