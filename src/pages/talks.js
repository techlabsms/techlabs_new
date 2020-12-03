import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import { SectionDivider } from "../components/smallComponents/Heading"
import Img from "gatsby-image"
import { FormattedMessage } from "gatsby-plugin-intl"

const Talks = ({ data }) => {
  return (
    <Layout>
      <div className="container talk py-5">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <span className="talk__tl">Tech</span>Labs{" "}
              <span className="highlighted">Talks</span>
            </h1>
            <p className="talk__subtitle">{data.content.subtitle}</p>
            <SectionDivider />
            <p className="talk__instruction">
              <FormattedMessage id={"talk.when"}>When?</FormattedMessage>{" "}
              <span>{data.content.when}</span>
            </p>
            <p className="talk__instruction">
              <FormattedMessage id={"talk.where"}>Where?</FormattedMessage>{" "}
              <span>{data.content.where}</span>
            </p>
          </div>
          <div className="col-md-6">
            <div className="talk__speaker">
              <div className="talk__speaker--card">
                <Img
                  alt={data.content.speakers[0].name}
                  fluid={data.content.speakers[0].image.fluid}
                  style={{
                    width: "250px",
                  }}
                />
                <h5>{data.content.speakers[0].name}</h5>
                <p>{data.content.speakers[0].company}</p>
              </div>
              <div className="talk__speaker--card">
                <Img
                  alt={data.content.speakers[1].name}
                  fluid={data.content.speakers[1].image.fluid}
                  style={{
                    width: "250px",
                  }}
                />
                <h5>{data.content.speakers[1].name}</h5>
                <p>{data.content.speakers[1].company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 py-5 talk">
        <div className="talk-video">
          <iframe
            src={data.content.videoLink}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="container-fluid talk__newsletter">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <h2 className="text-white">
                <FormattedMessage id={"talk.interested"}>
                  Interested?
                </FormattedMessage>
              </h2>
              <p>
                <FormattedMessage id={"talk.notified"}>
                  Get notified about future TechLabs Talks
                </FormattedMessage>
              </p>
            </div>
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-white">
                    Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="text-center mt-5">
                  <button class="btn btn-secondary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Talks

export const pageQuery = graphql`
  query($locale: String) {
    content: contentfulTalksPage(node_locale: { eq: $locale }) {
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
  }
`
