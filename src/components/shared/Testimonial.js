import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// components
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"

const Testimonial = props => {
  // FIXME: use gatsby image
  // const data = useStaticQuery(graphql`
  //   query {
  //     quotes: file(relativePath: { eq: "quote.png" }) {
  //       childImageSharp {
  //         fixed {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Container>
      <Heading heading={props.heading} subheading={props.subheading} />
      <div className="testimonial-quote">
        {/* <Img fixed={data.quotes.childImageSharp.fixed} alt="quotes" /> */}
        <p>{props.text}</p>
      </div>
      <div className="testimonial-info">
        <div style={{ width: "100%" }}>
          <p>
            <strong>{props.testimonialName}</strong>
          </p>
          <div className="testimonial-info-work">
            <p>{props.testimonialTagline}</p>
            <Img fluid={props.testimonialLogo} />
          </div>
        </div>
        <div>
          {/* <Img fluid={props.testimonialAvatar} alt={props.testimonialName} /> */}
        </div>
      </div>
    </Container>
  )
}

export default Testimonial
