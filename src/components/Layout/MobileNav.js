import React, { Component } from "react"

// plugins & external
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FormattedMessage, Link } from "gatsby-plugin-intl"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

// assets
import Slack from "../../assets/slack.png"
import ds from "../../assets/ds.png"
import ai from "../../assets/ai.png"
import web from "../../assets/web.png"
import ux from "../../assets/UX.svg"

class MobileNav extends Component {
  state = {
    locationOpen: false,
    programOpen: false,
  }
  render() {
    let page = this.props.gaLabel;
    const { programOpen } = this.state
    return (
      <>
        <div className="mobileNav  d-lg-none d-xl-none">
          <ul className="navbar-nav ml-auto d-sm-block d-md-block">
            <Link 
            onClick={e => {
              trackCustomEvent({
                category: "Button",
                action: "Click",
                label: `${this.page}_navbar_locations`,
              })
            }}
            to="/locations" 
            activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">
                  <FormattedMessage id="layout.locations"/>
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
                  <FormattedMessage id="layout.program"/>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="mr-3 mt-1 ml-4"
                  />
                </h3>
              </div>
              {programOpen && (
                <ul className="mobileNav--subMenu">
                  <Link
                    onClick={e => {
                      trackCustomEvent({
                        category: "Button",
                        action: "Click",
                        label: `${this.page}_navbar_program`,
                      })
                    }}
                    to="/program"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li><FormattedMessage id="layout.program"/></li>
                  </Link>
                  <Link
                    to="/program/local"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4"><FormattedMessage id="layout.dsp"/></li>
                  </Link>
                  <Link
                    to="/program/remote"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4"><FormattedMessage id="layout.codeathome"/></li>
                  </Link>
                  <hr />
                  <Link
                    to="/dataScience"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img src={ds} alt="data science" className="mr-3" />
                      <FormattedMessage id="layout.ds"/>
                    </li>
                  </Link>
                  <Link
                    to="/web"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img src={web} alt="web development" className="mr-3" />
                      <FormattedMessage id="layout.webdev"/>
                    </li>
                  </Link>
                  <Link
                    to="/ai"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img src={ai} alt="ai" className="mr-3" />
                      <FormattedMessage id="layout.ai"/>
                    </li>
                  </Link>
                  <Link
                    to="/ux"
                    className="color-gl"
                    activeClassName="navLink--active"
                  >
                    <li className="my-4">
                      <img src={ux} alt="ux design" className="mr-3" />
                      <FormattedMessage id="layout.ux"/>
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <Link 
            onClick={e => {
              trackCustomEvent({
                category: "Button",
                action: "Click",
                label: `${this.page}_navbar_about`,
              })
            }}
            to="/about" 
            activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">
                  <FormattedMessage id="navbar.about"/>
                </h3>
              </li>
            </Link>

            <Link to="/blog" activeClassName="navLink--active">
              <li className="nav-item">
                <h3 className="nav-link mobileNav--link">
                  <FormattedMessage id="navbar.blog"/>
                </h3>
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
                      <h4 className="btn-slack_mobil-h4">
                        <FormattedMessage id="navbar.slack"/>
                      </h4>
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
