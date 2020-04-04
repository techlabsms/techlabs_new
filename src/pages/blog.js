import React, { Component } from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import BlogCard from "../components/blog/BlogCard"
import Layout from "../components/Layout/Layout"

class blog extends Component {
  render() {
    const articles = get(this, "props.data.allContentfulBlogPost.edges")
    return (
      <Layout>
        <div className="container">
          <div className="row mt-5">
            <h2>Recent articles</h2>
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
    allContentfulBlogPost {
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
