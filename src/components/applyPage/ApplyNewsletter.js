import React from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
// import ChooseCity from "./ChooseCity"


const ApplyNewsletter = ({ actionLink, intl }) => {
  // translate placeholders with injectIntl
  const namePlaceholder = intl.formatMessage({id: 'applypage.newsletter.name.placeholder'})
  const emailPlaceholder = intl.formatMessage({id: 'applypage.newsletter.email.placeholder'})
  const subscribeButton = intl.formatMessage({id: 'applypage.newsletter.button'})
  
  return (
    <Container>
      <Heading 
      heading={
        <FormattedMessage id={"applypage.newsletter.heading"} />
      }
      subheading={
        <FormattedMessage id={"applypage.newsletter.subheading"} />
      }>
      </Heading>
      <div className="row">
        <div className="col-md-6 order-2 order-md-1 py-5 d-flex align-items-center">
          <form
            action={actionLink}
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
                <FormattedMessage id={"applypage.newsletter.name.label"}/>
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
                <FormattedMessage id={"applypage.newsletter.email.label"}/>
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
            <div class="form-group">
              <label for="">
                <FormattedMessage id={"applypage.newsletter.location.label"}/>
              </label>
              <select>
                <option selected value="cococnut">c</option>
                <option value="d">d</option>
              </select>
              {/*
              <ChooseCity
                heading={<FormattedMessage id={"applypage.choose.your.city.title"} />}
                subheading={
                  <FormattedMessage
                    id={"applypage.choose.your.city.subtitle"}
                    values={{ count: allCountries.length - 1 }}
                  />
                }
                locale={intl.locale}
                handleClick={(isClicked, value, available, link) => {
                  this.setState({
                    isClicked,
                    cityValue: value,
                    available,
                    link,
                  })
                }}
                clickedCityValue={this.state.cityValue}
                countries={allCountries}
              />
              */}
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
                    <FormattedMessage id={"applypage.newsletter.privacy"}/>
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
      </div>
    </Container>
  )
}

export default injectIntl(ApplyNewsletter)
