import React, { useState } from "react"
import WebDev from "../../assets/webdevpro.png"
import AI from "../../assets/ai-robot.png"
import UX from "../../assets/UX.png"
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Academy = ({
  firstTrack,
  firstTrackText,
  secondTrack,
  secondTrackText,
  thirdTrack,
  thirdTrackText,
  fourthTrack,
  fourthTrackText,
}) => {
  const [index, setIndex] = useState(0)

  const data = useStaticQuery(graphql`
    query {
      dataScience: file(relativePath: { eq: "dashboard.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      web: file(relativePath: { eq: "webdevpro.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ai: file(relativePath: { eq: "ai-robot.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ux: file(relativePath: { eq: "UX.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const indexHandler = number => {
    setIndex(number)
  }

  const images = [
    data.dataScience.childImageSharp.fluid,
    data.web.childImageSharp.fluid,
    data.ai.childImageSharp.fluid,
    data.ux.childImageSharp.fluid,
  ]

  return (
    <Container>
      <Heading
        heading="TechLabs Academy"
        subheading="Explore our courses and choose the one that suits you the most!"
      />
      <div className="row mt-5 d-flex mb-5">
        <div className="col align-self-center text-center d-none d-lg-block">
          <Img fluid={images[index]} className="w-75" />
        </div>
        <div className="col-sm-12 col-lg-6">
          <div className="row mt-4">
            <div
              className={
                index === 0
                  ? "col align-self-center text-center d-lg-none"
                  : "col align-self-center text-center d-none"
              }
            >
              <Img
                fluid={data.dataScience.childImageSharp.fluid}
                className="m-5"
              />
            </div>
            <div
              className="academy--card w-100"
              onMouseEnter={() => indexHandler(0)}
              onTouchStart={() => indexHandler(0)}
              style={{
                backgroundColor: `${index === 0 ? "#fb1d5c" : "white"}`,
                color: `${index === 0 ? "white" : "black"}`,
                transform: `${index === 0 ? "scale(1.05)" : "scale(1.0)"}`,
              }}
              role="button"
              tabIndex={0}
            >
              <h4 className="academy--card-title">{firstTrack}</h4>
              <p class={index === 0 ? "d-block" : "d-none"}>{firstTrackText}</p>
            </div>
          </div>
          <div className="row">
            <div
              className={
                index === 1
                  ? "col align-self-center text-center d-lg-none"
                  : "col align-self-center text-center d-none"
              }
            >
              <Img fluid={data.web.childImageSharp.fluid} className="m-5" />
            </div>
            <div
              className="academy--card w-100"
              onMouseEnter={() => indexHandler(1)}
              onTouchStart={() => indexHandler(1)}
              style={{
                backgroundColor: `${index === 1 ? "#fb1d5c" : "white"}`,
                color: `${index === 1 ? "white" : "black"}`,
                transform: `${index === 1 ? "scale(1.05)" : "scale(1.0)"}`,
              }}
              role="button"
              tabIndex={0}
            >
              <h4 className="academy--card-title">{secondTrack}</h4>
              <p class={index === 1 ? "d-block" : "d-none"}>
                {secondTrackText}
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className={
                index === 2
                  ? "col align-self-center text-center d-lg-none"
                  : "col align-self-center text-center d-none"
              }
            >
              <Img fluid={data.ai.childImageSharp.fluid} className="m-5" />
            </div>
            <div
              className="academy--card w-100"
              onMouseEnter={() => indexHandler(2)}
              onTouchStart={() => indexHandler(2)}
              style={{
                backgroundColor: `${index === 2 ? "#fb1d5c" : "white"}`,
                color: `${index === 2 ? "white" : "black"}`,
                transform: `${index === 2 ? "scale(1.05)" : "scale(1.0)"}`,
              }}
              role="button"
              tabIndex={0}
            >
              <h4 className="academy--card-title">{thirdTrack}</h4>
              <p class={index === 2 ? "d-block" : "d-none"}>{thirdTrackText}</p>
            </div>
          </div>
          <div className="row">
            <div
              className={
                index === 3
                  ? "col align-self-center text-center d-lg-none"
                  : "col align-self-center text-center d-none"
              }
            >
              <Img fluid={data.ux.childImageSharp.fluid} className="m-5" />
            </div>
            <div
              className="academy--card w-100"
              onMouseEnter={() => indexHandler(3)}
              onTouchStart={() => indexHandler(3)}
              style={{
                backgroundColor: `${index === 3 ? "#fb1d5c" : "white"}`,
                color: `${index === 3 ? "white" : "black"}`,
                transform: `${index === 3 ? "scale(1.05)" : "scale(1.0)"}`,
              }}
              role="button"
              tabIndex={0}
            >
              <h4 className="academy--card-title">{fourthTrack}</h4>

              <p class={index === 3 ? "d-block" : "d-none"}>
                {fourthTrackText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Academy
