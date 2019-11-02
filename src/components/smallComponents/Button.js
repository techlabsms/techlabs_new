import React from "react"
import { Link } from "gatsby"

const Button = ({ text, primary, link, isExternal }) => {
  return (
    <>
      {isExternal ? (
        <Link
          className={`btn btn-${primary ? "primary" : "secondary"} d-inline`}
          to={link}
        >
          {text}
        </Link>
      ) : (
        <a
          className={`btn btn-${primary ? "primary" : "secondary"} d-inline`}
          href={link}
        >
          {text}
        </a>
      )}
    </>
  )
}

export default Button
