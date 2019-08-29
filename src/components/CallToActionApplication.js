import React from "react"
import { Link } from "gatsby"
import ArrowsLeft from "../assets/arrows.png"
import ArrowsRight from "../assets/arrowsRight.png"

const CallToActionApplication = ({ isOpen, link }) => {
  return (
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
            You can´t wait to acquire the most{" "}
            <span className="foundYourOwn--cta">in demand tech skills?</span>
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
            Are you ready <span className="foundYourOwn--cta">to learn?</span>
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
                  Apply now
                </a>
              </button>
            ) : (
              <button className="btn btn-primary mt-4" disabled>
                Application currently closed
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionApplication
