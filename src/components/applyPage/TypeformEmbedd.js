import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"
import Heading from "../smallComponents/Heading"

const TypeformEmbedd = ({ url }) => {
  return (
    <div className="container relative">
      <Heading
        heading="Requirements"
        subheading="What we are looking for in an applicant"
      />
      <ReactTypeformEmbed
        url={url}
        style={{
          width: "90%",
          height: "80%",
          top: "20%",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "1140px",
        }}
      ></ReactTypeformEmbed>
    </div>
  )
}

export default TypeformEmbedd
