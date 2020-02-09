import React, { Component } from "react"
import MAP from "../assets/world.png"
import PictureOne from "../assets/fyo1.png"
import PictureTwo from "../assets/pic2.png"
import PictureThree from "../assets/fyo3.png"
import ArrowsLeft from "../assets/arrows.png"
import ArrowsRight from "../assets/arrowsRight.png"
import Layout from "../components/Layout"

class foundYourOwn extends Component {
  render() {
    return (
      <Layout>
        <section className="foundYourOwn-hero py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 my-auto xs-margin-right">
                <h1 className="display-5 foundYourOwn--heading">
                  Bring TechLabs to <br />
                  <span className="foundYourOwn--highlight">your own city</span>
                </h1>
                <p className="mb-4 margin-top-15 margin-bottom-2 foundYourOwn--subtitle">
                  Become a Co-Founder of TechLabs
                </p>
                <ul className="foundYourOwn--list mb-4">
                  <li>
                    You are looking for a new challenge and are passionate about
                    tech?
                  </li>
                  <li>
                    You always wanted to found an initiative yourself and turn
                    own ideas into action?
                  </li>
                  <li>
                    You want to help others on a voluntary basis prepare for the
                    challenges of tomorrow?
                  </li>
                </ul>
                <h3 className="foundYourOwn--cta-first my-5">
                  Perfect, let’s make a difference! Together.
                </h3>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid mt-4 mt-md-0 center-padding"
                  src={MAP}
                  alt="commmunity"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="foundYourOwn--cards">
          <div className="container">
            <div className="row">
              <h2 className="ml-3">
                You are looking for a new challenge and are{" "}
                <span className="foundYourOwn--cta">
                  passionate about Tech?
                </span>
              </h2>
            </div>
            <div className="row mt-3">
              <div class="card mb-3">
                <div class="row">
                  <div class="col-md-6">
                    <img src={PictureOne} class="card-img" alt="..." />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="foundYourOwn--card-text ml-3 mr-3 mt-5">
                        We at TechLabs dream of a world with no digital
                        illiterates. A world full of tech-savvy individuals who
                        approach the challenges of our time with a digital and
                        entrepreneurial mindset. In order to achieve this, we
                        aim to turn as many young people as possible into
                        Digital Shapers, which necessarily requires a global
                        approach. Let’s join forces to shape the future of tech
                        education!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <h2 className="ml-3">
                You want to found an initiative yourself and turn own ideas
                <span className="foundYourOwn--cta"> into action?</span>
              </h2>
            </div>
            <div className="row mt-3">
              <div class="card mb-3">
                <div class="row">
                  <div class="col-md-6 ">
                    <div class="card-body ">
                      <p class="foundYourOwn--card-text mr-3 ml-3 mt-5">
                        Found a new TechLabs location in your city and be part
                        of our extensive network to leverage your engagement,
                        expertise, and ideas. Create a local tech community,
                        organize workshops and coding sessions, establish
                        cooperations with local supporters – your possibilities
                        are endless. We not only support you in creating your
                        own location but also offer a unique platform for you
                        and your team to make an impact even beyond the local
                        level!
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <img src={PictureTwo} class="card-img" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <h2 className="ml-3">
                You want to support others prepare for the challenges
                <span className="foundYourOwn--cta"> of tomorrow?</span>
              </h2>
            </div>
            <div className="row mt-3">
              <div class="card mb-3">
                <div class="row">
                  <div class="col-md-6">
                    <img src={PictureThree} class="card-img" alt="..." />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="foundYourOwn--card-text ml-3 mr-3 mt-3">
                        As a TechLabs Co-Founder, your mission is to build a new
                        location from scratch. To create the best possible
                        learning environment, our approach combines online
                        courses, offline communities, and a project phase. In
                        addition to these core elements, we put huge emphasis on
                        the individual character of each location. Think of
                        TechLabs as a proven concept consisting of a variety of
                        building blocks to choose from. By compiling these
                        different blocks according to your preferences, you can
                        create your very own version of TechLabs. Your location
                        is your project!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="foundYourOwn--quote">
          <div className="container">
            <div className="row my-5">
              <div className="col-3">
                <img src={ArrowsLeft} alt="arrow" className="float-right" />
              </div>
              <div className="col-6">
                <h1 className="foundYourOwn--last">
                  You can’t wait to open your{" "}
                  <span className="foundYourOwn--cta">
                    own TechLabs location?
                  </span>
                </h1>
              </div>
              <div className="col-3">
                <img
                  src={ArrowsRight}
                  alt="arrow"
                  className="float-left rightArrow"
                />
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row text-center mt-5">
              <div className="col">
                <a
                  className="btn btn-primary d-inline"
                  href="mailto:bizdev@techlabs.org?subject=Found your own location"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default foundYourOwn
