import React, { Component } from "react"
import { graphql } from "gatsby"

// plugins & external
import get from "lodash/get"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import Navbar from "../components/Layout/Navbar"
import Footer from "../components/Layout/Footer"

// assets
import techlabs from "../assets/tl-icon-whitebg.svg"
import clock from "../assets/clock.svg"

class BlogPostTemplate extends Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost")
    const { intl } = this.props
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row mt-5">
            {post.postImg !== null ? (
              <img
                src={post.postImg.fixed.src}
                alt={post.slug}
                className="img-fluid mx-auto"
              />
            ) : (
              <img
                src={techlabs}
                alt="blog"
                width="200"
                className="img-fluid mx-auto"
              />
            )}
          </div>
          <div className="row mt-5">
            <div className="col-12 px-4">
              <h3>{post.title}</h3>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4 px-4">
              <p>
                <img src={clock} alt="clock" className="mr-3" />
                {post.readTime}<FormattedMessage id="blogcard.time"/>
              </p>
            </div>
            <div className="col-8">
              <p className="ml-3">
                <img
                  src={techlabs}
                  alt="clock"
                  className="mr-3"
                  width="25"
                  height="25"
                />
                {post.authorName}
              </p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col px-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content.childContentfulRichText.html,
                }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default injectIntl(BlogPostTemplate)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $locale: String) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      title
      slug
      readTime
      authorName
      postImg {
        fixed {
          src
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
