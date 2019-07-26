import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import RightImageSection from "../components/RightImageSection"
import ACN from "../assets/partner-acn.png"
import WF from "../assets/partner-wf.png"
import EY from "../assets/partner-ey.png"
import SOPRA from "../assets/partner-sopra.png"
import GIC from "../assets/gic.svg"
import firstImage from "../assets/lp.png"
import sittingagent from "../assets/sitting-agent.svg"
import TLStory from "../components/TLStory"
import expect00 from "../assets/photos/code-img.jpg"
import expect01 from "../assets/photos/IMG_4068-1.jpg"
import expect02 from "../assets/photos/IMG_4081-1.jpg"
import expect03 from "../assets/photos/IMG_4119-1.jpg"
import gic from "../assets/gic.png"
import { Link } from "gatsby"
import "../styles/_main.scss"
import "../styles/bootstrap.min.css"

class index extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <Navbar />

          <section className="py-5 padding-top-15">
            <div className="container">
              <div className="row">
                <div className="col-md-6 my-auto xs-margin-right">
                  <h1 className="display-4">
                    Lets learn <br />
                    digital <span className="highlighted">together</span>
                  </h1>
                  <p className="lead text-muted mb-4 margin-top-15 margin-bottom-2">
                    TechLabs is the community that enables you to become a
                    Digital Entrepreneur. Exciting meetups, talks, hackathons,
                    social events, workshops and much more await you. Discover
                    TechLabs now.
                  </p>
                  <Link className="btn btn-primary d-inline" to="/locations">
                    Locations
                  </Link>
                  <Link className="btn btn-secondary d-inline" to="/program">
                    Program
                  </Link>
                </div>
                <div className="col-md-6">
                  <img
                    className="img-fluid mt-5 mt-md-0 center-padding"
                    src={firstImage}
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
                  <h5 className="text-left trusted2 color-gl">
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
                    <a href="/" className="card-a">
                      <div className="card">
                        <h1 className="card-title">12</h1> <br />
                        <p className="card-subtitle">weeks coding</p>
                        <p className="text-muted">
                          in 12-16 weeks you get{" "}
                          <span className="highlighted">
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
                    <a href="/" className="card-a">
                      <div className="card">
                        <h1 className="card-title">3</h1> <br />
                        <p className="card-subtitle">learning tracks</p>
                        <p className="text-muted">
                          You can currently choose between learning tracks in
                          <br />
                          <span className="highlighted">
                            AI, Web Development and Data Science.
                          </span>
                        </p>
                        <span className="card-discover">
                          > Discover our tracks
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 col-sm-6">
                    <a href="/" className="card-a">
                      <div className="card">
                        <h1 className="card-title">300+</h1> <br />
                        <p className="card-subtitle">community members</p>
                        <p className="text-muted">
                          Our growing community connects over
                          <span className="highlighted">
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
                    <Link to="/locations" className="card-a">
                      <div className="card">
                        <h1 className="card-title">3</h1> <br />
                        <p className="card-subtitle">TechLabs locations</p>
                        <p className="text-muted">
                          Currently we have an offline community in{" "}
                          <span className="highlighted">
                            Münster, Copenhagen & Barcelona
                          </span>{" "}
                          and many more to come.
                        </p>
                        <span className="card-discover">
                          > Discover our locations
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Slider />
          <section className="container">
            <RightImageSection
              heading="Award winning concept"
              text="Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, Text, Text,Text,Text, "
              image={gic}
            />
          </section>
          <section className="pt-5 margin-bottom-8 margin-top-4">
            <div className="container">
              <div className="row mt-5 pr-5">
                <div className="col-md-6 pb-5 center-me story-text">
                  <ul className="list-inline ml-4 mt-5">
                    <li className="d-flex mb-4">
                      <div>
                        <h3>
                          <span role="img" aria-label="pin">
                            📍
                          </span>{" "}
                          Meetups
                        </h3>
                        <p className="review">
                          Using our Piper Assistant application, you can move
                          your data to be stored our decentralized network with
                          simple drag & drop.
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-4">
                      <div>
                        <h3>
                          <span role="img" aria-label="star">
                            🌟
                          </span>{" "}
                          Workshops
                        </h3>
                        <p>
                          TechLabs helps to spur innovation by organizing
                          workshops with our renowned partners. In these
                          workshops we are bringing students together with
                          subject matter experts and focus on engaging tech
                          topics.
                        </p>
                      </div>
                    </li>
                    <li className="d-flex mb-4">
                      <div>
                        <h3>
                          <span role="img" aria-label="stars">
                            ✨
                          </span>{" "}
                          Socials
                        </h3>
                        <p className="review">
                          As with all innovative technologies, sometimes
                          unpredictable things will happen, and you can always
                          count on our support to solve issues for you.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 mt-auto pl-5 d-none d-md-block">
                  <TLStory className="center-padding" />
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container review">
              <h1 className="section-title">Why you should start now</h1>
              <div className="section-divider" />

              <div>
                <div className="row align-items-center text-md-left mb-5">
                  <div className="col-md-6 order-1 order-md-0">
                    <img
                      className="img-fluid img-shadow"
                      src={expect00}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 mb-4 mb-md-0 max-lengther">
                    <h1 className="mb-4">
                      <span role="img" aria-label="waving hand">
                        👋
                      </span>{" "}
                      Get a personal <br /> learning path
                    </h1>
                    <p>
                      <span className="highlighted">
                        Start to code - independent of your prior knowledge.
                      </span>
                      Learn tech skills in the tracks Data Science, Artitificial
                      Intelligence or Web Development by means of the best
                      online resources available.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center text-md-right mb-5">
                  <div className="col-md-6 order-1">
                    <img
                      className="img-fluid img-shadow"
                      src={expect01}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 mb-4 mb-md-0 order-0 max-lengther">
                    <h1 className="mb-4">
                      <span role="img" aria-label="biceps">
                        💪
                      </span>{" "}
                      Build your own <br /> tech project
                    </h1>
                    <p>
                      Choose a project idea that you find interesting and work
                      on it in an interdisciplinary group of 3-4 fellow TechLabs
                      participants.{" "}
                      <span className="highlighted">
                        {" "}
                        Build up a tech project portfolio.{" "}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row align-items-center text-md-left mb-5">
                  <div className="col-md-6 order-1 order-md-0">
                    <img
                      className="img-fluid img-shadow"
                      src={expect02}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 mb-4 mb-md-0 max-lengther">
                    <h1 className="mb-4">
                      <span role="img" aria-label="fire">
                        🔥
                      </span>{" "}
                      Shape your career path
                    </h1>
                    <p>
                      If you want to{" "}
                      <span className="highlighted">
                        {" "}
                        learn state-of-the-art tech skills
                      </span>{" "}
                      that will enable you to quickly create stunning tech
                      projects, join a tech startup or get in touch with our
                      renowned partners. TechLabs is the right way to go for.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center text-md-right mb-5">
                  <div className="col-md-6 order-1">
                    <img
                      className="img-fluid img-shadow"
                      src={expect03}
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 mb-4 mb-md-0 order-0 max-lengther">
                    <h1 className="mb-4">
                      <span role="img" aria-label="guy behind laptop">
                        👨‍💻
                      </span>{" "}
                      Learn with the community{" "}
                    </h1>
                    <p>
                      In case you have any question during your learning journey
                      or project work,
                      <span className="highlighted">
                        our community is always interested in discussing tech
                        and solving problems
                      </span>
                      and our mentors are happy to help you out!{" "}
                      <span role="img" aria-label="hands">
                        🙌
                      </span>
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
