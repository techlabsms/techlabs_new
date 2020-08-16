import React from "react"
import Heading from "../../smallComponents/Heading"
import Button from "../../smallComponents/Button"
import Img from "gatsby-image"

const Hero = ({
  headingFirst,
  headingSecond,
  headingIntro,
  intro,
  applicationStart,
  nextBootcampStart,
  img,
  link,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h1 className="display-5 mt-5 programmHero--heading">
                <span className="programmHero--highlighted-first">
                  {headingFirst}
                </span>
                <br />
                <span className="programmHero--highlighted-second">
                  {headingSecond}
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Heading heading={headingIntro} />
              <p className="basicSection--text">{intro}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <p className="hero-remote-date">
                Bootcamp application starts:{" "}
                <span className="hero-remote-date-highlighted">
                  {applicationStart}
                </span>
              </p>
              <p className="hero-remote-date">
                Next Bootcamp starts:{" "}
                <span className="hero-remote-date-highlighted">
                  {nextBootcampStart}
                </span>
              </p>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <Button
                text="Apply now"
                isExternal={true}
                link={link}
                primary={true}
              ></Button>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <Img alt="codeathome hero" fluid={img} />
        </div>
      </div>
    </div>
  )
}

export default Hero
