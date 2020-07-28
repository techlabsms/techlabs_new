import React from "react"
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
import Quote from "../../assets/quote.png"

const Testimonial = ({ heading, subheading, text, testimonialAvatar, testimonialName, testimonialTagline, testimonialLogo }) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="testimonial-quote">
        <img src={Quote}
            alt="quotes"/>
            <p>{text}</p>
      </div>
      <div className="testimonial-info">
          <div>
            <p><strong>{testimonialName}</strong></p>
            <p>{testimonialTagline} <img src={testimonialLogo}/></p>
          </div>
          <img src={testimonialAvatar} alt={testimonialName}/>
      </div>
    </Container>
  )
}

export default Testimonial
