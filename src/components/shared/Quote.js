import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

//components
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"

const Quote = ({ heading, subheading, text, photo, name, job }) => {
  const data = useStaticQuery(graphql`
    query {
      Quoteicon: file(relativePath: { eq: "quote.png" }) {
        childImageSharp {
          fixed(width: 70, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="row">
        <div className="d-none col-md-2 d-md-flex justify-content-end align-content-center">
          <Img 
            fixed={data.Quoteicon.childImageSharp.fixed}
            alt={"Quote"}
          />
        </div>
        <div className="col-sm-12 col-md-10">
          <p className="mt-2 text-justify whatWeOffer--text">{text}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10">
          <div className="row mt-4">
            <div className="col-3 text-left d-flex justify-content-center align-content-center">
              <Img
                fixed={photo}
                alt={name}
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              />
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

