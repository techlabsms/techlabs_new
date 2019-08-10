import React from "react"

const RightImageSectionHeading = ({
  heading,
  subheading,
  text,
  image,
  hasButton,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="container my-5 py-5 h-100">
      <div className="row mt-5">
        <div className="col-md-6 order-2 order-md-1">
          <h2>{heading}</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
          <div className="basicSection--text">{text}</div>
          {hasButton && (
            <div className="row mt-5 ml-2">
              <a className="btn btn-primary d-inline" href={buttonLink}>
                {buttonText}
              </a>
            </div>
          )}
        </div>
        <div className="col-md-6 text-center  order-1 order-md-1 mb-3">
          <img src={image} alt="" className="w-100 mb-3" />
        </div>
      </div>
    </div>
  )
}

export default RightImageSectionHeading
