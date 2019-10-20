import React from "react"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"

const RightImageSectionHeading = ({
  heading,
  subheading,
  text,
  image,
  hasButton,
  buttonText,
  buttonLink,
  leftSize,
  rightSize
}) => {
  return (
    <Container>
      <div className="row mt-5">
        <div className={`col-lg-${leftSize || 6} order-2 order-lg-1`}>
          <Heading heading={heading} subheading={subheading} />
          <div className="basicSection--text">{text}</div>
          {hasButton && (
            <div className="row mt-5 ml-2">
              <a className="btn btn-primary d-inline" href={buttonLink}>
                {buttonText}
              </a>
            </div>
          )}
        </div>
        <div className={`col-lg-${rightSize || 6} text-center  order-1 mb-3 d-flex`}>
          <img src={image} alt="" className="w-100 mb-3 align-self-center" />
        </div>
      </div>
    </Container>
  )
}

export default RightImageSectionHeading
