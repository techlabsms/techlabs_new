import React from "react"
import prerectangle from "../assets/precatngle.png"
import arrowRight from "../assets/arrowRight.png"
import arrowLeft from "../assets/arrowLeft.png"

class ApplicationProcess extends React.Component {
  state = {
    translateX: 0,
  }

  handleRightClick() {
    const { translateX } = this.state
    this.setState({
      translateX: translateX - 100,
    })
  }

  handleLeftClick() {
    const { translateX } = this.state
    if (translateX !== 0) {
      this.setState({
        translateX: translateX + 100,
      })
    }
  }

  render() {
    return (
      <>
        <div className="container d-none d-lg-block">
          <div className="row">
            <div className="col">
              <h2>{this.props.heading}</h2>
              <div className="section-divider" />
              <p className="basicSection--sub">{this.props.subheading}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div
                className=" applProcess--rectangle"
                style={{
                  backgroundImage: `url(${prerectangle})`,
                }}
              >
                <h3 className="applProcess--heading">Online Application</h3>
              </div>
              <p className="px-3 d-block d-md-none">
                We look through your application and check whether your
                motivation fits our requirements!
              </p>
            </div>
            <div className="col-md-4">
              <div
                className=" applProcess--rectangle"
                style={{
                  backgroundImage: `url(${prerectangle})`,
                }}
              >
                <h3 className="applProcess--heading">Feedback Process</h3>
              </div>
              <p className="px-3 d-block d-md-none">
                After looking through all applications we quickly get back to
                you with our final feedback!
              </p>
            </div>
            <div className="col-md-4">
              <div
                className=" applProcess--rectangle"
                style={{
                  backgroundImage: `url(${prerectangle})`,
                }}
              >
                <h3 className="applProcess--heading">Kick-Off</h3>
              </div>
              <p className="px-3 d-block d-md-none">
                Congratulations – you are part of our TechLabs Community. Let’s
                start learning together!
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <p className="px-3 d-none d-md-block">
                We look through your application and check whether your
                motivation fits our requirements!
              </p>
            </div>
            <div className="col-md-4">
              <p className="px-3 d-none d-md-block">
                After looking through all applications we quickly get back to
                you with our final feedback!
              </p>
            </div>
            <div className="col-md-4">
              <p className="px-3 d-none d-md-block">
                Congratulations – you are part of our TechLabs Community. Let’s
                start learning together!
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid d-block d-lg-none applProcess--cards-container">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>{this.props.heading}</h2>
                <div className="section-divider" />
                <p className="basicSection--sub">{this.props.subheading}</p>
              </div>
            </div>
          </div>
          <div className="applProcess--cards">
            <div
              className="applProcess--cards-first"
              style={{
                transform: `translateX(${this.state.translateX}%)`,
              }}
            >
              <div className="applProcess--card">
                <div className="row">
                  <div className="col">
                    <h3>1. Online Application</h3>
                  </div>
                </div>
                <div className="row h-50">
                  <div className="col">
                    <p className="px-3">
                      We look through your application and check whether your
                      motivation fits our requirements!
                    </p>
                  </div>
                </div>
                <div className="row d-flex align-items-end">
                  <div className="col text-right">
                    <button
                      onClick={() => this.handleRightClick()}
                      className="applProcess--card-btn"
                    >
                      Next Step <img src={arrowRight} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="applProcess--cards-second"
              style={{
                transform: `translateX(${this.state.translateX}%)`,
              }}
            >
              <div className="applProcess--card">
                <div className="row">
                  <div className="col">
                    <h3>2. Online Application</h3>
                  </div>
                </div>
                <div className="row h-50">
                  <div className="col">
                    <p className="px-3">
                      After looking through all applications we quickly get back
                      to you with our final feedback!
                    </p>
                  </div>
                </div>
                <div className="row d-flex align-items-center">
                  <div className="col-6">
                    <button
                      onClick={() => this.handleLeftClick()}
                      className="applProcess--card-btn"
                    >
                      <img src={arrowLeft} alt="" /> First Step
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={() => this.handleRightClick()}
                      className="applProcess--card-btn"
                    >
                      Next Step <img src={arrowRight} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="applProcess--cards-third"
              style={{
                transform: `translateX(${this.state.translateX}%)`,
              }}
            >
              <div className="applProcess--card">
                <div className="row">
                  <div className="col">
                    <h3>3. Online Application</h3>
                  </div>
                </div>
                <div className="row h-50">
                  <div className="col">
                    <p className="px-3">
                      Congratulations – you are part of our TechLabs Community.
                      Let’s start learning together!
                    </p>
                  </div>
                </div>

                <div className="row d-flex align-items-end">
                  <div className="col">
                    <button
                      onClick={() => this.handleLeftClick()}
                      className="applProcess--card-btn"
                    >
                      <img src={arrowLeft} alt="" /> Second Step
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ApplicationProcess
