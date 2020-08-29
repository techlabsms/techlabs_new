import React from "react"

// plugin & external

import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Container from "../smallComponents/Container"
import Button from "../smallComponents/Button"

// assets
import ArrowsLeft from "../../assets/arrows.png"
import ArrowsRight from "../../assets/arrowsRight.png"


const CallToAction = () => {
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
              <FormattedMessage id={"callToAction.first"}/>{" "}
              <span className="foundYourOwn--cta">
                <FormattedMessage id={"callToAction.second"}/>
              </span>
              <img
                src={ArrowsRight}
                alt="arrow"
                className=" ml-4 d-none d-lg-inline"
              />
            </h1>
          </div>
          <div className="col-3 d-lg-none">
            <img
              src={ArrowsRight}
              alt="arrow"
              className="loat-right  callToAction--arrow"
            />
          </div>
        </div>
        <div className="row mt-5 py-5">
          <div className="col-3 col-md-5">
            <img
              src={ArrowsLeft}
              alt="arrow"
              className="float-right callToAction--arrow"
            />
          </div>
          <div className="col-6 col-md-4">
            <h1 className="foundYourOwn--last text-center callToAction--text">
              <FormattedMessage id={"callToAction.third"}/> 
              <span className="foundYourOwn--cta">
                <FormattedMessage id={"callToAction.fourth"}/>
              </span>
            </h1>
          </div>
          <div className="col-3 col-md-1">
            <img
              src={ArrowsRight}
              alt="arrow"
              className="float-left rightArrow callToAction--arrow"
            />
          </div>
        </div>

        <div className="container my-5 pb-5">
          <div className="row text-center mt-5">
            <div className="col-12">
              <Button 
              text={<FormattedMessage id={"callToAction.button"}/>} 
              primary={true} 
              link="/apply" />
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default CallToAction
