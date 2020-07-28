import React from "react"
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
import Quote from "../../assets/quote.png"

const Testimonial = ({ heading, subheading, text, testimonialAvatar, testimonialName, testimonialTagline, testimonialLogo }) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="d-flex mt-3 testimonial-quote">
        <img src={Quote}
            alt=""
            style={{
                width: "8em",
                height: "3em"
            }}/>
            <p 
            className="ml-3 mt-3 text-justify"
            style={{
                fontSize: "1.8em"
            }}
            >{text}</p>
      </div>
      <div className="d-flex justify-content-end align-items-center text-right">
          <div className="">
            <p className="mb-0"><strong>{testimonialName}</strong></p>
            <p className="mb-0">{testimonialTagline} <img src={testimonialLogo}/></p>
          </div>
          <img 
            src={testimonialAvatar}
            style={{
                maxHeight: "4.5rem",
                marginLeft: "1em"
            }}/>
      </div>
    </Container>
  )
}

export default Testimonial
