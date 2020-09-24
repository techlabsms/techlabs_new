import React from "react"

// plugins & external
import { Link } from "gatsby-plugin-intl"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'


const Button = ({ text, primary, link, isExternal, style }) => {
  return (
    <>
      {!isExternal ? (
        <Link
          className={`btn btn-${primary ? "primary" : "secondary"} d-inline ${style}`}
          to={link}
        >
          {text}
        </Link>
      ) : (
        <a
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
