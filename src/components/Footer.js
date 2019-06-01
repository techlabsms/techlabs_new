import React from "react"
import Logo from "../assets/tl-logo-white.svg"
import PayPal from "../assets/paypal.svg"

const Footer = () => {
  return (
    <>
      <div className="footer-tl">
        <div className="container-ft">
          <div className="row cred">
            <div className="col-lg-4">
              <img src={Logo} alt="TechLabs e.v." className="logo-footer" />
              <br />
              <p className="white-font my-3">We build. Digital Shaper.</p>
              <button className="px-3 py-1 my-3">
                <span role="img">🇬🇧</span> Englisch
              </button>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4">
                  <h5 className="line-height-0 white-font my-2">About us</h5>
                  <a className="foot-a" href="/data-science">
                    Team
                  </a>
                  <br />
                  <a className="foot-a" href="/web-development">
                    Partner
                  </a>
                  <br />
                  <a className="foot-a" href="/artificial-intelligence">
                    Carrer
                  </a>
                  <br />
                  <a className="foot-a" href="/artificial-intelligence">
                    FAQ
                  </a>
                  <br />
                </div>
                <div className="col-lg-4">
                  <h5 className="line-height-0 white-font my-2">Program</h5>
                  <a className="foot-a" href="https://www.facebook.com/techlabsms">
                    Data Science
                  </a>
                  <br />
                  <a
                    className="foot-a"
                    href="https://www.linkedin.com/company/techlabs-ev/"
                  >
                    Web Development
                  </a>
                  <br />
                  <a className="foot-a" href="https://medium.com/techlabsms/">
                    Artificial Intelligence
                  </a>
                  <br />
                </div>
                <div className="col-lg-4">
                  <h5 className="line-height-0 white-font my-2">Terms</h5>
                  <a className="foot-a" href="/about">
                    Privacy Policy
                  </a>
                  <br />
                  <a className="foot-a" href="/faq">
                    Imprint
                  </a>
                </div>
              </div>
            </div>
            <div className="w-100 border-top my-3" />
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6 text-md-left text-center">
              <nav className="nav d-inline ">
                <div className="my-4">
                  <a
                    className="flex-fill text-sm-center nav-link white-font d-inline"
                    href="#"
                  >
                    Münster
                  </a>
                  <a
                    className="flex-fill text-sm-center nav-link white-font d-inline"
                    href="#"
                  >
                    Barcelona
                  </a>
                  <a
                    className="flex-fill text-sm-center nav-link white-font d-inline"
                    href="#"
                  >
                    Copenhagen
                  </a>
                </div>
              </nav>
            </div>
            <div className="col-lg-4 col-md-6 text-md-right text-center mt-sm-5 mt-md-0">
              <img src={PayPal} alt="" className="mt-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
