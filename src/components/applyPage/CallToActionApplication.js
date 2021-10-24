import React from "react"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-react-intl"

// components
import Container from "../smallComponents/Container"

// assets
import ArrowsLeft from "../../assets/arrows.png"
import ArrowsRight from "../../assets/arrowsRight.png"

const CallToActionApplication = ({ isOpen, link }) => {
  return (
    <Container>
      <section className="callToAction">
        <div className="row">
          <div className="col-3 col-md-1">
            <img
              src={ArrowsLeft}
              alt="arrow"
              className="float-right  callToAction--arrow"
            />
          </div>
          <div className="col-6 col-md-6">
            <h1 className="foundYourOwn--last text-center text-md-left  callToAction--text">
              <FormattedMessage id={"callToAction.first"} />{" "}
              <span className="foundYourOwn--cta">
                <FormattedMessage id={"callToAction.second"} />
              </span>
            </h1>
          </div>
          <div className="col-3 col-md-5">
            <img
              src={ArrowsRight}
              alt="arrow"
              className="float-left rightArrow callToAction--arrow"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <img
              src={ArrowsLeft}
              alt="arrow"
              className="float-right callToAction--arrow"
            />
          </div>
          <div className="col-6">
            <h1 className="foundYourOwn--last text-center callToAction--text">
              <FormattedMessage id={"callToAction.third"} />
              <span className="foundYourOwn--cta">
                <FormattedMessage id={"callToAction.fourth"} />
              </span>
            </h1>
          </div>
          <div className="col-3">
            <img
              src={ArrowsRight}
              alt="arrow"
              className="float-left rightArrow callToAction--arrow"
            />
          </div>
        </div>

        <div className="container mt-5 py-5">
          <div className="row text-center mt-5">
            <div className="col">
              {isOpen ? (
                <button className="btn btn-primary mt-4">
                  <a href={link} className="a-white">
                    <FormattedMessage id={"callToAction.button"} />
                  </a>
                </button>
              ) : (
                <button className="btn btn-primary mt-4" disabled>
                  <FormattedMessage id={"callToAction.button.closed"} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default CallToActionApplication
