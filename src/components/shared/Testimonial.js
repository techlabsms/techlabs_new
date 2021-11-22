import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

// components
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"

const Testimonial = (props) => {
  const logo = getImage(props.testimonialLogo)
  const avatar = getImage(props.testimonialAvatar)
  return (
    <Container>
      <Heading heading={props.heading} subheading={props.subheading} />
      <div className="testimonial-quote">
        <StaticImage
          src="../../assets/images/quote.png"
          alt={"Quote"}
          layout="fixed"
          width={40}
        />
        <p>{props.text}</p>
      </div>
      <div className="testimonial-info">
        <div style={{ width: "100%" }}>
          <p>
            <strong>{props.testimonialName}</strong>
          </p>
          <div className="testimonial-info-work">
            <p>{props.testimonialTagline}</p>
            <GatsbyImage image={logo} />
          </div>
        </div>
        <div>
          <GatsbyImage image={avatar} alt={props.testimonialName} />
        </div>
      </div>
    </Container>
  )
}

export default Testimonial
