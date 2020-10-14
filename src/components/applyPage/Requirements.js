import React from "react"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

// assets
import locationsImg from "../../assets/locations.png"


const Requirements = ({ heading, subheading, link, isOpen, gaLabel }) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="row" id="requirements">
        <div className="col-md-5 pt-5 order-2 order-md-1">
          <ol className="requirements--list">
            <li className="requirements--list_item py-2">
              <span className="highlighted requirements--text_first">
              <FormattedMessage id="applypage.requirements.motivation.1"/> 
              </span>{" "}
              <FormattedMessage id="applypage.requirements.motivation.2"/>  <br />
              <FormattedMessage id="applypage.requirements.motivation.3"/> 
            </li>
            <li className="requirements--list_item py-2">
              <span className="highlighted requirements--text_first">
              <FormattedMessage id="applypage.requirements.drive.1"/> 
              </span>{" "}
              <FormattedMessage id="applypage.requirements.drive.2"/><br />
              <FormattedMessage id="applypage.requirements.drive.3"/> 
            </li>
            <li className="requirements--list_item py-2">
              <span className="highlighted requirements--text_first">
              <FormattedMessage id="applypage.requirements.community.1"/> 
              </span>{" "}
              <FormattedMessage id="applypage.requirements.community.2"/><br />
              <FormattedMessage id="applypage.requirements.community.3"/> 
            </li>
            <li className="requirements--list_item py-2">
              <span className="highlighted requirements--text_first">
              <FormattedMessage id="applypage.requirements.english.1"/> 
              </span>{" "}
              <FormattedMessage id="applypage.requirements.english.2"/><br />
              <FormattedMessage id="applypage.requirements.english.3"/> 
            </li>
            <li className="requirements--list_item py-2">
              <span className="highlighted requirements--text_first">
              <FormattedMessage id="applypage.requirements.time.1"/> 
              </span>{" "}
              <FormattedMessage id="applypage.requirements.time.2"/><br />
              <FormattedMessage id="applypage.requirements.time.3"/> 
            </li>
          </ol>
          {isOpen ? (
            <a 
            onClick={e => {
              if (gaLabel) {
                trackCustomEvent({
                  category: "Button",
                  action: "Click",
                  label: gaLabel
                })
              }
            }} 
            href={link} 
            className="a-white btn btn-primary mt-4">
              <FormattedMessage id={"callToAction.button"}/>
            </a>
          ) : (
            <button className="btn btn-primary mt-4" disabled>
              <FormattedMessage id="callToAction.button.closed"/>
            </button>
          )}
        </div>
        <div className="col-md-7 text-center order-1 order-md-2 d-flex align-items-center justify-content-center">
          <img src={locationsImg} alt="" className="w-75" />
        </div>
      </div>
    </Container>
  )
}
export default Requirements
