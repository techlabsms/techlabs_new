import React from "react"
import "../styles/_main.scss"
import logo from "../assets/tl-logo.svg"
import MS from "../assets/loc-ms.svg"
import CPH from "../assets/loc-cph.svg"
import BCN from "../assets/loc-bcn.svg"
import SLACK from "../assets/slack-icon.svg"
import MobileNav from "./MobileNav"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import "jquery"

class Navbar extends React.Component {
  state = {
    isOpen: false,
  }
  render() {
    const { isOpen } = this.state
    return (
      <>
        <Headroom>
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
                    className="nav-link active"
                    to="/locations"
                    data-toggle="dropdown"
                  >
                    Locations
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/location/Muenster">
                      <img src={MS} className="nav-loc-icon" alt="loc-ms" />
                      Muenster
                    </Link>
                    <Link className="dropdown-item" to="/location/Copenhagen">
                      <img src={CPH} className="nav-loc-icon" alt="loc-cph" />
                      Copenhagen
                    </Link>
                    <div class="dropdown-divider" />
                    <Link
                      className="dropdown-item dropdown-item-corr"
                      to="/locations"
                    >
                      Discover our Locations
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-corr"
                      to="/foundYourOwn"
                    >
                      Found your own
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link active"
                    to="/program"
                    data-toggle="dropdown"
                  >
                    Program
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/program"
                    >
                      Program
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/web"
                    >
                      Web Development
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/dataScience"
                    >
                      Data Science
                    </Link>
                    <Link className="dropdown-item-corr dropdown-item" to="/ai">
                      Artificial Intelligence
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn-slack">
                    <a href="https://ms-techlabs.slack.com">
                      <img src={SLACK} className="slack-icon" alt="slack" />
                    </a>
                  </button>
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
