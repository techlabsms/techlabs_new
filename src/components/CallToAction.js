import React from "react"
import { Link } from "gatsby"
import ArrowsLeft from "../assets/arrows.png"
import ArrowsRight from "../assets/arrowsRight.png"

const CallToAction = () => {
  return (
    <section className="callToAction">
      <div className="row">
        <div className="col-1">
          <img src={ArrowsLeft} alt="arrow" className="float-right" />
        </div>
        <div className="col-6">
          <h1 className="foundYourOwn--last text-left">
            You can´t wait to acquire the most {" "}<span className="foundYourOwn--cta">in demand tech skills?</span>
          </h1>
        </div>
        <div className="col">
          <img
            src={ArrowsRight}
            alt="arrow"
            className="float-left rightArrow"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-3">
          <img src={ArrowsLeft} alt="arrow" className="float-right" />
        </div>
        <div className="col-6">
          <h1 className="foundYourOwn--last text-center">
            Are you ready <span className="foundYourOwn--cta">to learn?</span>
          </h1>
        </div>
        <div className="col-3">
          <img
            src={ArrowsRight}
            alt="arrow"
            className="float-left rightArrow"
          />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row text-center mt-5">
          <div className="col">
            <Link className="btn btn-primary d-inline" to="/">
              Back
            </Link>
            <a className="btn btn-secondary d-inline" to="/program">
              Apply now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
