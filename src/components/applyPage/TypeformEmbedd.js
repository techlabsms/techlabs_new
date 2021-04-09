import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"
import Heading from "../smallComponents/Heading"

const TypeformEmbedd = ({ url, heading, subheading, style }) => {
  return (
    <div className="container relative">
      <Heading heading={heading} subheading={subheading} />
      <ReactTypeformEmbed url={url} style={style}></ReactTypeformEmbed>
    </div>
  )
}

export default TypeformEmbedd
