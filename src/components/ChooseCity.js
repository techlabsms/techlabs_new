import React, { Component } from "react"
import ds from "../assets/ds.png"
import ai from "../assets/ai.png"
import web from "../assets/web.png"
import dswhite from "../assets/ds_white.png"
import aiwhite from "../assets/ai_white.png"
import webwhite from "../assets/web_white.png"
import { Link } from "gatsby"
import Countdown from "./Countdown"
import Heading from "./smallComponents/Heading"

class ChooseCity extends Component {
  state = {
    muensterIsClicked: false,
    copenhagenIsClicked: false,
    barcelonaIsClicked: false,
    medellinIsClicked: false,
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
    const { heading, subheading } = this.props

    const {
      muensterIsClicked,
      copenhagenIsClicked,
      barcelonaIsClicked,
      atEnd,
    } = this.state
    return (
      <>
        <div className="container">
          <Heading heading={heading} subheading={subheading} />
          <div className="row my-3">
            <div className="col-md-4 mt-4">
              <a href="#requirements" className="noDec aNone w-100">
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
                      medellinIsClicked: false,
                      barcelonaIsClicked: false,
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
                      <Countdown
                        date={this.props.muensterStart}
                        isOpen={this.props.muensterIsOpen}
                      />
                    </div>
                  </div>
                  <p>Available Tracks</p>
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
              </a>
            </div>
            <div className="col-md-4 d-flex mt-4">
              <a href="#requirements" className="noDec aNone w-100">
                <div
                  className={
                    this.state.copenhagenIsClicked
                      ? "chooseCity--clickedCard w-100 h-100"
                      : "chooseCity--card w-100 h-100"
                  }
                  onClick={() => {
                    this.setState({
                      muensterIsClicked: false,
                      medellinIsClicked: false,
                      copenhagenIsClicked: !this.state.copenhagenIsClicked,
                      barcelonaIsClicked: false,
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
                      <Countdown
                        date={this.props.copenhagenStart}
                        isOpen={this.props.copenhagenIsOpen}
                      />
                    </div>
                  </div>
                  <p>Available Tracks</p>
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
              </a>
            </div>
            <div className="col-md-4 d-flex mt-4">
              <a href="#requirements" className="noDec aNone w-100">
                <div
                  className={
                    this.state.barcelonaIsClicked
                      ? "chooseCity--clickedCard w-100 h-100"
                      : "chooseCity--card w-100 h-100"
                  }
                  onClick={() => {
                    this.setState({
                      muensterIsClicked: false,
                      copenhagenIsClicked: false,
                      medellinIsClicked: false,
                      barcelonaIsClicked: !this.state.barcelonaIsClicked,
                    })
                    this.props.isClicked(
                      "barcelona",
                      !this.state.barcelonaIsClicked
                    )
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="chooseCity--heading">Barcelona</h4>
                      <div
                        className={
                          this.state.barcelonaIsClicked
                            ? "section-divider-white"
                            : "section-divider"
                        }
                      />
                    </div>
                    <div className="col-md-12 col-xl-6">
                      <Countdown
                        date={this.props.barcelonaStart}
                        isOpen={this.props.barcelonaIsOpen}
                      />
                    </div>
                  </div>
                  <p>Available Tracks</p>
                  <div className="row px-2 my-2">
                    <div className="col">
                      <div className="row">
                        <img
                          src={this.state.barcelonaIsClicked ? aiwhite : ai}
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
                          src={this.state.barcelonaIsClicked ? dswhite : ds}
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
                          src={this.state.barcelonaIsClicked ? webwhite : web}
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
              </a>
            </div>
            <div className="col-md-4 d-flex mt-4">
              <a href="#requirements" className="noDec aNone w-100">
                <div
                  className={
                    this.state.medellinIsClicked
                      ? "chooseCity--clickedCard w-100 h-100"
                      : "chooseCity--card w-100 h-100"
                  }
                  onClick={() => {
                    this.setState({
                      muensterIsClicked: false,
                      copenhagenIsClicked: false,
                      barcelonaIsClicked: false,
                      medellinIsClicked: !this.state.medellinIsClicked,
                    })
                    this.props.isClicked(
                      "medellín",
                      !this.state.medellinIsClicked
                    )
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="chooseCity--heading">Medellín</h4>
                      <div
                        className={
                          this.state.medellinIsClicked
                            ? "section-divider-white"
                            : "section-divider"
                        }
                      />
                    </div>
                    <div className="col-md-12 col-xl-6">
                      <Countdown
                        date={this.props.medellinStart}
                        isOpen={this.props.medellinIsOpen}
                      />
                    </div>
                  </div>
                  <p>Available Tracks</p>
                  <div className="row px-2 my-2">
                    <div className="col">
                      <div className="row">
                        <img
                          src={this.state.medellinIsClicked ? aiwhite : ai}
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
                          src={this.state.medellinIsClicked ? dswhite : ds}
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
                          src={this.state.medellinIsClicked ? webwhite : web}
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
              </a>
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
        {atEnd &&
        !muensterIsClicked &&
        !copenhagenIsClicked &&
        !barcelonaIsClicked ? (
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
