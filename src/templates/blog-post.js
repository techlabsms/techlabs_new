import React, { Component } from "react"
import Navbar from "../components/Navbar"
import get from "lodash/get"
import techlabs from "../assets/tl-icon-whitebg.svg"
import clock from "../assets/clock.svg"
import Footer from "../components/Footer"
import { graphql } from 'gatsby'

class BlogPostTemplate extends Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost")
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
            <h1>{post.title}</h1>
          </div>
          <div className="row mt-2">
            <div className="col-4">
              <p>
                <img src={clock} alt="clock" className="mr-3" />
                {post.readTime}min read
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
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.childContentfulRichText.html,
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
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
