import React, { Component } from "react"
import skylineMuenster from "../assets/SkylineMuenster.png"
import skylineKopenhagen from "../assets/skylineKopenhagen.png"
import ds from "../assets/ds.png"
import ai from "../assets/ai.png"
import web from "../assets/web.png"
import { Link } from "gatsby"

class ChooseCity extends Component {
  state = {
    muensterIsClicked: false,
    copenhagenIsClicked: false,
  }

  render() {
    const { heading, subheading, muensterStart, copenhagenStart } = this.props
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
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
                  <div className="col">
                    <h4 className="chooseYourCity--heading">Muenster</h4>
                    <div className="section-divider" />
                  </div>
                  <div className="col">
                    <div className="chooseCity--start">
                      <p className="chooseCity--start_text">
                        Application Start:
                        <br />
                        {muensterStart}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row px-2 my-2">
                  <div className="col">
                    <div className="row">
                      <img
                        src={ai}
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
                        src={ds}
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
                        src={web}
                        alt="artificial intelligence"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">Web Development</p>
                    </div>
                    <div className="row">
                      <img
                        src={ds}
                        alt="data science"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">UX Design</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <img
                      src={skylineMuenster}
                      alt="skyline Muenster"
                      className="py-1 w-100"
                    />
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
                  <div className="col">
                    <h4 className="chooseYourCity--heading">Copenhagen</h4>
                    <div className="section-divider" />
                  </div>
                  <div className="col">
                    <div className="chooseCity--start">
                      <p className="chooseCity--start_text">
                        Application Start:
                        <br />
                        {copenhagenStart}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row px-2 my-2">
                  <div className="col">
                    <div className="row">
                      <img
                        src={ai}
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
                        src={ds}
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
                        src={web}
                        alt="artificial intelligence"
                        width="15"
                        height="15"
                        className="mr-2"
                      />
                      <p className="chooseCity--subject">Web Development</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <img
                      src={skylineKopenhagen}
                      alt="skyline Muenster"
                      className="w-100 py-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <Link to="/foundYourOwn" className="noDec a-black">
                <div className="chooseCity--card w-100 h-100">
                  <h4 className="chooseYourCity--heading">Your City?</h4>
                  <div className="section-divider" />
                  <div className="row">
                    <div className="col">
                      <p className="chooseCity--subject py-2">Apply and build TechLabs in your City. Become a Co-Founder at TechLabs</p>
                    </div>
                  </div>
                  <img
                    src={skylineMuenster}
                    alt="skyline Muenster"
                    className="py-4"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ChooseCity
