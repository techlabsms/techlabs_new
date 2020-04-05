import React from "react"
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const WhatYouWillLearn = ({ intro, first, second, third, fourth }) => {
  return (
    <Container>
      <Heading heading="What Will You Learn?" subheading={intro} />

      <div className="row">
        <div className="col">
          <div className="learn--card">
            <div className="row mt-3">
              <div className="col-1">
                <div className="learn--color" />
              </div>
              <div className="col-11 mt-3">
                <p>{first}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="learn--card">
            <div className="row">
              <div className="col-1">
                <div className="learn--color" />
              </div>
              <div className="col-11 mt-3">
                <p>{second}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="learn--card">
            <div className="row">
              <div className="col-1">
                <div className="learn--color" />
              </div>
              <div className="col-11 mt-3">
                <p>{third}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="learn--card">
            <div className="row">
              <div className="col-1">
                <div className="learn--color" />
              </div>
              <div className="col-11 mt-3">
                <p>{fourth}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WhatYouWillLearn
