import React from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-react-intl"

// components
import Button from "../smallComponents/Button"

const SectionDescription = props => {
  return (
    <div className="newsroom-section-description" id={props.sectionId}>
      <h2>
        <FormattedMessage id={props.title} />
      </h2>
      <p>
        <FormattedMessage id={props.description} />
      </p>

      <Button
        text={<FormattedMessage id={props.button} />}
        primary="true"
        link={props.buttonLink}
      />
    </div>
  )
}

export default injectIntl(SectionDescription)
