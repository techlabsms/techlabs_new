import React from "react"
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const Faq = props => {
  return (
    <Container>
      <div className="container">
        <div className="row my-3">
          <Heading heading="FAQ´s" subheading="Do you have more questions?" />
        </div>
        <div className="row">
          <div className="col">{props.children}</div>
        </div>
      </div>
    </Container>
  )
}

export default Faq
