import React from "react"
import Logo from "../assets/tl-logo-white.svg"
import PayPal from "../assets/paypal.svg"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"

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
        This website uses cookies to enhance the user experience.{" "}
        <span role="img" aria-label="cookie">
          🍪
        </span>{" "}
        <br />
        <Link
          to="/privacyPolicy"
          style={{ color: "white", textDecoration: "underline" }}
        >
          More Information
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
                    <h5 className="line-height-0 white-font my-2">About us</h5>
                  </Link>
                  <Link className="foot-a" to="/locations">
                    Locations
                  </Link>
                  <ul className="footer-tl--subMenu">
                    <Link to="/location/Muenster" className="noDec">
                      <li className="footer-tl--subMenu-link">Muenster</li>
                    </Link>
                    <Link to="/location/Copenhagen" className="noDec">
                      <li className="footer-tl--subMenu-link">Copenhagen</li>
                    </Link>
                    <Link to="/location/Barcelona" className="noDec">
                      <li className="footer-tl--subMenu-link">Barcelona</li>
                    </Link>
                    <Link to="/location/Medellín" className="noDec">
                      <li className="footer-tl--subMenu-link">Medellín</li>
                    </Link>
                    <Link to="/location/Berlin" className="noDec">
                      <li className="footer-tl--subMenu-link">Berlin</li>
                    </Link>
                    <Link to="/location/Curitiba" className="noDec">
                      <li className="footer-tl--subMenu-link">Curitiba</li>
                    </Link>
                    <Link to="/location/Aachen" className="noDec">
                      <li className="footer-tl--subMenu-link">Aachen</li>
                    </Link>
                    <Link to="/location/Dortmund" className="noDec">
                      <li className="footer-tl--subMenu-link">Dortmund</li>
                    </Link>
                  </ul>
                  <Link className="foot-a" to="/faq">
                    FAQ
                  </Link>
                  <br />
                </div>
                <div className="col-lg-4">
                  <Link to="/program" className="noDec">
                    <h5 className="line-height-0 white-font my-2">Program</h5>
                  </Link>
                  <br />
                  <Link to="/program/local" className="noDec">
                    Program
                  </Link>
                  <br />
                  <Link to="/program/remote" className="noDec">
                    codeathome Bootcamp
                  </Link>
                  <br />
                  <br />
                  <h5 className="line-height-0 white-font my-2">Tracks</h5>
                  <Link className="foot-a" to="/dataScience">
                    Data Science
                  </Link>
                  <br />
                  <Link className="foot-a" to="/web">
                    Web Development
                  </Link>
                  <br />
                  <Link className="foot-a" to="/ai">
                    Artificial Intelligence
                  </Link>
                  <br />
                  <Link className="foot-a" to="/ux">
                    User Experience Design
                  </Link>
                  <br />
                </div>
                <div className="col-lg-4">
                  <h5 className="line-height-0 white-font my-2">Terms</h5>
                  <Link className="foot-a" to="/privacyPolicy">
                    Privacy Policy
                  </Link>
                  <br />
                  <Link className="foot-a" to="/imprint">
                    Imprint
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
