import React, { Component } from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import COMMUNITY from "../assets/photos/code-img.jpg"
import { Link } from "gatsby"
import MAP from "../assets/map.png"
import PictureOne from "../assets/fyo1.png"
import PictureTwo from "../assets/pic2.png"
import PictureThree from "../assets/fyo3.png"

class foundYourOwn extends Component {
  render() {
    return (
      <>
        <NavBar />
        <section className="py-5 padding-top-15">
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-auto xs-margin-right">
                <h1 className="display-5 foundYourOwn--heading">
                  Bring TechLabs to <br />
                  <span className="foundYourOwn--highlight">your own city</span>
                </h1>
                <p className="mb-2 margin-top-15 margin-bottom-2 foundYourOwn--subtitle">
                  Become a Co-Founder of TechLabs
                </p>
                <ul className="foundYourOwn--list mb-4">
                  <li>You are passionate about tech?</li>
                  <li>
                    You want to actively support others in learning new tech
                    skills?
                  </li>
                  <li>
                    Do you strive to actively support others preparing for the
                    challenges of tomorrow?
                  </li>
                </ul>
                <p className="foundYourOwn--cta">
                  Lets make a difference together
                </p>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid mt-4 mt-md-0 center-padding img-shadow"
                  src={MAP}
                  alt="commmunity"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <h2>
                Are you
                <span className="foundYourOwn--cta">
                  passionated about Tech?
                </span>
              </h2>
            </div>
            <div className="row mt-3">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img src={PictureOne} class="card-img" alt="..." />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="foundYourOwn--card-text ml-3">
                        We at TechLabs dream of a world with no digital
                        illiterates. A world full of
                        <strong>tech-savvy individuals</strong> who approach the
                        challenges of our time with a
                        <strong>digital and entrepreneurial mindset.</strong> In
                        order to achieve this we aim to provide as many
                        individuals as possible with access to tech education
                        which necessarilly requires a global approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <h2>
                Do you want to become part of an
                <span className="foundYourOwn--cta">
                  {" "}
                  exceptional community?
                </span>
              </h2>
            </div>
            <div className="row mt-3">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="foundYourOwn--card-text mr-3">
                        We like to think of TechLabs as global community of tech
                        enthusiasts who approach the problems of our time with a
                        digital mindset. As a TechLabs Co-founder it is your
                        mission to establish TechLabs in your local community
                        from the ground up. Exemplary steps include the
                        expansion of your network, foundation of basic
                        frameworks, and the organization of workshops.
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
              <h2>
                Do you strive to actively support others preparing for the{" "}
                <span className="foundYourOwn--cta">
                  challenges of tomorrow?
                </span>
              </h2>
            </div>
            <div className="row mt-3">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img src={PictureThree} class="card-img" alt="..." />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <p class="foundYourOwn--card-text ml-3">
                        Think of TechLabs as a huge concept consisting of a
                        variety of building blocks. The core concept - online
                        courses, offline community, project phase - is available
                        at all locations. Nevertheless, we put huge emphasis on
                        the individual character of every location. We want to
                        support you in creating your very own vision of TechLabs
                        by compiling the different building blocks according to
                        your preferences. Your location is your project!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}

export default foundYourOwn
