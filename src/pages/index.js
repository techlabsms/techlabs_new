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
import quote from "../assets/quote.png"
import expect00 from "../assets/photos/code-img.jpg"
import expect01 from "../assets/photos/IMG_4068-1.jpg"
import expect02 from "../assets/photos/IMG_4081-1.jpg"
import expect03 from "../assets/photos/IMG_4119-1.jpg"
import benefits from "../assets/benefits.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import commu from "../assets/commu.png"
import slack from "../assets/slack.png"
import gic from "../assets/gic.png"
import nils from "../assets/nils.png"
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
          <section className="container whatWeOffer">
            <h1 className="section-title">The TechLabs Journey</h1>
            <div className="section-divider" />
            <div className="row">
              <div className="col">
                <p className="mt-2 text-justify whatWeOffer--text">
                  TechLabs Digital Shaper Journey: Get up to speed learning tech
                  skills in one semester by means of our blended-learning
                  concept that combines Online Learning, Project Work and
                  TechLabs Community Meetings. Independent of the background and
                  prior knowledge - anyone can participate and learn tech skills
                  for free. Find more details about our program here.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 text-right">
                <img src={quote} alt="qoute" className="w-25" />
              </div>
              <div className="col-10">
                <p className="whatWeOffer--quote text-justify">
                  As a nonprofit, our mission is to enable as many people as
                  possible to acquire state-of-the-art tech skills to solve
                  today’s problems in a digital and entrepreneurial way
                </p>
                <div className="row mt-4">
                  <div className="col-3">
                    <img src={nils} alt="nils" />
                  </div>
                  <div className="col-9">
                    <p className="mt-4 whatWeOffer--nils">
                      Nils Bahr <br />{" "}
                      <span className="whatWeOffer--nils-color">
                        Head of Product @ TechLabs
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 mb-5">
              <p className="whatWeOffer--lastLine">
                Become a Digital Shaper. We help you to complete your own tech
                project and qualify for tech internships.
              </p>
            </div>
          </section>
          <section className="container mt-5 mb-5">
            <h1 className="section-title">Key Benefits</h1>
            <div className="section-divider" />
            <div className="row mt-5">
              <div className="col-md-5 col-lg-4" />
              <div className="col-md-7 col-lg-8">
                <img src={benefits} alt="" />
              </div>
              <div className="card keyBenefits--card">
                <div className="row">
                  <div className="col-2 text-center">
                    <img src={icon1} alt="code file" className="mt-2" />
                  </div>
                  <div className="col-10 pl-5">
                    <h3>Start to code - independent of your prior knowledge</h3>
                    <p className="keyBenefits--card-text">
                      Get a personal learning path. Learn tech skills in the
                      tracks Data Science, Artitificial Intelligence or Web
                      Development by means of the best online resources
                      available.
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 text-center">
                    <img src={icon2} alt="code file" className="mt-2" />
                  </div>
                  <div className="col-10 pl-5">
                    <h3>Build your own tech project portfolio</h3>
                    <p className="keyBenefits--card-text">
                      Choose a project idea that you find interesting and work
                      on it in an interdisciplinary group of 3-4 fellow TechLabs
                      participants. Build up a tech project portfolio.
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 text-center">
                    <img src={icon3} alt="code file" className="mt-2" />
                  </div>
                  <div className="col-10 pl-5">
                    <h3>Shape your career path</h3>
                    <p className="keyBenefits--card-text">
                      If you want to learn state-of-the-art tech skills that
                      will enable you to quickly create stunning tech projects,
                      join a tech startup or get in touch with our renowned
                      partners. TechLabs is the right way to go for.
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 text-center">
                    <img src={icon4} alt="code file" className="mt-2" />
                  </div>
                  <div className="col-10 pl-5">
                    <h3>Learn from skilled mentors</h3>
                    <p className="keyBenefits--card-text">
                      In case you have any question during your learning journey
                      or project work, our mentors are happy to support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container-fluid mt-5 background">
            <div className="container mt-5">
              <h1 className="section-title">Learn More</h1>
              <div className="section-divider" />
              <div className="row h-100">
                <div className="col-6 mt-3">
                  <div className="card">
                    <h2 className="mt-3 color-red">Location →</h2>
                    <p className="color-gl">
                      Check out our locations Check out our locations Check out
                      our locations Check out our locations Check out our
                      locations
                    </p>
                    <Link to="/locations">
                      <button className="btn btn-primary mt-3">
                        Locations
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-6 mt-3">
                  <div className="card">
                    <h2 className="mt-3 color-red">Program →</h2>
                    <p className="color-gl">
                      Check out our Program Check out our Program Check out our
                      Program Check out our Program Check out our Program
                    </p>
                    <Link to="/programm">
                      <button className="btn btn-primary mt-3">Program</button>
                    </Link>
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
