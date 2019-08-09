import React from "react"

const RightImageSection = ({
  heading,
  subheading,
  text,
  image,
  hasButton,
  buttonText,
  buttonLink,
}) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h1 className="section-title">{heading}</h1>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-7 order-2 order-md-1">
          <p className="basicSection--text">{text}</p>
          {hasButton && (
            <div className="row mt-5 ml-2">
              <a
                className="btn btn-primary d-inline"
                href={buttonLink}
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>
        <div className="col-md-5 text-center  order-1 order-md-1 mb-3">
          <img src={image} alt="" className="w-100 mb-3" />
        </div>
      </div>
    </>
  )
}

export default RightImageSection
