import React from "react"

// plugins
import { FormattedMessage } from "gatsby-plugin-react-intl"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const Faq = props => {
  return (
    <Container>
      <div className="container">
        <div className="row my-3">
          <Heading
            heading={<FormattedMessage id={"faq.heading"} />}
            subheading={<FormattedMessage id={"faq.subheading"} />}
          />
        </div>
        <div className="row">
          <div className="col">{props.children}</div>
        </div>
      </div>
    </Container>
  )
}

export default Faq
