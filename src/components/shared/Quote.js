import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//components
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const Quote = ({ heading, subheading, text, photo, name, job }) => {
  const photoSource = getImage(photo)
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="row">
        <div className="d-none col-md-2 d-md-flex justify-content-end align-content-center">
          <StaticImage
            src="../../assets/images/quote.png"
            alt={"Quote"}
            layout="fixed"
            width={40}
          />
        </div>
        <div className="col-sm-12 col-md-10">
          <p className="mt-2 text-justify whatWeOffer--text">{text}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <div className="row mt-4">
            <div className="col-3 text-right">
              <div className="mt-4">
                <GatsbyImage
                  image={photoSource}
                  alt={name}
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                />
              </div>
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
