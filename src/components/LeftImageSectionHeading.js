import React from "react"
import Container from "./smallComponents/Container"
import Heading from "./smallComponents/Heading"

const LeftImageSectionHeading = ({ heading, subheading, text, image }) => {
  return (
    <Container>
      <div className="row mt-5">
        <div className="col-md-6 text-center mb-3">
          <img src={image} alt="" className="w-100" />
        </div>
        <div className="col-md-6">
          <Heading heading={heading} subheading={subheading} />
          <p className="basicSection--text">{text}</p>
        </div>
      </div>
    </Container>
  )
}

export default LeftImageSectionHeading
