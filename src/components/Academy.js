import React, { Component } from "react"
import DataScience from "../assets/dashboard.png"
import WebDev from "../assets/webdevpro.png"
import AI from "../assets/ai-robot.png"
import UX from "../assets/UX.png"

class Academy extends Component {
  state = {
    images: [DataScience, WebDev, AI, UX],
    index: 0,
  }

  indexHandler(number) {
    this.setState({
      index: number,
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
          <div className="col align-self-center text-center d-none d-lg-block">
            <img src={images[index]} alt="web" className="w-75 py-5" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="row mt-4">
              <div
                className={
                  index === 0
                    ? "col align-self-center text-center d-lg-none"
                    : "col align-self-center text-center d-none"
                }
              >
                <img src={images[index]} alt="web" className="w-75 py-5" />
              </div>
              <div
                className="academy--card w-100"
                onMouseEnter={() => this.indexHandler(0)}
                onTouchStart={() => this.indexHandler(0)}
                style={{
                  backgroundColor: `${index === 0 ? "#fb1d5c" : "white"}`,
                  color: `${index === 0 ? "white" : "black"}`,
                  transform: `${index === 0 ? "scale(1.05)" : "scale(1.0)"}`,
                }}
              >
                <h4 className="academy--card-title">Data Science</h4>
                <p class={index === 0 ? "d-block" : "d-none"}>
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
                className={
                  index === 1
                    ? "col align-self-center text-center d-lg-none"
                    : "col align-self-center text-center d-none"
                }
              >
                <img src={images[index]} alt="web" className="w-75 py-5" />
              </div>
              <div
                className="academy--card w-100"
                onMouseEnter={() => this.indexHandler(1)}
                onTouchStart={() => this.indexHandler(1)}
                style={{
                  backgroundColor: `${index === 1 ? "#fb1d5c" : "white"}`,
                  color: `${index === 1 ? "white" : "black"}`,
                  transform: `${index === 1 ? "scale(1.05)" : "scale(1.0)"}`,
                }}
              >
                <h4 className="academy--card-title">Web Development</h4>
                <p class={index === 1 ? "d-block" : "d-none"}>
                  In the Web Development track you will learn to build your
                  first interactive web applications and get to know the Web Dev
                  toolbox (e.g. HTML, CSS, JavaScript, React.js, and many more)
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className={
                  index === 2
                    ? "col align-self-center text-center d-lg-none"
                    : "col align-self-center text-center d-none"
                }
              >
                <img src={images[index]} alt="web" className="w-75 py-5" />
              </div>
              <div
                className="academy--card w-100"
                onMouseEnter={() => this.indexHandler(2)}
                onTouchStart={() => this.indexHandler(2)}
                style={{
                  backgroundColor: `${index === 2 ? "#fb1d5c" : "white"}`,
                  color: `${index === 2 ? "white" : "black"}`,
                  transform: `${index === 2 ? "scale(1.05)" : "scale(1.0)"}`,
                }}
              >
                <h4 className="academy--card-title">Artificial intelligence</h4>
                <p class={index === 2 ? "d-block" : "d-none"}>
                  In the Artificial intelligence track you will learn about the
                  possibilities of current AI techniques, attain Python skills,
                  and builds first image recognition applications.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className={
                  index === 3
                    ? "col align-self-center text-center d-lg-none"
                    : "col align-self-center text-center d-none"
                }
              >
                <img src={images[index]} alt="web" className="w-75 py-5" />
              </div>
              <div
                className="academy--card w-100"
                onMouseEnter={() => this.indexHandler(3)}
                onTouchStart={() => this.indexHandler(3)}
                style={{
                  backgroundColor: `${index === 3 ? "#fb1d5c" : "white"}`,
                  color: `${index === 3 ? "white" : "black"}`,
                  transform: `${index === 3 ? "scale(1.05)" : "scale(1.0)"}`,
                }}
              >
                <h4 className="academy--card-title">User Experience Design</h4>

                <p class={index === 3 ? "d-block" : "d-none"}>
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
