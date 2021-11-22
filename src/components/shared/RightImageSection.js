import React from "react"

// components
import Heading from "../smallComponents/Heading"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
  html = false,
  leftPartSize,
  rightPartSize,
}) => {
  const imageSource = getImage(image)

  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      {float && (
        <div className="d-none d-md-block mt-5 row">
          <div className="col">
            {image && (
              <div className="w-50 img-fluid float-right pl-3 pb-2 pt-2 ml-3">
                <GatsbyImage image={imageSource} alt="" />
              </div>
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
        {image && (
          <div
            className={`col-md-${
              rightPartSize || 5
            } text-center  order-1 order-md-1 mb-3`}
          >
            <GatsbyImage image={imageSource} alt="" />
          </div>
        )}
      </div>
    </Container>
  )
}

export default RightImageSection
