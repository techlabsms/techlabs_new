import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MCK from "../assets/partner-mck.png"
import ACN from "../assets/partner-acn.png"
import WF from "../assets/partner-wf.png"
import EY from "../assets/partner-ey.png"
import SOPRA from "../assets/partner-sopra.png"
import GIC from "../assets/gic.svg"
import COMMUNITY from "../assets/photos/IMG_4072-1.jpg"
import sittingagent from "../assets/sitting-agent.svg"
import Arrow from "../assets/arrow.svg"
import Simon from "../assets/simon.png"
import Huemeyra from "../assets/huemeyra.png"
import Clara from "../assets/clara.png"
import TLStory from "../components/TLStory"

class index extends React.Component {
  state = {
    testimonials: [
      {
        name: "Simon, IT-Admin",
        text:
          "I already come from the IT sector, but I am not learning programming there. That's why I came to TechLabs. The Web Development Track provides me with the necessary knowledge and the certificate is particularly valuable to me.",
        image: Simon,
      },
      {
        name: "Hümeyra, IT-Admin",
        text:
          "Consectetur nulla officia duis irure ad adipisicing ea cupidatat. Laborum sunt sunt ea est laboris consectetur officia mollit. Aute eu occaecat amet laboris non cupidatat mollit nostrud amet. Est consectetur quis consequat enim velit nisi mollit ad magna nisi nulla voluptate. Commodo enim tempor dolor pariatur enim eu magna.",
        image: Huemeyra,
      },
      {
        name: "Clara, IT-Admin",
        text:
          "I already come from the IT sector, but I am not learning programming there. That's why I came to TechLabs. The Web Development Track provides me with the necessary knowledge and the certificate is particularly valuable to me.",
        image: Clara,
      },
    ],
    number: 0,
  }
  render() {
    const { testimonials, number } = this.state
    return (
      <>
      <link href='../styles/fonts.css' rel='stylesheet' type='text/css'></link>
        <div className="container-fluid">
          <Navbar />

          <section className="promo">
            <div className="container center">
              <p className="no-margin-block">
                🔥 You can currently apply for a spot in the next starting batch
                in{" "}
                <a className="" href="/copenhagen">
                  Copenhagen
                </a>{" "}
                & <a href="/barcelona">Barcelona</a> 🔥
              </p>
            </div>
          </section>

          <section className="py-5 padding-top-15">
            <div className="container">
              <div className="row">
                <div className="col-md-5 my-auto xs-margin-right">
                  <h1 className="display-4">We Build. Digital. Shapers.</h1>
                  <p className="lead text-muted mb-4 margin-top-15 margin-bottom-2">
                    We are a community of tech-savvy individuals who approach
                    the problems of our time with a digital mindset. Through{" "}
                    <span className="hashtag">
                      exciting meetups, hackathons, socials, workshops and a
                      pioneering new design of a learning journey
                    </span>
                    , you will learn code and become a Digital Shaper yourself.
                    Discover TechLabs now.
                  </p>
                  <a className="btn btn-primary" href="/">
                    Locations
                  </a>
                  <a className="btn btn-secondary" href="/">
                    Program
                  </a>
                </div>
                <div className="col-md-7">
                  <img
                    className="img-fluid mt-4 mt-md-0 center-padding img-shadow"
                    src={COMMUNITY}
                    alt="commmunity"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="gic">
            <div className="container center">
              <img className="gic-badge" src={GIC} alt="gic" />
            </div>
          </section>

          <section className="py-5 padding-top-1">
            <div className="container">
              <div className="row justify-content-center align-items-center partner-palette">
                <div className="col-md-2 mb-4 trusted">
                  <h5 className="text-center trusted2">
                    trusted by our renowned partners
                  </h5>
                </div>
                <div className="col-md-10">
                  <div className="row xs-margin-left">
                    <div className="col-6 col-sm-3">
                      <img
                        className="img-fluid partner-logo"
                        src={ACN}
                        alt="acn"
                      />
                    </div>
                    <div className="col-6 col-sm-3">
                      <img
                        className="img-fluid partner-logo"
                        src={WF}
                        alt="wf"
                      />
                    </div>
                    <div className="col-6 col-sm-3">
                      <img
                        className="img-fluid partner-logo"
                        src={EY}
                        alt="ey"
                      />
                    </div>
                    <div className="col-6 col-sm-3">
                      <img
                        className="img-fluid partner-logo"
                        src={SOPRA}
                        alt="sopra"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h1 className="section-title">What we offer</h1>
              <div className="section-divider" />
              <div className="row">
                <div className="col-lg-5">
                  <div className="d-flex flex-column bg-light h-100 p-4">
                    <img
                      src={sittingagent}
                      alt="sittingtechy"
                      className="center-me"
                    />
                  </div>
                </div>
                <div className="d-flex col-lg-7 flex-wrap">
                  <div className="p-2 col-sm-6">
                    <a href="" className="card-a">
                      <div className="card">
                        <h1 className="card-title">12</h1> <br />
                        <p className="card-subtitle">weeks coding</p>
                        <p className="text-muted">
                          in 12-16 weeks you get{" "}
                          <span className="hashtag">
                            insights into the coding world
                          </span>{" "}
                          of TechLabs and get support from experienced mentors.
                        </p>
                        <span className="card-discover">
                          > Discover our program
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 col-sm-6">
                    <a href="" className="card-a">
                      <div className="card">
                        <h1 className="card-title">3</h1> <br />
                        <p className="card-subtitle">learning tracks</p>
                        <p className="text-muted">
                          You can currently choose between learning tracks in{" "}
                          <br />
                          <span className="hashtag">
                            {" "}
                            AI, Web Development and Data Science.{" "}
                          </span>
                        </p>
                        <span className="card-discover">
                          > Discover our tracks
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 col-sm-6">
                    <a href="" className="card-a">
                      <div className="card">
                        <h1 className="card-title">300+</h1> <br />
                        <p className="card-subtitle">community members</p>
                        <p className="text-muted">
                          Our growing community connects over{" "}
                          <span className="hashtag">
                            300 motivated people interested in learning tech.
                          </span>
                        </p>
                        <span className="card-discover">
                          > Discover our community
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 col-sm-6">
                    <a href="" className="card-a">
                      <div className="card">
                        <h1 className="card-title">3</h1> <br />
                        <p className="card-subtitle">TechLabs locations</p>
                        <p className="text-muted">
                          Currently we have an offline community in {" "}
                          <span className="hashtag">
                            Münster, Copenhagen & Barcelona
                          </span> 
                          {" "}and many more to come.
                        </p>
                        <span className="card-discover">
                          > Discover our locations
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            <div className="container">
              <h1 className="section-title">Our community</h1>
              <div className="section-divider" />

              <div className="row h-100">
                <div className="col-md-6 mt-3">
                  <div className="card">
                    <img
                      className="card-img"
                      src={testimonials[number].image}
                      alt=""
                    />
                    <p className="text-muted mt-3">
                      {testimonials[number].text}
                    </p>
                    <div className="row align-content-end">
                      <div className="col-md-9">
                        <span className="card-discover">
                          {testimonials[number].name}
                        </span>
                      </div>
                      <div className="col-md-3">
                        <img
                          src={Arrow}
                          alt="leftArrow"
                          className="card-leftArrow"
                          onClick={() =>
                            this.setState({
                              number:
                                number <= 0
                                  ? testimonials.length - 1
                                  : number - 1,
                            })
                          }
                        />
                        <img
                          src={Arrow}
                          alt="RightArrow"
                          className="card-rightArrow"
                          onClick={() =>
                            this.setState({
                              number:
                                number >= testimonials.length - 1
                                  ? 0
                                  : number + 1,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 my-auto">
                  <div className="ml-5">
                    <h3 className="community-title">
                      Our community is one of the key parts of our digital
                      education concept
                    </h3>
                    <p className="community-text">
                      TechLabs Digital Shaper Journey: Get up to speed learning
                      tech skills in one semester by means of our
                      blended-learning concept that combines Online Learning,
                      Project Work and TechLabs Community Meetings. Independent
                      of the background and prior knowledge - anyone can
                      participate and learn tech skills for free. Find more
                      details about our program here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-5 margin-bottom-8 margin-top-4">
            <div className="container">
              <div className="row mt-5 pr-5">
                <div className="col-md-6 pb-5 center-me story-text">
                  <ul className="list-inline ml-4 mt-5">
                    <li className="d-flex mb-4">
                      
                      <div>
                        <h3>Meetups</h3>
                        <p>
                          Using our Piper Assistant application, you can move
                          your data to be stored our decentralized network with
                          simple drag & drop.
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-4">
                      
                      <div>
                        <h3>Workshops</h3>
                        <p>
                          We want to make sure that you can keep using the
                          software that you use to manage your business.
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-4">
                      
                      <div>
                        <h3>Socials</h3>
                        <p>
                          As with all innovative technologies, sometimes
                          unpredictable things willl happen, and you can always
                          count on our support to solve issues for you.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 mt-auto pl-5 d-none d-md-block">

                  <TLStory className="center-padding">

                  </TLStory>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container text-center">
              <h2 className="mb-4">PiperNet Setup</h2>
              <p className="lead mb-5">
                We've designed a simple, efficient process for companies
                migrating to PiperNet. Here's how it works.
              </p>
              <div>
                <div className="row align-items-center text-md-left mb-5">
                  <div className="col-md-6 order-1 order-md-0">
                    <img
                      className="img-fluid"
                      src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 mb-4 mb-md-0">
                    <span className="display-3 mb-2">01</span>
                    <h3 className="mb-4">Move Data</h3>
                    <p>
                      Using our Piper Assistant application, you can move your
                      data to be stored our decentralized network with simple
                      drag & drop.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center text-md-right mb-5">
                  <div className="col-md-6 order-1">
                    <img
                      className="img-fluid"
                      src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 mb-4 mb-md-0 order-0">
                    <span className="display-3 mb-2">02</span>
                    <h3 className="mb-4">Integrate Software</h3>
                    <p>
                      We want to make sure that you can keep using the software
                      that you use to manage your business.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center text-md-left mb-5">
                  <div className="col-md-6 order-1 order-md-0">
                    <img
                      className="img-fluid"
                      src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 mb-4 mb-md-0">
                    <span className="display-3 mb-2">03</span>
                    <h3 className="mb-4">Ongoing Support</h3>
                    <p>
                      As with all innovative technologies, sometimes
                      unpredictable things will happen, and you can always count
                      on our support to solve issues for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container text-center">
              <h2 className="mb-5">Learn more about PiperNet</h2>
              <div className="card-deck">
                <div className="card">
                  <div className="card-body mt-3">
                    <h5 className="card-title">Videos</h5>
                    <p className="card-text">
                      Stop watching boring YouTube videos, and check out
                      Dinesh's extremely interesting series about the features
                      of PiperNet.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 mb-3">
                    <a className="btn btn-primary" href="/">
                      Watch Now
                    </a>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body mt-3">
                    <h5 className="card-title">Articles</h5>
                    <p className="card-text">
                      Let Gilfoyle take you on a journey into the futuristic
                      world of computing and data security in the decentralized
                      age.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 mb-3">
                    <a className="btn btn-primary" href="/">
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    )
  }
}

export default index
