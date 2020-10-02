import React from "react"
import CookieConsent from "react-cookie-consent"
import { graphql, useStaticQuery } from "gatsby"

// plugins
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

// components
import Language from "../language"

// assets
import Logo from "../../assets/tl-logo-white.svg"
import PayPal from "../../assets/paypal.svg"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLocationPage {
        edges {
          node {
            heading
            node_locale
          }
        }
      }
    }
  `)
  const locale = props.intl.locale
  const page = props.gaLabel
  const { edges } = data.allContentfulLocationPage

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
        <FormattedMessage id="footer.cookies" />{" "}
        <span role="img" aria-label="cookie">
          🍪
        </span>{" "}
        <br />
        <Link
          to="/privacyPolicy"
          style={{ color: "white", textDecoration: "underline" }}
        >
          <FormattedMessage id="footer.cookies.more" />
        </Link>
      </CookieConsent>
      <div className="footer-tl">
        <div className="container-ft">
          <div className="row cred">
            <div className="col-lg-4">
              <img src={Logo} alt="TechLabs e.v." className="logo-footer" />
              <br />
              <p className="white-font my-3">We Build. Digital. Shapers.</p>
              {/* <Language/> */}
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4">
                  <Link 
                  to="/about" 
                  className="noDec">
                    <h5 className="line-height-0 white-font my-2">
                      <FormattedMessage id="footer.about_us" />
                    </h5>
                  </Link>
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_locations'
                    })
                  }} 
                  className="foot-a" 
                  to="/locations">
                    <FormattedMessage id="layout.locations" />
                  </Link>
                  <ul className="footer-tl--subMenu">
                    {edges.map(
                      (location, index) =>
                        location.node.node_locale === locale && (
                          <Link
                            onClick={e => {
                              trackCustomEvent({
                                category: "Button",
                                action: "Click",
                                label: page + '_footer_' + location.node.heading
                              })
                            }} 
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
                  </ul>
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_faq'
                    })
                  }} 
                  className="foot-a" to="/faq">
                    <FormattedMessage id="footer.faq" />
                  </Link>
                  <br />
                  <a
                    onClick={e => {
                      trackCustomEvent({
                        category: "Button",
                        action: "Click",
                        label: page + '_footer_openpositions'
                      })
                    }} 
                    className="foot-a"
                    href="https://www.notion.so/techlabs/Volunteer-at-TechLabs-9004464ef2a0420cb587aab9ba03037d"
                  >
                    <FormattedMessage id="layout.openPositions" />
                  </a>
                  <br />
                </div>
                <div className="col-lg-4">
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_program'
                    })
                  }} 
                  to="/program" className="noDec">
                    <h5 className="line-height-0 white-font my-2">
                      <FormattedMessage id="layout.program" />
                    </h5>
                  </Link>
                  <br />
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_dsp'
                    })
                  }} 
                  to="/program/local" className="noDec">
                    <FormattedMessage id="layout.dsp" />
                  </Link>
                  <br />
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_codeathome'
                    })
                  }} 
                  to="/program/remote" className="noDec">
                    <FormattedMessage id="layout.codeathome" />
                  </Link>
                  <br />
                  <br />
                  <h5 className="line-height-0 white-font my-2">
                    <FormattedMessage id="footer.tracks" />
                  </h5>
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_ds'
                    })
                  }} 
                  className="foot-a" to="/dataScience">
                    <FormattedMessage id="layout.ds" />
                  </Link>
                  <br />
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_wd'
                    })
                  }} 
                  className="foot-a" to="/web">
                    <FormattedMessage id="layout.webdev" />
                  </Link>
                  <br />
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_ai'
                    })
                  }} 
                  className="foot-a" to="/ai">
                    <FormattedMessage id="layout.ai" />
                  </Link>
                  <br />
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_ux'
                    })
                  }} 
                  className="foot-a" to="/ux">
                    <FormattedMessage id="layout.ux" />
                  </Link>
                  <br />
                </div>
                <div className="col-lg-4">
                  <h5 className="line-height-0 white-font my-2">
                    <FormattedMessage id="footer.terms" />
                  </h5>
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_privacy'
                    })
                  }} 
                  className="foot-a" to="/privacyPolicy">
                    <FormattedMessage id="footer.terms.privacy" />
                  </Link>
                  <br />
                  <Link 
                  onClick={e => {
                    trackCustomEvent({
                      category: "Button",
                      action: "Click",
                      label: page + '_footer_imprint'
                    })
                  }} 
                  className="foot-a" to="/imprint">
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
            <p className="footer-tl--copy">&copy; TechLabs e.V. 2020</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default injectIntl(Footer)
