import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
import Img from "gatsby-image"

// import Quote from "../../assets/quote.png"
// ({ heading, subheading, text, testimonialAvatar, testimonialName, testimonialTagline, testimonialLogo })

const Testimonial = props  => {
  const data = useStaticQuery(graphql`
    query {
      quotes: file(relativePath: { eq: "quote.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Heading heading={props.heading} subheading={props.subheading} />
      <div className="testimonial-quote">
        <Img
          fixed={data.quotes.childImageSharp.fixed}
          alt="quotes"
        />
        <p>{props.text}</p>
      </div>
      <div className="testimonial-info">
          <div>
            <p><strong>{props.testimonialName}</strong></p>
            <p>{props.testimonialTagline} <img src={props.testimonialLogo}/></p>
          </div>
          <Img
          fixed={props.testimonialAvatar}
          alt={props.testimonialName}
          />
      </div>
    </Container>
  )
}

export default Testimonial
