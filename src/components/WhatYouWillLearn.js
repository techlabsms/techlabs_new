import React from "react"

const WhatYouWillLearn = ({ intro, first, second, third, fourth }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2>What Will You Learn?</h2>
          <div className="section-divider" />
          <p>{intro}</p>
        </div>
      </div>
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
    </div>
  )
}

export default WhatYouWillLearn
