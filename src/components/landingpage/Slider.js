import React, { Component } from "react"

// plugin & external
import Modal from "react-modal"
import Img from "gatsby-image"
import { FormattedMessage } from "gatsby-plugin-react-intl"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

// assets
import Arrow from "../../assets/arrow.svg"
import Quote from "../../assets/quote.png"

class Slider extends Component {
  constructor() {
    super()
    this.state = {
      testimonials: [],
      number: 0,
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      testimonials: [
        {
          index: 0,
          name: "Jin Rhee",
          role: "Business Administration",
          text: this.props.quoteOne,
          image: this.props.imageOne,
          image_mobil: this.props.imageOneMobil,
          image_mobil_thumbnail: this.props.imageOneThumbnail,
          link:
            "https://medium.com/techlabsms/schulabgaengerwebsite-undnun-bc8909604733",
          width: "33%",
          youtube: "https://www.youtube.com/embed/rlMgA98IAFE",
          hasProject: false,
          video: true,
        },
        {
          index: 1,
          name: "Hümeyra Husseini",
          role: "Student Molecular Biomedicine",
          text: this.props.quoteTwo,
          image: this.props.imageTwo,
          link:
            "https://medium.com/techlabsms/bone-age-prediction-through-x-ray-images-6e181d900a7a",
          image_mobil: this.props.imageTwoMobil,
          width: "66%",
          hasProject: true,
          video: false,
        },
        {
          index: 2,
          name: "Miriam Gercken",
          role: "Student Marketing",
          text: this.props.quoteThree,
          image: this.props.imageThree,
          image_mobil: this.props.imageThreeMobil,
          image_mobil_thumbnail: this.props.imageThreeThumbnail,
          link:
            "https://medium.com/techlabsms/why-is-there-always-so-much-month-left-at-the-end-of-the-money-453ba6a5f256",
          width: "100%",
          youtube: "https://www.youtube.com/embed/TSXyJbCmGto",
          hasProject: false,
          video: true,
        },
      ],
    })
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

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  render() {
    const { testimonials, number } = this.state
    return (
      <>
        <Container>
          <div className="d-none d-md-block">
            <Heading
              heading={<FormattedMessage id={"landingpage.slider.heading"} />}
              subheading={
                <FormattedMessage id={"landingpage.slider.subheading"} />
              }
            />
            <div className="row">
              <div
                className={
                  testimonials[number].video
                    ? "col-12 col-lg-5  slider--img"
                    : "col-12 col-lg-5"
                }
              >
                <div
                  onClick={testimonials[number].video ? this.openModal : ""}
                  onKeyDown={() => null}
                  role="button"
                  tabIndex={0}
                >
                  <Img fluid={testimonials[number].image} alt="" />
                </div>

                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  className="Modal"
                  overlayClassName="Modal--overlay"
                >
                  <div className="Modal--wrapper">
                    <iframe
                      type="text/html"
                      title="video"
                      width="920"
                      height="518"
                      frameborder="0"
                      className="Modal--video"
                      src={testimonials[number].youtube}
                      autoplay
                    />
                  </div>
                  <span className="Modal--close">
                    <button onClick={this.closeModal} className="Modal--button">
                      X
                    </button>
                  </span>
                </Modal>
              </div>
              <div className="col-md-1 text-center d-none d-lg-block">
                <img src={Quote} alt="" className="mt-5 w-50" />
              </div>
              <div className="col-12 col-lg-6">
                <p className="slider--pre">
                  {<FormattedMessage id={"landingpage.slider.pre"} />}
                </p>
                <h2 className="slider--title mt-4">
                  {<FormattedMessage id={"landingpage.slider.title"} />}
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
                {testimonials[number].hasProject && (
                  <a
                    className="slider--button mt-2"
                    href={testimonials[number].link}
                    target="blank"
                  >
                    <span role="img" aria-label="thumbs up">
                      👍🏻
                    </span>
                    {
                      <FormattedMessage
                        id={"landingpage.slider.button"}
                        values={{
                          name: testimonials[number].name,
                        }}
                      />
                    }
                    {/* {` read about ${testimonials[number].name}´s project`} */}
                  </a>
                )}
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
                  <div className="col-6 text-right slider--arrow">
                    <div
                      onClick={() => this.moveLeft()}
                      onKeyDown={() => null}
                      role="button"
                      tabIndex={0}
                    >
                      <img
                        src={Arrow}
                        alt=""
                        className="slider--arrow slider--arrow-left"
                      />
                    </div>
                    <div
                      onClick={() => this.moveRight()}
                      onKeyDown={() => null}
                      role="button"
                      tabIndex={0}
                    >
                      <img src={Arrow} alt="" className="slider--arrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-none">
            <Heading
              heading="Our Community"
              subheading="Find out what our participants experienced at TechLabs!"
            />
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
                {testimonials[number].video ? (
                  <div className="text-center my-4">
                    <div
                      onClick={testimonials[number].video ? this.openModal : ""}
                      onKeyDown={() => null}
                      role="button"
                      tabIndex={0}
                    >
                      <Img
                        fluid={testimonials[number].image_mobil_thumbnail}
                        alt="img thumbnail"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="slider--text-mobil mt-3 pb-5">
                    {testimonials[number].text}
                  </p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-4 text-center">
                <Img
                  fixed={testimonials[number].image_mobil}
                  alt="img"
                  style={{
                    marginLeft: "auto",
                    marginTop: "auto",
                  }}
                />
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
              <div className="col text-center  ">
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
        </Container>
      </>
    )
  }
}

export default Slider
