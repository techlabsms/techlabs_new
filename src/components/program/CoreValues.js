import React from "react"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"

const CoreValues = () => {
  return (
    <>
      <Container>
        <div className="row coreValues d-none d-lg-flex">
          <div className="col-md-12 col-lg-4 d-flex justify-content-center align-items-center">
            <h1 className="text-right coreValues--heading">
              <span>  
                <FormattedMessage id="corevalues.heading.1"/>
              </span> <FormattedMessage id="corevalues.heading.2"/>
            </h1>
          </div>
          <div className="col-md-12 col-lg-8 pl-3 mt-auto mb-auto">
            <div className="row w-75">
              <div className="col">
                <h2>
                  <FormattedMessage id="corevalues.impact.heading"/>
                </h2>
                <p>
                  <FormattedMessage id="corevalues.impact.text"/>
                </p>
              </div>
            </div>
            <div className="row w-75">
              <div className="col">
                <h2><FormattedMessage id="corevalues.passion.heading"/></h2>
                <p>
                  <FormattedMessage id="corevalues.passion.text"/>
                </p>
              </div>
            </div>
            <div className="row w-75">
              <div className="col">
                <h2>
                  <FormattedMessage id="corevalues.learning.heading"/>
                </h2>
                <p>
                  <FormattedMessage id="corevalues.learning.text"/>
                </p>
              </div>
            </div>
            <div className="row w-75">
              <div className="col">
                <h2>
                  <FormattedMessage id="corevalues.self.heading"/>
                </h2>
                <p>
                  <FormattedMessage id="corevalues.self.text"/>
                </p>
              </div>
            </div>
            <div className="row w-75">
              <div className="col">
                <h2>
                  <FormattedMessage id="corevalues.respect.heading"/>
                </h2>
                <p>
                  <FormattedMessage id="corevalues.respect.text"/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="container-fluid coreValues--mobil d-lg-none">
        <div className="container">
          <Heading heading="Our core values" />
        </div>
        <div className="container py-5 text-justify">
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2>
                <FormattedMessage id="corevalues.impact.heading"/>
              </h2>
              <p>
                <FormattedMessage id="corevalues.impact.text"/>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2><FormattedMessage id="corevalues.passion.heading"/></h2>
              <p>
                <FormattedMessage id="corevalues.passion.text"/>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2>
                <FormattedMessage id="corevalues.learning.heading"/>
              </h2>
              <p>
                <FormattedMessage id="corevalues.learning.text"/>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2>
                <FormattedMessage id="corevalues.self.heading"/>
              </h2>
              <p>
                <FormattedMessage id="corevalues.self.text"/>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2>
                <FormattedMessage id="corevalues.respect.heading"/>
              </h2>
              <p>
                <FormattedMessage id="corevalues.respect.text"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoreValues
