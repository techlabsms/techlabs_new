import React from "react"
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Newsletter = ({ image, title, subtitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLocationPage {
        edges {
          node {
            heading
          }
        }
      }
    }
  `)
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
            <div className="form-group">
              <label for="mce-FNAME">First Name*</label>
              <input
                type="text"
                name="FNAME"
                className="form-control"
                id="mce-FNAME"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email*</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                id="mce-EMAIL"
                aria-describedby="emailHelp"
                name="EMAIL"
                required
              />
            </div>
            <div className="form-group">
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  Choose which locations you want to get updates about*
                </label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  required
                >
                  {data.allContentfulLocationPage.edges.map(location => (
                    <option value={location.node.heading}>
                      {location.node.heading}
                    </option>
                  ))}
                  <option value="Code@Home">Code@Home</option>
                </select>
              </div>
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
                    I agree that TechLabs could use my information to stay in
                    contact, send news and information.
                  </label>
                </li>
              </ul>
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{
                  display: "none",
                }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{
                  display: "none",
                }}
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
              width: "300px",
              margin: "auto",
            }}
          />
        </div>
      </div>
    </Container>
  )
}

export default Newsletter
