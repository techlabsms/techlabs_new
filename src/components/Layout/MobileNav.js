import React, { Component } from "react"

// plugins & external
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

// assets
import ds from "../../assets/ds.png"
import ai from "../../assets/ai.png"
import web from "../../assets/web.png"
import ux from "../../assets/ux-icon.png"

class MobileNav extends Component {
  state = {
    locationOpen: false,
    programOpen: false,
  }
  render() {
    const { programOpen } = this.state
    return (
      <>
        <div className="mobileNav  d-lg-none d-xl-none">
          <ul className="navbar-nav ml-auto d-sm-block d-md-block">
            <Link to="/locations" activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">
                  <FormattedMessage id="layout.locations" />
                </h3>
              </li>
            </Link>

            <li className="nav-item">
              <div
                onClick={() => {
                  this.setState({
                    programOpen: !programOpen,
                    locationOpen: false,
                  })
                }}
                onKeyDown={() => null}
                role="button"
                tabIndex={0}
              >
                <h3 className="nav-link mobileNav--link text-center">
                  <FormattedMessage id="layout.program" />
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="mr-3 mt-1 ml-4"
                  />
                </h3>
              </div>
              {programOpen && (
                <ul className="mobileNav--subMenu">
                  <Link
                    to="/program"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li>
                      <FormattedMessage id="layout.program" />
                    </li>
                  </Link>
                  <Link
                    to="/program/local"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <FormattedMessage id="layout.dsp" />
                    </li>
                  </Link>
                  <Link
                    to="/program/remote"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <FormattedMessage id="layout.codeathome" />
                    </li>
                  </Link>
                  <hr />
                  <Link
                    to="/dataScience"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img
                        src={ds}
                        alt="data science"
                        className="mr-3 track-logo"
                      />
                      <FormattedMessage id="layout.ds" />
                    </li>
                  </Link>
                  <Link
                    to="/web"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img
                        src={web}
                        alt="web development"
                        className="mr-3 track-logo"
                      />
                      <FormattedMessage id="layout.webdev" />
                    </li>
                  </Link>
                  <Link
                    to="/ai"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img src={ai} alt="ai" className="mr-3 track-logo" />
                      <FormattedMessage id="layout.ai" />
                    </li>
                  </Link>
                  <Link
                    to="/ux"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img
                        src={ux}
                        alt="ux design"
                        className="mr-3 track-logo"
                      />
                      <FormattedMessage id="layout.ux" />
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <Link to="/about" activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">
                  <FormattedMessage id="navbar.about" />
                </h3>
              </li>
            </Link>

            <a
              href="https://www.notion.so/techlabs/Volunteer-at-TechLabs-9004464ef2a0420cb587aab9ba03037d"
              activeClassName="navLink--active"
              rel="noopener noreferrer"
              target="_blank"
            >
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">
                  <FormattedMessage id="layout.openPositions" />
                </h3>
              </li>
            </a>
            <Link to="/talks/all" activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">
                  <FormattedMessage id="navbar.talks" />
                </h3>
              </li>
            </Link>
            <Link to="/apply" activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">
                  <FormattedMessage id="callToAction.button"/>
                </h3>
              </li>
            </Link>
          </ul>
        </div>
      </>
    )
  }
}

export default MobileNav
