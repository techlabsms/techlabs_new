import React, { Component } from "react"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"
import get from "lodash/get"
import BlogCard from "../components/BlogCard"

class blog extends Component {
  render() {
    const articles = get(this, "props.data.allContentfulBlogPost.edges")
    return (
      <div>
        <Navbar />
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
      </div>
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
          readTime
          authorName
          slug
          postImg{
            file{
              url
            }
          }
        }
      }
    }
  }
`
