import React from "react"
import CookieConsent from "react-cookie-consent"
import CurrentYear from "../smallComponents/CurrentYear"

// plugins
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import Language from "../language"

// assets
import Logo from "../../assets/tl-logo-white.png"
import PayPal from "../../assets/paypal.svg"

const Footer = props => {
  return (
    <>
      <CookieConsent
        style={{ backgroundColor: "#fa1e5a", color: "white" }}
        location="top"
        buttonStyle={{
          color: "#fa1e5a",
          borderRadius: "6px",
          backgroundColor: "white",
          padding: ".8rem 1.5rem",
        }}
        declineButtonStyle={{
          color: "white",
          borderRadius: "6px",
          border: "2px solid white",
          backgroundColor: "#fa1e5a",
          padding: ".8rem 1.5rem",
        }}
        expires={90}
        enableDeclineButton={true}
        buttonText="I understand"
        declineButtonText="I decline"
        setDeclineCookie={true}
        cookieName="gatsby-gdpr-google-tagmanager"
      >
        <FormattedMessage id="footer.cookies" />{" "}
        <span role="img" aria-label="cookie">
          🍪
        </span>{" "}
        <br />
        <a
          className="foot-a"
          href="https://www.notion.so/techlabs/Privacy-Policy-f33607f9dd7b44a1b0d6e22661ebd28e"
          target="_blank"
        >
          <FormattedMessage id="footer.cookies.more" />
        </a>
      </CookieConsent>
      <div className="footer-tl">
        <div className="container-ft">
          <div className="row cred">
            <div className="col-lg-4">
              <img src={Logo} alt="TechLabs e.v." className="logo-footer" />
              <br />
              <p className="white-font my-3">We Build. Digital. Shapers.</p>
              <Language />
              <br />
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4">
                  <Link to="/about" className="noDec">
                    <h5 className="line-height-0 white-font my-2">
                      <FormattedMessage id="footer.about_us" />
                    </h5>
                  </Link>
                  <Link className="foot-a" to="/locations">
                    <FormattedMessage id="layout.locations" />
                  </Link>
                  {/* commented out locations that where stretching the footer height */}
                  {/* <ul className="footer-tl--subMenu">
                    {edges.map(
                      (location, index) =>
                        location.node.node_locale === locale && (
                          <Link
                            to={`/location/${location.node.heading}`}
                            className="noDec"
                            key={index}
                          >
                            <li className="footer-tl--subMenu-link">
                              <FormattedMessage
                                id={
                                  "location." +
                                  location.node.heading.toLowerCase()
                                }
                              />
                            </li>
                          </Link>
                        )
                    )}
                  </ul> */}
                  <br />
                  <Link className="foot-a" to="/faq">
                    <FormattedMessage id="footer.faq" />
                  </Link>
                  <br />
                  <a
                    className="foot-a"
                    href="https://www.notion.so/techlabs/Volunteer-at-TechLabs-9004464ef2a0420cb587aab9ba03037d"
                  >
                    <FormattedMessage id="layout.openPositions" />
                  </a>
                  <br />
                  <Link to="/program" className="noDec">
                    <h5 className="line-height-0 white-font my-2">
                      <FormattedMessage id="layout.program" />
                    </h5>
                  </Link>
                  <Link to="/program/local" className="foot-a">
                    <FormattedMessage id="layout.dsp" />
                  </Link>
                  <br />
                  <Link to="/program/remote" className="foot-a">
                    <FormattedMessage id="layout.codeathome" />
                  </Link>
                </div>
                <div className="col-lg-4">
                  <h5 className="line-height-0 white-font my-2">
                    <FormattedMessage id="footer.tracks" />
                  </h5>
                  <Link className="foot-a" to="/dataScience">
                    <FormattedMessage id="layout.ds" />
                  </Link>
                  <br />
                  <Link className="foot-a" to="/web">
                    <FormattedMessage id="layout.webdev" />
                  </Link>
                  <br />
                  <Link className="foot-a" to="/ai">
                    <FormattedMessage id="layout.ai" />
                  </Link>
                  <br />
                  <Link className="foot-a" to="/ux">
                    <FormattedMessage id="layout.ux" />
                  </Link>
                  <br />
                </div>
                <div className="col-lg-4">
                  <h5 className="line-height-0 white-font my-2">
                    <FormattedMessage id="footer.terms" />
                  </h5>
                  <a
                    className="foot-a"
                    href="https://www.notion.so/techlabs/Privacy-Policy-f33607f9dd7b44a1b0d6e22661ebd28e"
                    target="_blank"
                  >
                    <FormattedMessage id="footer.terms.privacy" />
                  </a>
                  <br />
                  <Link className="foot-a" to="/imprint">
                    <FormattedMessage id="footer.terms.imprint" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-100 border-top my-3" />
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6 text-md-left text-center" />
            <div className="col-lg-4 col-md-6 text-md-right text-center mt-sm-5 mt-md-0">
              <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=payments%40tech-labs.de&currency_code=EUR&source=url">
                <img src={PayPal} alt="" className="mt-3" />
              </a>
            </div>
            <p className="footer-tl--copy">
              &copy; TechLabs e. V. <CurrentYear />{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default injectIntl(Footer)
