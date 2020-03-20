import React from "react"
import "../styles/_main.scss"
import logo from "../assets/tl-logo.svg"
import MS from "../assets/loc-ms.svg"
import CPH from "../assets/loc-cph.svg"
import BCN from "../assets/loc-bcn.svg"
import MED from "../assets/loc-med.svg"
import BER from "../assets/loc-ber.png"
import CUR from "../assets/loc-cu.svg"
import AAC from "../assets/loc-aac.png"
import DOR from "../assets/loc-do.svg"
import MobileNav from "./MobileNav"
import Headroom from "react-headroom"
import Head from "./Head"
import { Link } from "gatsby"
import Slack from "../assets/slack.png"
import ds from "../assets/ds.png"
import ai from "../assets/ai.png"
import web from "../assets/web.png"
import "jquery"

class Navbar extends React.Component {
  state = {
    isOpen: false,
  }
  render() {
    const { isOpen } = this.state
    return (
      <>
        <Head />
        <Headroom disableInlineStyles={true}>
          <nav className="navbar navbar-expand-lg navbar-light navbar-add">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="tl-logo" alt="tl-logo" />
            </Link>
            <button
              className="navbar-toggler"
              onClick={() => this.setState({ isOpen: !isOpen })}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navigations-08">
              <ul className="navbar-nav ml-auto d-none d-lg-flex">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/locations"
                    data-toggle="dropdown"
                    activeClassName="navLink--active"
                  >
                    Locations
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item"
                      to="/location/Muenster"
                      activeClassName="navLink--active"
                    >
                      <img src={MS} className="nav-loc-icon" alt="loc-ms" />
                      Muenster
                    </Link>
                    <Link className="dropdown-item" to="/location/Copenhagen">
                      <img src={CPH} className="nav-loc-icon" alt="loc-cph" />
                      Copenhagen
                    </Link>
                    <Link className="dropdown-item" to="/location/Barcelona">
                      <img src={BCN} className="nav-loc-icon" alt="loc-bcn" />
                      Barcelona
                    </Link>
                    <Link className="dropdown-item" to="/location/Medellín">
                      <img
                        src={MED}
                        className="nav-loc-icon h-75"
                        alt="loc-bcn"
                      />
                      Medellín
                    </Link>
                    <Link className="dropdown-item" to="/location/Berlin">
                      <img
                        src={BER}
                        className="nav-loc-icon p-2"
                        alt="loc-bcn"
                      />
                      Berlin
                    </Link>
                    <Link className="dropdown-item " to="/location/Curitiba">
                      <img
                        src={CUR}
                        className="nav-loc-icon p-2"
                        alt="loc-bcn"
                      />
                      Curitiba
                    </Link>
                    <Link className="dropdown-item" to="/location/Aachen">
                      <img
                        src={AAC}
                        className="nav-loc-icon p-2 mr-3"
                        alt="loc-bcn"
                      />
                      Aachen
                    </Link>
                    <Link className="dropdown-item" to="/location/Dortmund">
                      <img
                        src={DOR}
                        className="nav-loc-icon p-2 mr-1"
                        alt="loc-dor"
                      />
                      Dortmund
                    </Link>
                    <div className="dropdown-divider" />
                    <Link
                      className="dropdown-item dropdown-item-corr"
                      to="/foundYourOwn"
                      activeClassName="navLink--active"
                    >
                      Become a Co-Founder
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/program"
                    className="nav-link"
                    data-toggle="dropdown"
                    activeClassName="navLink--active"
                  >
                    Program
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/program/local"
                      activeClassName="navLink--active"
                    >
                      Digital Shaper Program
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/program/remote"
                      activeClassName="navLink--active"
                    >
                      codeathome Bootcamp
                    </Link>
                    <div className="dropdown-divider" />
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/dataScience"
                      activeClassName="navLink--active"
                    >
                      <img src={ds} alt="Data Science" className="mr-3" />
                      Data Science
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/web"
                      activeClassName="navLink--active"
                    >
                      <img src={web} alt="web development" className="mr-3" />
                      Web Development
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/ai"
                      activeClassName="navLink--active"
                    >
                      <img src={ai} alt="ai" className="mr-3" />
                      Artificial Intelligence
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/ux"
                      activeClassName="navLink--active"
                    >
                      <img src={web} alt="UX Design" className="mr-3" />
                      User Experience Design
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    activeClassName="navLink--active"
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog"
                    activeClassName="navLink--active"
                  >
                    Blog
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-button"
                    to="/apply"
                    activeClassName="navLink--active"
                  >
                    Apply now
                  </Link>
                </li>

                <li className="nav-item">
                  <div className="btn-slack d-flex align-items-center justify-content-center">
                    <a
                      href="https://ms-techlabs.slack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Slack} alt="" className="slack-icon" />
                    </a>
                  </div>
                </li>
              </ul>
              {/* mobile view */}
            </div>
          </nav>
          {isOpen && <MobileNav />}
        </Headroom>
      </>
    )
  }
}

export default Navbar
