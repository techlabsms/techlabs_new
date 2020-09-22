import React, { Component } from "react"
import { graphql } from "gatsby"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"
import get from "lodash/get"

// components
import BlogCard from "../components/blog/BlogCard"
import Layout from "../components/Layout/Layout"

class blog extends Component {
  render() {
    const articles = get(this, "props.data.allContentfulBlogPost.edges")
    return (
      <Layout gaLabel="blog">
        <div className="container">
          <div className="row mt-5">
            <h2>
              <FormattedMessage id="blog.heading"/>
            </h2>
          </div>
          <div className="row">
            {articles.map(({ node }) => {
              return <BlogCard article={node} key={node.title} />
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default blog

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          title
          id
          readTime
          authorName
          slug
          abstract
          postImg {
            file {
              url
            }
          }
        }
      }
    }
  }
`
