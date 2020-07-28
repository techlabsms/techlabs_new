import React from "react"
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
import Quote from "../../assets/quote.png"

const Testimonial = ({ heading, subheading, text, testimonialAvatar, testimonialName, testimonialTagline, testimonialLogo }) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="testimonial-quote d-flex mt-3">
        <img src={Quote}
            alt=""/>
            <p className="ml-3 mt-3 text-justify">{text}</p>
      </div>
      <div className="testimonial-info">
          <div>
            <p className="mb-0"><strong>{testimonialName}</strong></p>
            <p className="mb-0">{testimonialTagline} <img src={testimonialLogo}/></p>
          </div>
          <img src={testimonialAvatar} alt={testimonialName}/>
      </div>
    </Container>
  )
}

export default Testimonial
