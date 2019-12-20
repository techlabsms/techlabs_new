import React from "react"
import Container from "./smallComponents/Container"
import Heading from "./smallComponents/Heading"

const Quote = ({
  heading,
  subheading,
  text,
  photo,
  name,
  job,
  showHeading,
}) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />

      <div className="row">
        <div className="col">
          <p className="mt-2 text-justify whatWeOffer--text">{text}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <div className="row mt-4">
            <div className="col-3 text-left d-flex justify-content-center align-content-center">
              <img src={photo} alt="nils" />
            </div>
            <div className="col-9">
              <p className="mt-4 whatWeOffer--nils">
                {name} <br />{" "}
                <span className="whatWeOffer--nils-color">{job}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Quote
