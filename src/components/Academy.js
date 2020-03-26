import React, { Component } from "react"
import DataScience from "../assets/dashboard.png"
import WebDev from "../assets/webdevpro.png"
import AI from "../assets/ai-robot.png"
import UX from "../assets/UX.png"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"

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
    const {
      firstTrack,
      firstTrackText,
      secondTrack,
      secondTrackText,
      thirdTrack,
      thirdTrackText,
      fourthTrack,
      fourthTrackText,
    } = this.props
    return (
      <Container>
        <Heading
          heading="TechLabs Academy"
          subheading="Explore our courses and choose the one that suits you the most!"
        />
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
                <h4 className="academy--card-title">{firstTrack}</h4>
                <p class={index === 0 ? "d-block" : "d-none"}>
                  {firstTrackText}
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
                <h4 className="academy--card-title">{secondTrack}</h4>
                <p class={index === 1 ? "d-block" : "d-none"}>
                  {secondTrackText}
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
                <h4 className="academy--card-title">{thirdTrack}</h4>
                <p class={index === 2 ? "d-block" : "d-none"}>
                  {thirdTrackText}
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
                <h4 className="academy--card-title">{fourthTrack}</h4>

                <p class={index === 3 ? "d-block" : "d-none"}>
                  {fourthTrackText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Academy
