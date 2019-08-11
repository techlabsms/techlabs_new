import React, { Component } from "react"
import DataScience from "../assets/dashboard.png"
import WebDev from "../assets/webdevpro.png"
import AI from "../assets/ai-robot.png"

class Academy extends Component {
  state = {
    images: [DataScience, WebDev, AI],
    index: 0,
  }

  dataScienceHandler() {
    this.setState({
      index: 0,
    })
  }

  webDevHandler() {
    this.setState({
      index: 1,
    })
  }

  aiHandler() {
    this.setState({
      index: 2,
    })
  }

  render() {
    const { images, index } = this.state
    return (
      <div className="academy container py-5 my-5">
        <div className="row mt-5">
          <div className="col-sm-12">
            <h2>TechLabs Academy</h2>
            <div className="section-divider" />
            <p className="basicSection--sub">
              Explore our courses and choose the one that suits you the most!
            </p>
          </div>
        </div>
        <div className="row mt-5 d-flex mb-5">
          <div className="col align-self-center text-center ">
            <img src={images[index]} alt="web" className="w-75 py-5" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="row mt-4">
              <div
                className="academy--card"
                onMouseEnter={() => this.dataScienceHandler()}
                onTouchStart={() => this.dataScienceHandler()}
                style={{
                  backgroundColor: `${index === 0 ? "#fb1d5c" : "white"}`,
                  color: `${index === 0 ? "white" : "black"}`,
                  transform: `${index === 0 ? "scale(1.05)" : "scale(1.0)"}`,
                }}
              >
                <h4 className="academy--card-title">Data Science</h4>
                <p>
                  In the Data Science track you will learn basic coding skills
                  in R or Python and apply them directly to Data Science
                  tasks — from data import to data preparation and visualization
                  to building advanced machine learning models for
                  classification and regression
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="academy--card"
                onMouseEnter={() => this.webDevHandler()}
                onTouchStart={() => this.webDevHandler()}
                style={{
                  backgroundColor: `${index === 1 ? "#fb1d5c" : "white"}`,
                  color: `${index === 1 ? "white" : "black"}`,
                  transform: `${index === 1 ? "scale(1.05)" : "scale(1.0)"}`,
                }}
              >
                <h4 className="academy--card-title">Web Development</h4>
                <p>
                  In the Web Development track you will learn to build your
                  first interactive web applications and get to know the Web Dev
                  toolbox (e.g. HTML, CSS, JavaScript, React.js, and many more)
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="academy--card"
                onMouseEnter={() => this.aiHandler()}
                onTouchStart={() => this.aiHandler()}
                style={{
                  backgroundColor: `${index === 2 ? "#fb1d5c" : "white"}`,
                  color: `${index === 2 ? "white" : "black"}`,
                  transform: `${index === 2 ? "scale(1.05)" : "scale(1.0)"}`,
                }}
              >
                <h4 className="academy--card-title">Artificial intelligence</h4>
                <p>
                  In the Artificial intelligence track you will learn about the
                  possibilities of current AI techniques, attain Python skills,
                  and builds first image recognition applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Academy
