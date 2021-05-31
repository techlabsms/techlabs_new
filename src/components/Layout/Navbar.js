import React from "react"
import Headroom from "react-headroom"
import { Helmet } from "react-helmet"
import "jquery"

// plugins
import { FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import MobileNav from "./MobileNav"

// assets
import logo from "../../assets/tl-logo.png"
import ds from "../../assets/ds.png"
import ai from "../../assets/ai.png"
import web from "../../assets/web.png"
import ux from "../../assets/ux-icon.png"
import "jquery"
import favicon16 from "../../assets/tl-favicon16.png"
import favicon32 from "../../assets/tl-favicon32.png"
import favicon64 from "../../assets/tl-favicon64.png"

// styles
import "../../styles/_main.scss"

class Navbar extends React.Component {
  state = {
    isOpen: false,
  }
  render() {
    const { isOpen } = this.state
    return (
      <>
        <Helmet>
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="64x64"
            href={favicon64}
          />

          <script src="https://embed.small.chat/TG9SCN33JGHR17BPSR.js" async />
        </Helmet>
        <Headroom
          style={{
            webkitTransition: "all .2s ease-in-out",
            mozTransition: "all .2s ease-in-out",
            oTransition: "all .2s ease-in-out",
            transition: "all .2s ease-in-out",
          }}
        >
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
                    <FormattedMessage id="layout.locations" />
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item dropdown-item-corr"
                      to="/locations"
                      activeClassName="navLink--active"
                    >
                      <FormattedMessage id="navbar.locations.all" />
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-corr"
                      to="/foundYourOwn"
                      activeClassName="navLink--active"
                    >
                      <FormattedMessage id="navbar.locations.becomeFounder" />
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
                    <FormattedMessage id="layout.program" />
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/program/local"
                      activeClassName="navLink--active"
                    >
                      <FormattedMessage id="layout.dsp" />
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/program/remote"
                      activeClassName="navLink--active"
                    >
                      <FormattedMessage id="layout.codeathome" />
                    </Link>
                    <div className="dropdown-divider" />
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/dataScience"
                      activeClassName="navLink--active"
                    >
                      <img
                        src={ds}
                        alt="Data Science"
                        className="mr-3 track-logo"
                      />
                      <FormattedMessage id="layout.ds" />
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/web"
                      activeClassName="navLink--active"
                    >
                      <img
                        src={web}
                        alt="web development"
                        className="mr-3 track-logo"
                      />
                      <FormattedMessage id="layout.webdev" />
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/ai"
                      activeClassName="navLink--active"
                    >
                      <img src={ai} alt="ai" className="mr-3 track-logo" />
                      <FormattedMessage id="layout.ai" />
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/ux"
                      activeClassName="navLink--active"
                    >
                      <img
                        src={ux}
                        alt="UX Design"
                        className="mr-3 track-logo"
                      />
                      <FormattedMessage id="layout.ux" />
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    activeClassName="navLink--active"
                  >
                    <FormattedMessage id="navbar.about" />
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.notion.so/techlabs/Volunteer-at-TechLabs-9004464ef2a0420cb587aab9ba03037d"
                  >
                    <FormattedMessage id="layout.openPositions" />
                  </a>
                </li>

                <li className="nav-item ml-3">
                  <Link
                    className="nav-button"
                    to="/apply"
                    activeClassName="navLink--active"
                  >
                    <FormattedMessage id="callToAction.button" />
                  </Link>
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
