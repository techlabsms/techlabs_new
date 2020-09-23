import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import Heading from "../../smallComponents/Heading"
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
                <FormattedMessage id="program.remote.hero.applicationStart" />{" "}
                <span className="hero-remote-date-highlighted">
                  {applicationStart}
                </span>
              </p>
              <p className="hero-remote-date">
                <FormattedMessage id="program.remote.hero.bootcampStart" />{" "}
                <span className="hero-remote-date-highlighted">
                  {nextBootcampStart}
                </span>
              </p>
            </div>
            {/* <div className="col-md-3 d-flex justify-content-center align-items-center">
              <Button
                onClick={e => {
                  trackCustomEvent({
                    category: "Button",
                    action: "Click",
                    label: "cahb_apply",
                  })
                }}
                text={<FormattedMessage id="program.remote.hero.button"/>}
                isExternal={true}
                link={link}
                primary={true}
              ></Button>
            </div> */}
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
