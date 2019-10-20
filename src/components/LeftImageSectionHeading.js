import React from "react"
import Container from "./smallComponents/Container"
import Heading from "./smallComponents/Heading"

const LeftImageSectionHeading = ({
  heading,
  subheading,
  text,
  image,
  leftSize,
  rightSize,
}) => {
  return (
    <Container>
      <div className="row mt-5">
        <div className={`col-lg-${leftSize || 6} text-center mb-3 d-flex`}>
          <img src={image} alt="" className="w-100 align-self-center" />
        </div>
        <div className={`col-lg-${rightSize || 6}`}>
          <Heading heading={heading} subheading={subheading} />
          <p className="basicSection--text">{text}</p>
        </div>
      </div>
    </Container>
  )
}

export default LeftImageSectionHeading
