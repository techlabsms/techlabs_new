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
}) => {
  return (
    <Container>
      <div className="row mt-5">
        <div className="col-md-6 order-2 order-md-1">
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
        <div className="col-md-6 text-center  order-1 order-md-1 mb-3">
          <img src={image} alt="" className="w-100 mb-3" />
        </div>
      </div>
    </Container>
  )
}

export default RightImageSectionHeading
