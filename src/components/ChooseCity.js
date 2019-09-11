import React, { Component } from "react"
import ds from "../assets/ds.png"
import ai from "../assets/ai.png"
import web from "../assets/web.png"
import dswhite from "../assets/ds_white.png"
import aiwhite from "../assets/ai_white.png"
import webwhite from "../assets/web_white.png"
import { Link } from "gatsby"
import Countdown from "./Countdown"

class ChooseCity extends Component {
  state = {
    muensterIsClicked: false,
    copenhagenIsClicked: false,
    atEnd: false,
  }

  componentDidMount() {
    window.onscroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        this.setState({
          atEnd: true,
        })
      }
    }
  }

  render() {
    const { heading, subheading, } = this.props

    const { muensterIsClicked, copenhagenIsClicked, atEnd } = this.state
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>{heading}</h2>
              <div className="section-divider" />
              <p className="basicSection--sub">{subheading}</p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-4 mt-4">
              <div
                className={
                  this.state.muensterIsClicked
                    ? "chooseCity--clickedCard h-100"
                    : "chooseCity--card h-100"
                }
                onClick={() => {
                  this.setState({
                    muensterIsClicked: !this.state.muensterIsClicked,
                    copenhagenIsClicked: false,
                  })
                  this.props.isClicked(
                    "muenster",
                    !this.state.muensterIsClicked
                  )
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="chooseCity--heading">Muenster</h4>
                    <div
                      className={
                        this.state.muensterIsClicked
                          ? "section-divider-white"
                          : "section-divider"
                      }
                    />
                  </div>
                  <div className="col-md-12 col-xl-6">
                    <Countdown date={this.props.muensterStart} />
                  </div>
                </div>
                <div className="row px-2 my-2">
                  <div className="col">
                    <div className="row">
                      <img
                        src={this.state.muensterIsClicked ? aiwhite : ai}
                        alt="artificial intelligence"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">
                        Artifical Intelligence
                      </p>
                    </div>
                    <div className="row">
                      <img
                        src={this.state.muensterIsClicked ? dswhite : ds}
                        alt="data science"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">Data Science</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <img
                        src={this.state.muensterIsClicked ? webwhite : web}
                        alt="artificial intelligence"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">Web Development</p>
                    </div>
                    <div className="row">
                      <img
                        src={this.state.muensterIsClicked ? webwhite : web}
                        alt="data science"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">UX Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex mt-4">
              <div
                className={
                  this.state.copenhagenIsClicked
                    ? "chooseCity--clickedCard w-100 h-100"
                    : "chooseCity--card w-100 h-100"
                }
                onClick={() => {
                  this.setState({
                    muensterIsClicked: false,
                    copenhagenIsClicked: !this.state.copenhagenIsClicked,
                  })
                  this.props.isClicked(
                    "copenhagen",
                    !this.state.copenhagenIsClicked
                  )
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="chooseCity--heading">Copenhagen</h4>
                    <div
                      className={
                        this.state.copenhagenIsClicked
                          ? "section-divider-white"
                          : "section-divider"
                      }
                    />
                  </div>
                  <div className="col-md-12 col-xl-6">
                    <Countdown date={this.props.copenhagenStart} />
                  </div>
                </div>
                <div className="row px-2 my-2">
                  <div className="col">
                    <div className="row">
                      <img
                        src={this.state.copenhagenIsClicked ? aiwhite : ai}
                        alt="artificial intelligence"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">
                        Artifical Intelligence
                      </p>
                    </div>
                    <div className="row">
                      <img
                        src={this.state.copenhagenIsClicked ? dswhite : ds}
                        alt="data science"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">Data Science</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <img
                        src={this.state.copenhagenIsClicked ? webwhite : web}
                        alt="artificial intelligence"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">Web Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <Link to="/foundYourOwn" className="noDec a-black">
                <div className="chooseCity--card w-100 h-100">
                  <h4 className="chooseCity--heading">Your City?</h4>
                  <div className="section-divider" />
                  <div className="row">
                    <div className="col">
                      <p className="chooseCity--subject py-2">
                        Apply and build TechLabs in your City. Become a
                        Co-Founder at TechLabs
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {atEnd && !muensterIsClicked && !copenhagenIsClicked ? (
          <div className="row mt-5 chooseCity--stopper">
            <div className="col text-center py-4">
              <h2>Please choose a city first!</h2>
            </div>
          </div>
        ) : null}
      </>
    )
  }
}

export default ChooseCity
