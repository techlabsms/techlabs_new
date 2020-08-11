import React from "react"

// plugins
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"

// assets
import process from "../../assets/process.png"
import learn from "../../assets/learnBlack.svg"
import orientation from "../../assets/orientationBlack.svg"
import kickoff from "../../assets/kickoffBlack.svg"
import hackathon from "../../assets/hackathonBlack.svg"
import certificate from "../../assets/certificateBlack.svg"
import dotLine from "../../assets/dotLine.svg"
import dot from "../../assets/dot.svg"


const Process = () => {
  return (
    <Container>
      <Heading
        heading={<FormattedMessage id={"program.journey.heading"}/>}
        subheading={<FormattedMessage id={"program.journey.subheading"}/>}
      />
      <div className="d-none d-lg-block">
        <div className="div">
          <div className="row">
            <div className="col-12 col-md-4 d-none d-lg-block">
              <h2 className="process--title">
                <span className="process--title-number">1. </span>
                {<FormattedMessage id={"program.local.journey.1.heading"}/>}
              </h2>
              <p className="process--text">
                {<FormattedMessage id={"program.local.journey.1.text"}/>}
              </p>
            </div>

            <div className="col-12 col-md-4 d-none d-lg-block">
              <h2 className="process--title">
                <span className="process--title-number">3. </span>
                {<FormattedMessage id={"program.local.journey.3.heading"}/>}
              </h2>
              <p className="process--text">
                {<FormattedMessage id={"program.local.journey.3.text"}/>}
              </p>
            </div>

            <div className="col-12 col-md-4 d-none d-lg-block">
              <h2 className="process--title">
                <span className="process--title-number">5. </span>
                {<FormattedMessage id={"program.local.journey.5.heading"}/>}
              </h2>
              <p className="process--text">
                {<FormattedMessage id={"program.local.journey.5.text"}/>}
              </p>
            </div>
          </div>
          <div className="row my-5  d-lg-block d-none">
            <div className="col-12">
              <img src={process} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-2" />
            <div className="col-12 col-md-4  d-none d-lg-block">
              <h2 className="process--title">
                <span className="process--title-number">2. </span>
                {<FormattedMessage id={"program.local.journey.2.heading"}/>}
              </h2>
              <p className="process--text">
                {<FormattedMessage id={"program.local.journey.2.text"}/>}
              </p>
            </div>
            <div className="col-12 col-md-4  d-none d-lg-block">
              <h2 className="process--title">
                <span className="process--title-number">4. </span>
                {<FormattedMessage id={"program.local.journey.4.heading"}/>}
              </h2>
              <p className="process--text">
                {<FormattedMessage id={"program.local.journey.4.text"}/>}
              </p>
            </div>
            <div className="col-2" />
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <div className="row mt-3">
          <div className="col-3 text-center">
            <img src={orientation} alt="orientation" />
          </div>
          <div className="col-1 d-flex justify-contentstartr  align-self-stretch">
            <img src={dotLine} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">
              {<FormattedMessage id={"program.local.journey.1.heading"}/>}
            </h4>
            <p className="process--text-mobil">
              {<FormattedMessage id={"program.local.journey.1.text"}/>}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-center">
            <img src={learn} alt="learn" />
          </div>
          <div className="col-1  d-flex justify-content-start  align-self-stretch">
            <img src={dotLine} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">
              {<FormattedMessage id={"program.local.journey.2.heading"}/>}
            </h4>
            <p className="process--text-mobil">
              {<FormattedMessage id={"program.local.journey.2.text"}/>}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-center">
            <img src={kickoff} alt="kickoff" />
          </div>
          <div className="col-1 d-flex justify-content-start  align-self-stretch">
            <img src={dotLine} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">
              {<FormattedMessage id={"program.local.journey.3.heading"}/>}
            </h4>
            <p className="process--text-mobil">
              {<FormattedMessage id={"program.local.journey.3.text"}/>}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-center">
            <img src={hackathon} alt="hackathon" />
          </div>
          <div className="col-1 d-flex justify-content-start  align-self-stretch">
            <img src={dotLine} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">
              {<FormattedMessage id={"program.local.journey.4.heading"}/>}
            </h4>
            <p className="process--text-mobil">
              {<FormattedMessage id={"program.local.journey.4.text"}/>}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-center">
            <img src={certificate} alt="certificate" />
          </div>
          <div className="col-1 d-flex justify-content-start  align-self-stretch">
            <img src={dot} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">
              {<FormattedMessage id={"program.local.journey.5.heading"}/>}
            </h4>
            <p className="process--text-mobil">
              {<FormattedMessage id={"program.local.journey.5.text"}/>}
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Process
