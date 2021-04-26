import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"
import Heading from "../smallComponents/Heading"

const TypeformEmbedd = ({ url, isMobile, heading, subheading }) => {
  return (
    <div className="pt-5 mt-3">
      <div className="container relative c-typformEmbedd">
        <Heading heading={heading} subheading={subheading} />

        <div
          style={{
            width: isMobile ? "95%" : "90%",
            height: isMobile ? "75%" : "80%",
            top: isMobile ? "300px" : "220px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "1140px",
            border: "1px solid #fa1e5a",
            borderRadius: "5px",
          }}
        >
          <ReactTypeformEmbed url={url}></ReactTypeformEmbed>
          <p
            style={{
              position: "relative",
              top: "105%",
            }}
          >
            Open the form in a new Tab{" "}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="noDec navLink--active"
            >
              Open Typeform
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TypeformEmbedd
