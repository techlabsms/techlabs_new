import React from "react"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"

// plugins
import { FormattedMessage } from "gatsby-plugin-intl"

// assets
import Logo from "../../assets/tl-logo-white.svg"
import PayPal from "../../assets/paypal.svg"

const Footer = props => {
  return (
    <>
      <CookieConsent
        style={{ backgroundColor: "#fb1d5c", color: "white" }}
        location="top"
        buttonStyle={{
          color: "#fb1d5c",
          borderRadius: "6px",
          backgroundColor: "white",
          padding: ".8rem 1.5rem",
        }}
        declineButtonStyle={{
          color: "white",
          borderRadius: "6px",
          border: "2px solid white",
          backgroundColor: "#fb1d5c",
          padding: ".8rem 1.5rem",
        }}
        expires={90}
        enableDeclineButton={true}
        declineButtonText="I decline"
        setDeclineCookie={false}
      >
        <FormattedMessage id="footer.cookies"/>{" "}
        <span role="img" aria-label="cookie">
          🍪
        </span>{" "}
        <br />
        <Link
          to="/privacyPolicy"
          style={{ color: "white", textDecoration: "underline" }}
        >
          <FormattedMessage id="footer.cookies.more"/>
        </Link>
      </CookieConsent>
      <div className="footer-tl">
        <div className="container-ft">
          <div className="row cred">
            <div className="col-lg-4">
              <img src={Logo} alt="TechLabs e.v." className="logo-footer" />
              <br />
              <p className="white-font my-3">We Build. Digital. Shapers.</p>
              <button className="px-3 py-1 my-3 footer--btn">
                <span role="img" aria-label="english">
                  🇬🇧
                </span>{" "}
                English
              </button>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4">
                  <Link to="/about" className="noDec">
                    <h5 className="line-height-0 white-font my-2">
                    <FormattedMessage id="footer.about_us"/>
                    </h5>
                  </Link>
                  <Link className="foot-a" to="/locations">
                    <FormattedMessage id="layout.locations"/>
                  </Link>
                  <ul className="footer-tl--subMenu">
                    <Link to="/location/Muenster" className="noDec">
                      <li className="footer-tl--subMenu-link">
                        <FormattedMessage id="location.muenster"/>
                      </li>
                    </Link>
                    <Link to="/location/Copenhagen" className="noDec">
                      <li className="footer-tl--subMenu-link">
                        <FormattedMessage id="location.copenhagen"/>
                      </li>
                    </Link>
                    <Link to="/location/Barcelona" className="noDec">
                      <li className="footer-tl--subMenu-link">
                        <FormattedMessage id="location.barcelona"/>
                      </li>
                    </Link>
                    <Link to="/location/Medellín" className="noDec">
                      <li className="footer-tl--subMenu-link">
                        <FormattedMessage id="location.medellin"/>
                      </li>
                    </Link>
                    <Link to="/location/Berlin" className="noDec">
                      <li className="footer-tl--subMenu-link">
                        <FormattedMessage id="location.berlin"/>
                      </li>
                    </Link>
                    <Link to="/location/Curitiba" className="noDec">
                      <li className="footer-tl--subMenu-link">
                        <FormattedMessage id="location.curitiba"/>
                      </li>
                    </Link>
                    <Link to="/location/Aachen" className="noDec">
                      <li className="footer-tl--subMenu-link">
                        <FormattedMessage id="location.aachen"/>
                      </li>
                    </Link>
                    <Link to="/location/Dortmund" className="noDec">
                      <li className="footer-tl--subMenu-link">
                        <FormattedMessage id="location.dortmund"/>
                      </li>
                    </Link>
                    <Link to="/location/Munich" className="noDec">
                      <li className="footer-tl--subMenu-link">
                        <FormattedMessage id="location.munich"/>
                      </li>
                    </Link>
                  </ul>
                  <Link className="foot-a" to="/faq">
                    <FormattedMessage id="footer.faq"/>
                  </Link>
                  <br />
                  <a
                    className="foot-a"
                    href="https://www.notion.so/techlabs/Volunteer-at-TechLabs-9004464ef2a0420cb587aab9ba03037d"
                  >
                    <FormattedMessage id="layout.openPositions"/>
                  </a>
                  <br />
                </div>
                <div className="col-lg-4">
                  <Link to="/program" className="noDec">
                    <h5 className="line-height-0 white-font my-2">
                     <FormattedMessage id="layout.program"/>
                    </h5>
                  </Link>
                  <br />
                  <Link to="/program/local" className="noDec">
                    <FormattedMessage id="layout.dsp"/>
                  </Link>
                  <br />
                  <Link to="/program/remote" className="noDec">
                    <FormattedMessage id="layout.codeathome"/>
                  </Link>
                  <br />
                  <br />
                  <h5 className="line-height-0 white-font my-2">
                    <FormattedMessage id="footer.tracks"/>
                  </h5>
                  <Link className="foot-a" to="/dataScience">
                    <FormattedMessage id="layout.ds"/>
                  </Link>
                  <br />
                  <Link className="foot-a" to="/web">
                    <FormattedMessage id="layout.webdev"/>
                  </Link>
                  <br />
                  <Link className="foot-a" to="/ai">
                    <FormattedMessage id="layout.ai"/>
                  </Link>
                  <br />
                  <Link className="foot-a" to="/ux">
                    <FormattedMessage id="layout.ux"/>
                  </Link>
                  <br />
                </div>
                <div className="col-lg-4">
                  <h5 className="line-height-0 white-font my-2">
                    <FormattedMessage id="footer.terms"/>
                  </h5>
                  <Link className="foot-a" to="/privacyPolicy">
                    <FormattedMessage id="footer.terms.privacy"/>
                  </Link>
                  <br />
                  <Link className="foot-a" to="/imprint">
                    <FormattedMessage id="footer.terms.imprint"/>
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
            <p className="footer-tl--copy">&copy; TechLabs e.V. 2020</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
