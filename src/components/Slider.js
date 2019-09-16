import React, { Component } from "react"
import Arrow from "../assets/arrow.svg"
import Simon from "../assets/simon.png"
import Simon_mobil from "../assets/simon_mobil.png"
import Huemeyra from "../assets/humeyra.png"
import Huemeyra_mobil from "../assets/humeyra_mobil.png"
import Clara from "../assets/clara.png"
import Clara_mobil from "../assets/clara_mobil.png"
import Quote from "../assets/quote.png"
import { CSSTransition, TransitionGroup } from "react-transition-group"

class Slider extends Component {
  state = {
    testimonials: [
      {
        index: 0,
        name: "Simon Herbert",
        role: "IT Specialist",
        text:
          "I already have an IT background, however, I have not learnt coding before TechLabs. That's why I came to TechLabs. The Web Development Track provides me with the necessary knowledge and the certificate is particularly valuable to me.",
        image: Simon,
        image_mobil: Simon_mobil,
        width: "33%",
      },
      {
        index: 1,
        name: "Hümeyra Husseini",
        role: "Student Molecular Biomedicine",
        text:
          "Starting without a tech background, the personal learning path that the TechLabs team put together for me allowed me to enter the AI track, learn the necessary coding skills and get to grips with machine deep learning. Finally I can build a bridge between biomedicine and AI.",
        image: Huemeyra,
        image_mobil: Huemeyra_mobil,
        width: "66%",
      },
      {
        index: 2,
        name: "Clara Oppermann",
        role: "Student Marketing and Management",
        text:
          "Although analytical skills are also of great importance in marketing in times of big data, they are often not a subject of much study. Thanks to an individual curriculum at TechLabs, I had the opportunity to learn how to use data and analysis tools without any previous programming knowledge.",
        image: Clara,
        image_mobil: Clara_mobil,
        width: "100%",
      },
    ],
    number: 0,
  }
  moveRight() {
    const { number, testimonials } = this.state
    this.setState({
      number: number >= testimonials.length - 1 ? 0 : number + 1,
    })
  }

  moveLeft() {
    const { number, testimonials } = this.state
    this.setState({
      number: number <= 0 ? testimonials.length - 1 : number - 1,
    })
  }

  render() {
    const { testimonials, number } = this.state
    return (
      <>
        <section className="py-5 container">
          <div className="container">
            <div className="d-none d-md-block">
              <div className="row mt-5">
                <div className="col">
                  <h2>Our Community</h2>
                  <div className="section-divider" />
                  <p className="basicSection--sub">
                    Find out what our testimonials experienced at TechLabs!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-5">
                  <TransitionGroup>
                    <CSSTransition
                      key={testimonials[number].index}
                      timeout={1000}
                      classNames="slider--imgout"
                    >
                      <img
                        src={testimonials[number].image}
                        alt=""
                        className="mt-4 d-block w-100"
                      />
                    </CSSTransition>
                  </TransitionGroup>
                </div>
                <div className="col-md-1 text-center d-none d-lg-block">
                  <img src={Quote} alt="" className="mt-5 w-50" />
                </div>
                <div className="col-12 col-lg-6">
                  <p className="slider--pre">TESTIMONIALS</p>
                  <h2 className="slider--title mt-4">
                    TechLabs taught me <br />
                    how to code
                  </h2>

                  <p className="slider--text mt-5 pb-5">
                    {testimonials[number].text}
                  </p>
                  <p className="slider--name mt-5">
                    {testimonials[number].name}
                    <br />
                    <span className="slider--role">
                      {testimonials[number].role}
                    </span>
                  </p>
                  <button className="slider--button mt-2">
                    <span role="img" aria-label="thumbs up">
                      👍🏻
                    </span>
                    {` read about ${testimonials[number].name}´s project`}
                  </button>
                  <div className="row mt-5">
                    <div className="col-6 d-flex">
                      <span>{`0${testimonials[number].index + 1}`}</span>
                      <div className="slider--status">
                        <div
                          className="slider--status-inner"
                          style={{
                            width: `${testimonials[number].width}`,
                          }}
                        />
                      </div>
                      <span>03</span>
                    </div>
                    <div className="col-6 text-right">
                      <img
                        src={Arrow}
                        alt=""
                        className="slider--arrow slider--arrow-left"
                        onClick={() => this.moveLeft()}
                      />
                      <img
                        src={Arrow}
                        alt=""
                        className="slider--arrow"
                        onClick={() => this.moveRight()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-none">
              <div className="row mt-5">
                <div className="col">
                  <h2>Our Community</h2>
                  <div className="section-divider" />
                  <p className="basicSection--sub">
                    Find out what our testimonials experienced at TechLabs!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-2 text-center">
                  <img src={Quote} alt="" className="w-75" />
                </div>
                <div className="col-8">
                  <h4 className="slider--title-mobil mt-2">
                    TechLabs taught me how to code
                  </h4>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <p className="slider--text-mobil mt-3 pb-5">
                    {testimonials[number].text}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 text-center">
                  <img src={testimonials[number].image_mobil} alt="img" />
                </div>
                <div className="col-8">
                  <p className="slider--name-mobil">
                    {testimonials[number].name}
                    <br />
                    <span className="slider--role-mobil">
                      {testimonials[number].role}
                    </span>
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-6 d-inline d-flex align-items-center">
                  <span>{`0${testimonials[number].index + 1}`}</span>
                  <div className="slider--status d-flex w-50">
                    <div
                      className="slider--status-inner"
                      style={{
                        width: `${testimonials[number].width}`,
                      }}
                    />
                  </div>
                  <span>03</span>
                </div>
                <div className="col text-center">
                  <img
                    src={Arrow}
                    alt=""
                    className="slider--arrow-mobil slider--arrow-mobil-left"
                    onTouchStart={() => this.moveLeft()}
                  />
                  <img
                    src={Arrow}
                    alt=""
                    className="slider--arrow-mobil"
                    onTouchStart={() => this.moveRight()}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Slider
