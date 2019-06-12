import React from "react"
import "../styles/_main.scss"
import logo from "../assets/tl-logo.svg"
import MS from "../assets/loc-ms.svg"
import CPH from "../assets/loc-cph.svg"
import BCN from "../assets/loc-bcn.svg"
import SLACK from "../assets/slack-icon.svg"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import 'jquery'

const Navbar = () => {
  return (
    <>
      <Headroom>
        <nav className="navbar navbar-expand-lg navbar-light navbar-add">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="tl-logo" alt="tl-logo" />
          </Link>
          <a href="/career" className="hire-button">
            <span role="img" aria-label="waving hand">👋</span> we're hiring
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigations-08"
            aria-controls="navigations-08"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
                  <Link
                    className="dropdown-item"
                    to="/muenster"
                  >
                    <img src={MS} className="nav-loc-icon" alt="loc-ms" />
                    Muenster
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/barcelona"
                  >
                    <img src={BCN} className="nav-loc-icon" alt="loc-bcn" />
                    Barcelona
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/copenhagen"
                  >
                    <img src={CPH} className="nav-loc-icon" alt="loc-cph" />
                    Copenhagen
                  </Link>
                  <div class="dropdown-divider" />
                  <Link className="dropdown-item dropdown-item-corr" to="/locations">
                    Discover our Locations
                  </Link>
                  <Link className="dropdown-item dropdown-item-corr" to="/">
                    branch it <span role="img" aria-label="fire">🔥</span>
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
                  <Link className="dropdown-item-corr dropdown-item" to="/journey">
                    Your Journey
                  </Link>
                  <Link className="dropdown-item-corr dropdown-item" to="/">
                    Web Development
                  </Link>
                  <Link className="dropdown-item-corr dropdown-item" to="/">
                    Data Science
                  </Link>
                  <Link className="dropdown-item-corr dropdown-item" to="/">
                    Artificial Intelligence
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <button className="btn-slack">
                    <img src={SLACK} className="slack-icon" alt="slack" />
                  </button>
                </Link>
              </li>
            </ul>

            {/* mobile view */}
            <ul className="navbar-nav ml-auto d-sm-block d-md-block d-lg-none d-xl-none">
              <li className="nav-item">
                <Link className="nav-link active" to="/locations">
                  Locations
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Program
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Headroom>
    </>
  )
}

export default Navbar
