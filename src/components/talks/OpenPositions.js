import React from "react"
import { FormattedMessage, Link } from "gatsby-plugin-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const OpenPositions = ({ heading, subheading }) => {
  return (
    <Container>
       <Heading
            heading={<FormattedMessage id={"talk.positions.heading"} />}
            subheading={<FormattedMessage id={"talk.positions.subheading"} />}
          />
          <div className="row talk__positions">
            <div className="col-12 col-lg-6">
              <div className="row">
                <Link to="/" className="noDec w-100">
                  <div className="card">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="https://www.picnic.app/static/logo-af01e33d873e4fcaf56b8c86737bb43f.svg"
                          alt="picnic"
                        />
                      </div> 
                      <div className="col-6">
                        Testmanager 
                      </div>
                      <div className="col-3 px-2">
                        <FormattedMessage id={"talk.positions.learnmore"} />
                      </div>
                      <div className="col-1 px-0">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="row">
                <Link to="/" className="noDec w-100">
                  <div className="card">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="https://www.picnic.app/static/logo-af01e33d873e4fcaf56b8c86737bb43f.svg"
                          alt="picnic"
                        />
                      </div> 
                      <div className="col-6">
                        Data Scientist
                      </div>
                      <div className="col-3 px-2">
                        <FormattedMessage id={"talk.positions.learnmore"} />
                      </div>
                      <div className="col-1 px-0">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="row">
                <Link to="/" className="noDec w-100">
                  <div className="card">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="https://www.picnic.app/static/logo-af01e33d873e4fcaf56b8c86737bb43f.svg"
                          alt="picnic"
                        />
                      </div> 
                      <div className="col-6">
                        Product Manager
                      </div>
                      <div className="col-3 px-2">
                        <FormattedMessage id={"talk.positions.learnmore"} />
                      </div>
                      <div className="col-1 px-0">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row">
                <Link to="/" className="noDec w-100">
                  <div className="card">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="https://www.picnic.app/static/logo-af01e33d873e4fcaf56b8c86737bb43f.svg"
                          alt="picnic"
                        />
                      </div> 
                      <div className="col-6">
                        Product Manager 
                      </div>
                      <div className="col-3 px-2">
                        <FormattedMessage id={"talk.positions.learnmore"} />
                      </div>
                      <div className="col-1 px-0">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="row">
                <Link to="/" className="noDec w-100">
                  <div className="card">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="https://www.picnic.app/static/logo-af01e33d873e4fcaf56b8c86737bb43f.svg"
                          alt="picnic"
                        />
                      </div> 
                      <div className="col-6">
                        Product Manager
                      </div>
                      <div className="col-3 px-2">
                        <FormattedMessage id={"talk.positions.learnmore"} />
                      </div>
                      <div className="col-1 px-0">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="row">
                <Link to="/" className="noDec w-100">
                  <div className="card">
                    <div className="row">
                      <div className="col-2">
                        <img
                          src="https://www.picnic.app/static/logo-af01e33d873e4fcaf56b8c86737bb43f.svg"
                          alt="picnic"
                        />
                      </div> 
                      <div className="col-6">
                        Product Manager
                      </div>
                      <div className="col-3 px-2">
                        <FormattedMessage id={"talk.positions.learnmore"} />
                      </div>
                      <div className="col-1 px-0">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
    </Container>
  )
}

export default OpenPositions
