import React from "react"
import Headroom from "react-headroom"
import "jquery"

// plugins
import { FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import MobileNav from "./MobileNav"
import Head from "./Head"

// assets
import logo from "../../assets/tl-logo.svg"
import ds from "../../assets/ds.png"
import ai from "../../assets/ai.png"
import web from "../../assets/web.png"
import ux from "../../assets/UX.svg"
import "jquery"

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
                    <FormattedMessage id="layout.locations"/>
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item dropdown-item-corr"
                      to="/locations"
                      activeClassName="navLink--active"
                    >
                      <FormattedMessage id="navbar.locations.all"/>
                    </Link>
                    <Link
                      className="dropdown-item dropdown-item-corr"
                      to="/foundYourOwn"
                      activeClassName="navLink--active"
                    >
                      <FormattedMessage id="navbar.locations.becomeFounder"/>
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
                    <FormattedMessage id="layout.program"/>
                  </Link>
                  <div className="dropdown-menu">
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/program/local"
                      activeClassName="navLink--active"
                    >
                      <FormattedMessage id="layout.dsp"/>
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/program/remote"
                      activeClassName="navLink--active"
                    >
                      <FormattedMessage id="layout.codeathome"/>
                    </Link>
                    <div className="dropdown-divider" />
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/dataScience"
                      activeClassName="navLink--active"
                    >
                      <img src={ds} alt="Data Science" className="mr-3" />
                      <FormattedMessage id="layout.ds"/>
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/web"
                      activeClassName="navLink--active"
                    >
                      <img src={web} alt="web development" className="mr-3" />
                      <FormattedMessage id="layout.webdev"/>
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/ai"
                      activeClassName="navLink--active"
                    >
                      <img src={ai} alt="ai" className="mr-3" />
                      <FormattedMessage id="layout.ai"/>
                    </Link>
                    <Link
                      className="dropdown-item-corr dropdown-item"
                      to="/ux"
                      activeClassName="navLink--active"
                    >
                      <img src={ux} alt="UX Design" className="mr-3" />
                      <FormattedMessage id="layout.ux"/>
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    activeClassName="navLink--active"
                  >
                    <FormattedMessage id="navbar.about"/>
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.notion.so/techlabs/Volunteer-at-TechLabs-9004464ef2a0420cb587aab9ba03037d"
                  >
                    <FormattedMessage id="layout.openPositions"/>
                  </a>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog"
                    activeClassName="navLink--active"
                  >
                    <FormattedMessage id="navbar.blog"/>
                  </Link>
                </li>

                <li className="nav-item ml-3">
                  <Link
                    className="nav-button"
                    to="/apply"
                    activeClassName="navLink--active"
                  >
                    <FormattedMessage id="callToAction.button"/>
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
