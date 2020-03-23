import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import MS from "../assets/loc-ms.svg"
import CPH from "../assets/loc-cph.svg"
import BCN from "../assets/loc-bcn.svg"
import MED from "../assets/loc-med.svg"
import BER from "../assets/loc-ber.png"
import CUR from "../assets/loc-cu.svg"
import AAC from "../assets/loc-aac.png"
import DOR from "../assets/loc-do.svg"
import { Link } from "gatsby"
import Slack from "../assets/slack.png"
import ds from "../assets/ds.png"
import ai from "../assets/ai.png"
import web from "../assets/web.png"

class MobileNav extends Component {
  state = {
    locationOpen: false,
    programOpen: false,
  }
  render() {
    const { locationOpen, programOpen } = this.state
    return (
      <>
        <div className="mobileNav  d-lg-none d-xl-none">
          <ul className="navbar-nav ml-auto d-sm-block d-md-block mo">
            <li className="nav-item">
              <h3
                className="nav-link mobileNav--link text-center"
                onClick={() => {
                  this.setState({
                    locationOpen: !locationOpen,
                    programOpen: false,
                  })
                }}
              >
                Locations{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="mr-3 mt-1 ml-4"
                />
              </h3>
              {locationOpen && (
                <ul className="mobileNav--subMenu">
                  <Link
                    to="/locations"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li>Locations</li>
                  </Link>
                  <hr />
                  <Link
                    to="/location/Muenster"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img src={MS} alt="" className="mobileNav--icon" />
                      </span>
                      Münster
                    </li>
                  </Link>

                  <Link
                    to="/location/Copenhagen"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img src={CPH} alt="" className="mobileNav--icon" />
                      </span>
                      Copenhagen
                    </li>
                  </Link>
                  <Link
                    to="/location/Barcelona"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img
                          src={BCN}
                          alt="logo Barcelona"
                          className="mobileNav--icon"
                        />
                      </span>
                      Barcelona
                    </li>
                  </Link>
                  <Link
                    to="/location/Medellín"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img src={MED} alt="" className="mobileNav--icon" />
                      </span>
                      Medellín
                    </li>
                  </Link>
                  <Link
                    to="/location/Berlin"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img src={BER} alt="" className="mobileNav--icon p-3" />
                      </span>
                      Berlin
                    </li>
                  </Link>
                  <Link
                    to="/location/Curitiba"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img src={CUR} alt="" className="mobileNav--icon p-3" />
                      </span>
                      Curitiba
                    </li>
                  </Link>
                  <Link
                    to="/location/Aachen"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img src={AAC} alt="" className="mobileNav--icon p-3" />
                      </span>
                      Aachen
                    </li>
                  </Link>
                  <Link
                    to="/location/Dortmund"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-2">
                      <span>
                        <img src={DOR} alt="" className="mobileNav--icon p-3" />
                      </span>
                      Dortmund
                    </li>
                  </Link>
                  <hr />
                  <Link
                    to="/foundYourOwn"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="mt-4">Become a Co-Founder</li>
                  </Link>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <h3
                className="nav-link mobileNav--link text-center"
                onClick={() => {
                  this.setState({
                    programOpen: !programOpen,
                    locationOpen: false,
                  })
                }}
              >
                Program
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="mr-3 mt-1 ml-4"
                />
              </h3>
              {programOpen && (
                <ul className="mobileNav--subMenu">
                  <Link
                    to="/program"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li>Program</li>
                  </Link>
                  <Link
                    to="/program/local"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">Digital Shaper Program</li>
                  </Link>
                  <Link
                    to="/program/remote"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">codeathome Bootcamp</li>
                  </Link>
                  <hr />
                  <Link
                    to="/dataScience"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img src={ds} alt="data science" className="mr-3" />
                      Data Science
                    </li>
                  </Link>
                  <Link
                    to="/web"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img src={web} alt="web development" className="mr-3" />
                      Web Development
                    </li>
                  </Link>
                  <Link
                    to="/ai"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img src={ai} alt="ai" className="mr-3" />
                      Artificial Intelligence
                    </li>
                  </Link>
                  <Link
                    to="/ux"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img src={web} alt="ux design" className="mr-3" />
                      User Experience Design
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <Link to="/about" activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">About</h3>
              </li>
            </Link>

            <Link to="/blog" activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">Blog</h3>
              </li>
            </Link>
            {/*<Link to="/apply" activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">Apply Now</h3>
              </li>
            </Link>*/}
            <br />
            <li className="nav-item mt-2">
              <div className="btn-slack_mobil d-flex align-items-center justify-content-center">
                <a
                  href="https://ms-techlabs.slack.com"
                  target="_blank"
                  className="noDec"
                  rel="noopener noreferrer"
                >
                  <div className="row">
                    <div className="col-2">
                      <img src={Slack} alt="" className="slack-icon" />
                    </div>
                    <div className="col-10 text-center">
                      <h4 className="btn-slack_mobil-h4">Join our Slack</h4>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default MobileNav
