import React from "react"

// plugins & external
import { Link } from "gatsby-plugin-intl"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'


const Button = ({ text, primary, link, isExternal, style, gaLocation, gaSection }) => {
  return (
    <>
      {!isExternal ? (
        <Link
          onClick={e => {
            if (gaLocation && gaSection) {
              trackCustomEvent({
                category: "Button",
                action: "Click",
                label: gaLocation + '_' + gaSection,
              })
            }
          }}
          className={`btn btn-${primary ? "primary" : "secondary"} d-inline ${style}`}
          to={link}
        >
          {text}
        </Link>
      ) : (
        <a
          onClick={e => {
            if (gaLocation && gaSection) {
              trackCustomEvent({
                category: "Button",
                action: "Click",
                label: gaLocation + '_' + gaSection,
              })
            }
          }}
          className={`btn btn-${primary ? "primary" : "secondary"} d-inline ${style}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      )}
    </>
  )
}

export default Button
