import React from "react"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-react-intl"

// components
import Heading from "../smallComponents/Heading"

// assets
import prerectangle from "../../assets/precatngle.png"
import arrowRight from "../../assets/arrowRight.png"
import arrowLeft from "../../assets/arrowLeft.png"

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
    const { heading, subheading } = this.props
    return (
      <>
        <div className="container d-none d-lg-block my-5 py-5">
          <Heading heading={heading} subheading={subheading} />
          {/* large screens */}
          <div className="row mt-4">
            {/* step 1  */}
            <div className="col-md-4">
              <div
                className=" applProcess--rectangle"
                style={{
                  backgroundImage: `url(${prerectangle})`,
                }}
              >
                <h3 className="applProcess--heading">
                  <FormattedMessage
                    id={"applypage.applicationProcess.step1.heading"}
                  />
                </h3>
              </div>
              <p className="px-3 d-block d-md-none">
                <FormattedMessage
                  id={"applypage.applicationProcess.step1.text"}
                />
              </p>
            </div>
            {/* step 2 */}
            <div className="col-md-4">
              <div
                className=" applProcess--rectangle"
                style={{
                  backgroundImage: `url(${prerectangle})`,
                }}
              >
                <h3 className="applProcess--heading">
                  <FormattedMessage
                    id={"applypage.applicationProcess.step2.heading"}
                  />
                </h3>
              </div>
              <p className="px-3 d-block d-md-none">
                <FormattedMessage
                  id={"applypage.applicationProcess.step2.text"}
                />
              </p>
            </div>
            {/* step 3 */}
            <div className="col-md-4">
              <div
                className=" applProcess--rectangle"
                style={{
                  backgroundImage: `url(${prerectangle})`,
                }}
              >
                <h3 className="applProcess--heading">
                  <FormattedMessage
                    id={"applypage.applicationProcess.step3.heading"}
                  />
                </h3>
              </div>
              <p className="px-3 d-block d-md-none">
                <FormattedMessage
                  id={"applypage.applicationProcess.step3.text"}
                />
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <p className="px-3 d-none d-md-block">
                <FormattedMessage
                  id={"applypage.applicationProcess.step1.text"}
                />
              </p>
            </div>
            <div className="col-md-4">
              <p className="px-3 d-none d-md-block">
                <FormattedMessage
                  id={"applypage.applicationProcess.step2.text"}
                />
              </p>
            </div>
            <div className="col-md-4">
              <p className="px-3 d-none d-md-block">
                <FormattedMessage
                  id={"applypage.applicationProcess.step3.text"}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid d-block d-lg-none applProcess--cards-container my-5 py-5">
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
                    <h3>
                      1.{" "}
                      <FormattedMessage
                        id={"applypage.applicationProcess.step1.heading"}
                      />
                    </h3>
                  </div>
                </div>
                <div className="row h-50">
                  <div className="col">
                    <p className="px-3">
                      <FormattedMessage
                        id={"applypage.applicationProcess.step1.text"}
                      />
                    </p>
                  </div>
                </div>
                <div className="row d-flex align-items-end">
                  <div className="col text-right">
                    <button
                      onClick={() => this.handleRightClick()}
                      className="applProcess--card-btn"
                    >
                      <FormattedMessage
                        id={"applypage.applicationProcess.nextStep"}
                      />
                      <img src={arrowRight} alt="" />
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
                    <h3>
                      2.{" "}
                      <FormattedMessage
                        id={"applypage.applicationProcess.step2.heading"}
                      />
                    </h3>
                  </div>
                </div>
                <div className="row h-50">
                  <div className="col">
                    <p className="px-3">
                      <FormattedMessage
                        id={"applypage.applicationProcess.step2.text"}
                      />
                    </p>
                  </div>
                </div>
                <div className="row d-flex align-items-center">
                  <div className="col-6">
                    <button
                      onClick={() => this.handleLeftClick()}
                      className="applProcess--card-btn"
                    >
                      <img src={arrowLeft} alt="" />{" "}
                      <FormattedMessage
                        id={"applypage.applicationProcess.firstStep"}
                      />
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      onClick={() => this.handleRightClick()}
                      className="applProcess--card-btn"
                    >
                      <FormattedMessage
                        id={"applypage.applicationProcess.nextStep"}
                      />{" "}
                      <img src={arrowRight} alt="" />
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
                    <h3>
                      3.{" "}
                      <FormattedMessage
                        id={"applypage.applicationProcess.step3.heading"}
                      />
                    </h3>
                  </div>
                </div>
                <div className="row h-50">
                  <div className="col">
                    <p className="px-3">
                      <FormattedMessage
                        id={"applypage.applicationProcess.step3.text"}
                      />
                    </p>
                  </div>
                </div>
                <div className="row d-flex align-items-end">
                  <div className="col">
                    <button
                      onClick={() => this.handleLeftClick()}
                      className="applProcess--card-btn"
                    >
                      <img src={arrowLeft} alt="" />{" "}
                      <FormattedMessage
                        id={"applypage.applicationProcess.secondStep"}
                      />
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
