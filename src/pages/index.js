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
                <div className="col-lg-5 my-auto xs-margin-right">
                  <h1 className="display-4">
                    We Build.
                    <br />
                    <span className="highlighted lh-90">Digital. </span>
                    <br />
                    <span className="highlighted lh-90">Shapers.</span>
                  </h1>
                  <p className="index--lead mb-4 margin-top-15 margin-bottom-2 text-justify">
                    Our mission is to enable as many people as possible to
                    acquire state-of-the-art tech skills to solve today’s
                    problems in a digital way by providing an unique program
                    that combines online learning, project work and local
                    community events.
                  </p>
                  <div className="mt-5">
                    <Link className="btn btn-primary d-inline" to="/locations">
                      Locations
                    </Link>
                    <Link className="btn btn-primary d-inline" to="/program">
                      Program
                    </Link>
                  </div>
                </div>
                <div className="col-md-7 d-none d-lg-block">
                  <img
                    className="img-fluid mt-5 mt-md-0 center-padding"
                    src={firstImage}
                    alt="commmunity"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="gic py-5">
            <div className="container center">
              <img className="gic-badge" src={GIC} alt="gic" />
            </div>
          </section>

          <section className="py-5 wwo">
            <div className="container">
              <h1 className="section-title">What we offer</h1>
              <div className="section-divider" />
              <div className="row">
                <div className="col-lg-5 d-none d-md-block">
                  <div className="d-flex flex-column h-100 p-4">
                   
                  </div>
                </div>
                <div className="d-flex col-lg-7 flex-wrap">
                  <div className="p-2 col-sm-6 mt-5">
                    <a href="/" className="card-a">
                      <div className="card h-100">
                        <h1 className="card-title">6</h1> <br />
                        <p className="card-subtitle">months of coding</p>
                        <p className="text-muted">
                          Within 12-16 weeks you get insights into the world of
                          coding and can master tech through our
                          blended-learning concept.
                        </p>
                        <Link to="/program" className="noDec">
                          <span className="card-discover">
                            > Discover our program
                          </span>
                        </Link>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 col-sm-6 mt-5">
                    <a href="/" className="card-a">
                      <div className="card h-100">
                        <h1 className="card-title">4</h1> <br />
                        <p className="card-subtitle">digital tracks</p>
                        <p className="text-muted pb-4">
                          With TechLabs you can learn state of the art tech in
                          AI, Web Development, UX Design and Data Science.
                        </p>
                        <Link to="/program" className="noDec">
                          <span className="card-discover">
                            > Discover our tracks
                          </span>
                        </Link>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 col-sm-6 mt-5">
                    <a href="/" className="card-a">
                      <div className="card h-100">
                        <h1 className="card-title">300+</h1> <br />
                        <p className="card-subtitle">community members</p>
                        <p className="text-muted">
                          Our growing community connects 300+ people motivated
                          to learn tech – on- and offline.
                        </p>
                        <Link to="/locations" className="noDec">
                          <span className="card-discover">
                            > Discover our community
                          </span>
                        </Link>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 col-sm-6 mt-5">
                    <div className="card h-100">
                      <h1 className="card-title">3</h1> <br />
                      <p className="card-subtitle">locations</p>
                      <p className="text-muted pb-4">
                        We currently have offline communities in Münster,
                        Barcelona and Copenhagen.
                      </p>
                      <Link to="/locations" className="noDec">
                        <span className="card-discover">
                          > Discover our locations
                        </span>
                      </Link>
                    </div>
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
          <section className="container whatWeOffer mt-5">
            <h1 className="section-title">The TechLabs Journey</h1>
            <div className="section-divider" />
            <div className="row">
              <div className="col">
                <p className="mt-2 text-justify whatWeOffer--text">
                  Get up to speed learning tech skills in one semester by means
                  of our award-winning concept that combines Online Learning,
                  Project Work and TechLabs Community Meetings. Independent of
                  the background and prior knowledge - anyone can participate
                  and learn tech-skills for free. Become a Digital Shaper. We
                  help you to complete your own tech project and qualify for
                  tech internships.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 text-md-right text-left  w-50 w-md-100">
                <img src={quote} alt="qoute" className="w-25 my-3" />
              </div>
              <div className="col-md-10">
                <p className="whatWeOffer--quote text-justify w-100">
                  As a nonprofit, our mission is to enable as many people as
                  possible to acquire state-of-the-art tech skills to solve
                  today’s problems in a digital and entrepreneurial way
                </p>
                <div className="row mt-4">
                  <div className="col-md-3 text-center text-md-left">
                    <img src={nils} alt="nils" />
                  </div>
                  <div className="col-md-9">
                    <p className="mt-4 whatWeOffer--nils text-center text-md-left">
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
                <img src={benefits} alt="" className="w-100" />
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
              </div>
            </div>
          </section>

          <section className="container-fluid mt-5 background h-100">
            <div className="container mt-5">
              <h1 className="section-title">Learn More</h1>
              <div className="section-divider" />
              <div className="row h-100">
                <div className="col-md-6 mt-3">
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
                <div className="col-md-6 mt-3">
                  <div className="card">
                    <h2 className="mt-3 color-red">Program →</h2>
                    <p className="color-gl">
                      Check out our Program Check out our Program Check out our
                      Program Check out our Program Check out our Program
                    </p>
                    <Link to="/program">
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
