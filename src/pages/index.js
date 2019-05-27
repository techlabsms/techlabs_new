import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "../components/Navbar"
import "bootstrap/dist/js/bootstrap.js"
import Footer from "../components/Footer"
import MCK from "../assets/partner-mck.png"
import ACN from "../assets/partner-acn.png"
import WF from "../assets/partner-wf.png"
import EY from "../assets/partner-ey.png"
import SOPRA from "../assets/partner-sopra.png"
import GIC from "../assets/gic.svg"
import COMMUNITY from "../assets/community.png"
import sittingagent from "../assets/sitting-agent.svg"

const index = () => {
  return (
    <div className="container-fluid">
      <Navbar />

      <section className="promo">
        <div className="container center">
          <p className="no-margin-block">
            🔥 You can currently apply for a spot in the next starting batch in{" "}
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
                We are a community of tech-savvy individuals who approach the
                problems of our time with a digital mindset. Through{" "}
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
                  <img className="img-fluid partner-logo" src={ACN} alt="acn" />
                </div>
                <div className="col-6 col-sm-3">
                  <img className="img-fluid partner-logo" src={WF} alt="wf" />
                </div>
                <div className="col-6 col-sm-3">
                  <img className="img-fluid partner-logo" src={EY} alt="ey" />
                </div>
                <div className="col-6 col-sm-3">
                  <img className="img-fluid partner-logo" src={SOPRA} alt="sopra" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
        <h1 className="section-title">What we offer</h1>
        <div className="section-divider"></div>
          <div className="row">
            <div className="col-lg-5">
              <div className="d-flex flex-column bg-light h-100 p-4">
                <img src={sittingagent} alt="sittingtechy" className="center-me" />
              </div>
            </div>
            <div className="d-flex col-lg-7 flex-wrap">
              <div className="p-2 col-sm-6">
              <a href="" className="card-a">
                <div className="card">
                  <h1 className="card-title">12</h1> <br />
                  <p className="card-subtitle">weeks coding</p>
                  <p className="text-muted">
                    in 12-16 weeks you get <span className="hashtag">insights into the coding world</span> of
                    TechLabs and get support from experienced mentors.
                  </p>

                  <span className="card-discover">> Discover our program</span>


                </div>
                </a>
              </div>
              <div className="p-2 col-sm-6">
              <a href="" className="card-a">
                <div className="card">
                  <h1 className="card-title">3</h1> <br />
                  <p className="card-subtitle">learning tracks</p>
                  <p className="text-muted">
                  You can currently choose between learning tracks in <br/>
                  <span className="hashtag"> AI, Web Development and Data Science. </span>
                  </p>

                  <span className="card-discover">> Discover our tracks</span>


                </div>
                </a>
              </div>
              <div className="p-2 col-sm-6">
              <a href="" className="card-a">
                <div className="card">
                  <h1 className="card-title">300+</h1> <br />
                  <p className="card-subtitle">community members</p>
                  <p className="text-muted">
                  Our growing community connects over <span className="hashtag">300 motivated people interested in learning tech.</span>
                  </p>

                  <span className="card-discover">> Discover our community</span>


                </div>
                </a>
              </div>
              <div className="p-2 col-sm-6">
              <a href="" className="card-a">
                <div className="card">
                  <h1 className="card-title">3</h1> <br />
                  <p className="card-subtitle">TechLabs locations</p>
                  <p className="text-muted">
                  Currently we have an offline community in <span className="hashtag">Münster, Copenhagen and Barcelona</span> and many more to come.
                  </p>

                  <span className="card-discover">> Discover our locations</span>


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
        <div className="section-divider"></div>

          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg"
                alt=""
              />
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <div className="d-flex mb-2">
                <span className="display-4 mr-4">1</span>
                <div>
                  <h3>Move Data</h3>
                  <p>
                    Using our Piper Assistant application, you can move your
                    data to be stored our decentralized network with simple drag
                    & drop.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-2">
                <span className="display-4 mr-4">2</span>
                <div>
                  <h3>Integrate Software</h3>
                  <p>
                    We want to make sure that you can keep using the software
                    that you use to manage your business.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <span className="display-4 mr-4">3</span>
                <div>
                  <h3>Ongoing Support</h3>
                  <p>
                    As with all innovative technologies, sometimes unpredictable
                    things will happen, and you can always count on our support
                    to solve issues for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container">
          <div className="row mt-5 pr-5">
            <div className="col-md-6 pb-5">
              <h2 className="mb-3">PiperNet Setup</h2>
              <p>
                Let's get you connected! We've designed a simple, efficient
                process for companies migrating to PiperNet. Here's how it
                works.
              </p>
              <ul className="list-inline ml-4 mt-5">
                <li className="d-flex mb-4">
                  <span className="mb-auto mr-3 rounded-circle px-3 py-2 bg-primary">
                    1
                  </span>
                  <div>
                    <h3>Move Data</h3>
                    <p>
                      Using our Piper Assistant application, you can move your
                      data to be stored our decentralized network with simple
                      drag & drop.
                    </p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <span className="mb-auto mr-3 rounded-circle px-3 py-2 bg-primary">
                    2
                  </span>
                  <div>
                    <h3>Integrate Software</h3>
                    <p>
                      We want to make sure that you can keep using the software
                      that you use to manage your business.
                    </p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <span className="mb-auto mr-3 rounded-circle px-3 py-2 bg-primary">
                    3
                  </span>
                  <div>
                    <h3>Ongoing Support</h3>
                    <p>
                      As with all innovative technologies, sometimes
                      unpredictable things will happen, and you can always count
                      on our support to solve issues for you.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 mt-auto pl-5 d-none d-md-block">
              <img
                src="https://bootstrapshuffle.com/placeholder/pictures/bg_9-16.svg"
                alt=""
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">PiperNet Setup</h2>
          <p className="lead mb-5">
            We've designed a simple, efficient process for companies migrating
            to PiperNet. Here's how it works.
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
                  Using our Piper Assistant application, you can move your data
                  to be stored our decentralized network with simple drag &
                  drop.
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
                  We want to make sure that you can keep using the software that
                  you use to manage your business.
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
                  As with all innovative technologies, sometimes unpredictable
                  things will happen, and you can always count on our support to
                  solve issues for you.
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
                  Stop watching boring YouTube videos, and check out Dinesh's
                  extremely interesting series about the features of PiperNet.
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
                  Let Gilfoyle take you on a journey into the futuristic world
                  of computing and data security in the decentralized age.
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
      <Footer />
    </div>
  )
}

export default index
