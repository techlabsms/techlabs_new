import React from "react"
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"
import Button from "../smallComponents/Button"

const RightImageSection = ({
  heading,
  subheading,
  text,
  image,
  hasButton,
  buttonText,
  buttonLink,
  float,
  leftPartSize,
  rightPartSize,
}) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      {float && (
        <div className="d-none d-md-block mt-5 row">
          <div className="col">
            <img
              src={image}
              alt=""
              className="w-50 img-fluid float-right pl-3 pb-2 pt-2 ml-3"
            />
            <p className="basicSection--text">{text}</p>
          </div>
          {/* Stops the floating - resolved positioning issues*/}
          <div
            style={{
              clear: "both",
            }}
          />
        </div>
      )}
      <div className={float ? "row mt-5 d-md-none" : "row mt-5"}>
        <div className={`col-md-${leftPartSize || 7} order-2 order-md-1`}>
          <p className="basicSection--text">{text}</p>
          {hasButton && (
            <div className="row mt-5 ml-2">
              <Button
                text={buttonText}
                isExternal={true}
                link={buttonLink}
                primary={true}
              />
            </div>
          )}
        </div>
        <div
          className={`col-md-${rightPartSize ||
            5} text-center  order-1 order-md-1 mb-3`}
        >
          <img src={image} alt="" className="w-100 mb-3" />
        </div>
      </div>
    </Container>
  )
}

export default RightImageSection
