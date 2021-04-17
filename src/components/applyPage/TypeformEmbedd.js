import React from "react"
import { ReactTypeformEmbed } from "react-typeform-embed"
import Heading from "../smallComponents/Heading"

const TypeformEmbedd = ({ url, isMobile }) => {
  return (
    <div className="container relative c-typformEmbedd">
      <Heading
        heading="Application Form"
        subheading="Ready to apply? Please fill in the form below."
      />

      <div
        style={{
          width: isMobile ? "95%" : "90%",
          height: isMobile ? "90%" : "80%",
          top: isMobile ? "30%" : "150px",
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
  )
}

export default TypeformEmbedd
