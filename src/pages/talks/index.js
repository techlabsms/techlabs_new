import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"

import Img from "gatsby-image"
import { FormattedMessage } from "gatsby-plugin-intl"
import LearnMore from "../../components/landingpage/learnMore"

const Index = ({ data }) => {
  const [width, setWidth] = useState()

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWidth(window.innerWidth)
    }
  }, [setWidth])
  return (
    <Layout>
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
      <div className="container mb-5 py-5 talk text-center">
        <h1>
          <span className="talk__tl">Live</span>Talk
        </h1>
        <div className="talk-video">
          <iframe
            src={data.content.videoLink}
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <div className="talk-video">
          <iframe
            src="https://vimeo.com/event/484993/chat/"
            frameborder="0"
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
              <form
                action="https://techlabs.us7.list-manage.com/subscribe/post"
                method="POST"
              >
                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="MERGE1"
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
                    id="MERGE2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="text-center mt-5">
                  <input type="submit" class="btn btn-secondary" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <LearnMore
        backgroundImage={data.background_location.childImageSharp.fluid}
      />
    </Layout>
  )
}

export default Index

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

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
    background_location: file(
      relativePath: { eq: "background_locations.png" }
    ) {
      ...fluidImage
    }
  }
`
