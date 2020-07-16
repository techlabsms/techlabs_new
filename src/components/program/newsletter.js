import React from "react"
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
import Img from "gatsby-image"

const Newsletter = ({ image, title, subtitle }) => {
  return (
    <Container>
      <Heading heading={title} subheading={subtitle}></Heading>
      <div className="row">
        <div className="col-md-6 order-2 order-md-1 py-5 d-flex align-items-center">
          <form
            action="https://techlabs.us10.list-manage.com/subscribe/post?u=ba719a6a0ef0ac12e51aa3ba2&amp;id=8987774d41"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
            className="w-100"
          >
            <div class="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                id="mce-EMAIL"
                aria-describedby="emailHelp"
                name="EMAIL"
              />
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
              value="Subscribe"
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
              width: "250px",
              margin: "auto",
            }}
          />
        </div>
      </div>
    </Container>
  )
}

export default Newsletter
