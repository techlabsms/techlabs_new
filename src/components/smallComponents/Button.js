import React from "react"

// plugins & external
import { Link } from "gatsby-plugin-intl"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'


const Button = ({ text, primary, link, isExternal, style, category, action, label }) => {
  return (
    <>
      {!isExternal ? (
        <Link
          className={`btn btn-${primary ? "primary" : "secondary"} d-inline ${style}`}
          to={link}
          onClick={e => {
            trackCustomEvent({
              category: category,
              action: action,
              label: label,
            })
          }}
        >
          {text}
        </Link>
      ) : (
        <a
          onClick={e => {
            trackCustomEvent({
              category: category,
              action: action,
              label: label,
            })
          }}
          className={`btn btn-${primary ? "primary" : "secondary"} d-inline ${style}`}
          href={link}
        >
          {text}
        </a>
      )}
    </>
  )
}

export default Button
