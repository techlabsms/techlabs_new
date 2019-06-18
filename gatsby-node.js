const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        
        result.data.allContentfulBlogPost.edges.forEach( edge => {
          const slug = edge.node.slug
          createPage({
            path: `/blog/${slug}`,
            component: blogPost,
            context: {
              slug: slug
            }
          })
        });
        return
      })
    )
  })
}