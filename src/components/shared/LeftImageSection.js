import React from "react"
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const LeftImageSection = ({
  heading,
  subheading,
  text,
  image,
  float,
  leftPartSize,
  html = false,
  rightPartSize,
}) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      {float && (
        <>
          <div className="d-none d-md-block row mt-5">
            <div className="col">
              {image && (
                <img
                  src={image}
                  alt=""
                  className="w-50 img-fluid float-left pr-3 pb-2 pt-2 mr-3"
                />
              )}
              {html ? (
                <div
                  className="basicSection--text"
                  dangerouslySetInnerHTML={{
                    __html: text,
                  }}
                ></div>
              ) : (
                <p className="basicSection--text">{text}</p>
              )}
            </div>
          </div>
          {/* Stops the floating - resolved positioning issues*/}Ì
          <div
            style={{
              clear: "both",
            }}
          />
        </>
      )}
      <div className={float ? "row mt-5 d-md-none" : "row mt-5"}>
        {image && (
          <div className={`col-md-${leftPartSize || 5} text-center mb-3`}>
            <img src={image} alt="" className="w-100" />
          </div>
        )}
        <div className={`col-md-${rightPartSize || 7}`}>
          {html ? (
            <div
              className="basicSection--text"
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            ></div>
          ) : (
            <p className="basicSection--text">{text}</p>
          )}
        </div>
      </div>
    </Container>
  )
}

export default LeftImageSection
