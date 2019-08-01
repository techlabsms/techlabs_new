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
        <div className="col-md-7 order-2 order-md-1">
          <p className="basicSection--text">{text}</p>
        </div>
        <div className="col-md-5 text-center  order-1 order-md-1 mb-3">
          <img src={image} alt="" className="w-100 mb-3"/>
        </div>
      </div>
    </>
  )
}

export default RightImageSection
