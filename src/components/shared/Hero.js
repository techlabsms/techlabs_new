import React from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-react-intl"

const Hero = props => {
  return (
    <div className="new-hero">
      <div className="new-hero-text">
        <h1>
          <FormattedMessage id={props.heroTitle} />
          <span>
            <FormattedMessage id={props.heroSpan} />
          </span>
        </h1>
        <p>
          <FormattedMessage id={props.heroText} />
        </p>
      </div>
      <div className="new-hero-img">
        <img src={props.heroImage} alt="new-graphic" />
      </div>
    </div>
  )
}

export default injectIntl(Hero)
