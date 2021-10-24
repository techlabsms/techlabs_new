import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/Layout"

import Img from "gatsby-image"
import { injectIntl, FormattedMessage } from "gatsby-plugin-react-intl"
import LearnMore from "../components/landingpage/learnMore"
import Seo from "../components/Layout/Seo"

const Index = ({ data, intl }) => {
  const [width, setWidth] = useState()

  const namePlaceholder = intl.formatMessage({
    id: "talk.register.name.placeholder",
  })
  const emailPlaceholder = intl.formatMessage({
    id: "talk.register.email.placeholder",
  })
  const submitButton = intl.formatMessage({ id: "talk.register.button" })

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWidth(window.innerWidth)
    }
  }, [setWidth])

  return (
    <Layout>
      <Seo title={data.content.subtitle} />
      <div className="container talk py-5">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <span className="talk__tl">Tech</span>Labs Talks
            </h1>
            <h2 className="talk__tl--sm">{data.content.subtitle}</h2>
            <div className="row my-4">
              <div className="col-md-5 talk__speaker--names">
                <h5>{data.content.speakers[0].name}</h5>
                <h5 className="talk__tl">{data.content.speakers[0].company}</h5>
              </div>
              <div className="col-md-6">
                <h5>{data.content.speakers[1].name}</h5>
                <h5 className="talk__tl">{data.content.speakers[1].company}</h5>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col talk__speaker--names">
                <h5>Maren Greywe</h5>
                <h5 className="talk__tl">Your Host</h5>
              </div>
            </div>
            <p className="talk__instruction">
              <span>{data.content.when.split(" ")[0]}</span>{" "}
              {data.content.when.split(" ")[1]}
            </p>
          </div>
          <div className="col-md-6">
            <div className="talk__speaker">
              <div className="talk__speaker--card">
                <Img
                  alt={data.content.speakers[0].name}
                  fluid={data.content.speakers[0].image.fluid}
                  className="talk__speaker"
                  style={{
                    width: width > 600 ? "250px" : "150px",
                  }}
                />
              </div>
              <div className="talk__speaker--card">
                <Img
                  alt={data.content.speakers[1].name}
                  fluid={data.content.speakers[1].image.fluid}
                  style={{
                    width: width > 600 ? "250px" : "150px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="talk__register">
        <div className="container-fluid">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-12 text-white">
                <h2 className="text-center">
                  <FormattedMessage id={"talk.interested"} />
                </h2>
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6 py-3 d-flex align-items-center">
                    <form
                      action="https://techlabs.us7.list-manage.com/subscribe/post?u=967a8f4afdf27d50c6b2fa557&amp;id=83e2ef691a"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      class="validate"
                      novalidate
                      className="w-100"
                    >
                      <div className="form-group">
                        <label for="mce-FNAME">
                          <FormattedMessage id={"talk.register.name.label"} />
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
                          <FormattedMessage id={"talk.register.email.label"} />
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
                          <FormattedMessage
                            id={"talk.register.location.label"}
                          />
                        </label>
                        <div style={{ paddingTop: "5px", marginRight: "40%" }}>
                          <select
                            id="MERGE2"
                            name="MERGE2"
                            className="dropdown-select"
                          >
                            {data.location.nodes.map(locationoption => (
                              <option
                                key={locationoption.heading}
                                value={
                                  locationoption.heading === "Remote Program"
                                    ? "None of the ones listed"
                                    : `${locationoption.heading} (${locationoption.country})`
                                }
                              >
                                {locationoption.heading}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="">
                          <FormattedMessage
                            id={"talk.register.participated.question"}
                          />
                        </label>
                        <div>
                          <ul className="newsletter-checkbox mt-0">
                            <li>
                              <div class="row justify-content-around">
                                <div class="col-2">
                                  <input
                                    type="radio"
                                    value="Yes"
                                    name="MERGE3"
                                    className="form-check-input"
                                    id="MERGE3"
                                  />
                                  <label for="Yes" className="form-check-label">
                                    <FormattedMessage
                                      id={"talk.register.participated.answer.y"}
                                    />
                                  </label>
                                </div>
                                <div class="col-2">
                                  <input
                                    type="radio"
                                    value="No"
                                    name="MERGE3"
                                    className="form-check-input"
                                    id="MERGE3"
                                    checked
                                  />
                                  <label for="No" className="form-check-label">
                                    <FormattedMessage
                                      id={"talk.register.participated.answer.n"}
                                    />
                                  </label>
                                </div>
                                <div class="col-6"></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="form-group">
                        <ul className="newsletter-checkbox">
                          <li>
                            <input
                              type="checkbox"
                              value="Y"
                              name="gdpr[43494]"
                              className="form-check-input"
                              id="gdpr_43494"
                              required
                            />
                            <label
                              for="gdpr_43494"
                              className="form-check-label"
                            >
                              <FormattedMessage id={"talk.register.privacy"} />
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
                        value={submitButton}
                        name="submit"
                        id="mc-embedded-subscribe"
                        className="btn btn-secondary"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LearnMore
        backgroundImage={data.background_location.childImageSharp.fluid}
      /> */}
    </Layout>
  )
}

export default injectIntl(Index)

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `
export const pageQuery = graphql`
  query($slug: String!, $locale: String) {
    content: contentfulTalksPage(
      slug: { eq: $slug }
      node_locale: { eq: $locale }
    ) {
      subtitle
      when
      where
      videoLink
      mailchimpLink
      speakers {
        name
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        company
      }
    }
    # background_location: file(
    #   relativePath: { eq: "background_locations.png" }
    # ) {
    #   ...fluidImage
    # }
    location: allContentfulLocationPage(filter: { node_locale: { eq: "en" } }) {
      nodes {
        heading
        country
      }
    }
  }
`
