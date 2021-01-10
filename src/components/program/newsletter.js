import React from "react"
import Img from "gatsby-image"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"


const Newsletter = ({ image, actionLink, intl }) => {
  // translate placeholders with injectIntl
  const namePlaceholder = intl.formatMessage({id: 'location.newsletter.name.placeholder'})
  const emailPlaceholder = intl.formatMessage({id: 'location.newsletter.email.placeholder'})
  const subscribeButton = intl.formatMessage({id: 'location.newsletter.button'})
  return (
    <Container>
      <Heading 
      heading={
        <FormattedMessage id={"location.newsletter.title"} />
      }
      subheading={
        <FormattedMessage id={"location.newsletter.subtitle"} />
      }>
      </Heading>
      <div className="row">
        <div className="col-md-6 order-2 order-md-1 py-5 d-flex align-items-center">
          <form
            action={actionLink}
            //https://techlabs.us10.list-manage.com/subscribe/post?u=ba719a6a0ef0ac12e51aa3ba2&amp;id=8987774d41
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
            className="w-100"
          >
            <div className="form-group">
              <label for="mce-FNAME">
                <FormattedMessage id={"location.newsletter.name.label"}/>
              </label>
              <input
                type="text"
                name="FNAME"
                className="form-control"
                id="mce-FNAME"
                placeholder={namePlaceholder}
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">
                <FormattedMessage id={"location.newsletter.email.label"}/>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder={emailPlaceholder}
                id="mce-EMAIL"
                aria-describedby="emailHelp"
                name="EMAIL"
                required
              />
            </div>
            <div className="form-group">
              <ul className="newsletter-checkbox">
                <li>
                  <input
                    type="checkbox"
                    value="1"
                    name="group[13885][1]"
                    className="form-check-input"
                    id="mce-group[13885]-13885-0"
                    required
                  />
                  <label
                    for="mce-group[13885]-13885-0"
                    className="form-check-label"
                  >
                    <FormattedMessage id={"location.newsletter.privacy"}/>
                  </label>
                </li>
              </ul>
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <input
              type="submit"
              value={subscribeButton}
              name="subscribe"
              id="mc-embedded-subscribe"
              class="btn btn-primary"
            />
          </form>
        </div>
        <div className="col-md-6 order-1 order-md-2 py-5">
          <Img
            fluid={image}
            style={{
              width: "300px",
              margin: "auto",
            }}
          />
        </div>
      </div>
    </Container>
  )
}

export default injectIntl(Newsletter)
