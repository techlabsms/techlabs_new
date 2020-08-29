const Promise = require('bluebird')
const path = require('path')

// pages locale
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
      ...page,
      context: {
          ...page.context,
          locale: page.context.intl.language,
      },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const location = path.resolve('./src/templates/location.js')
    resolve(
      graphql(
        `
          {
            blog: allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            location: allContentfulLocationPage{
              edges{
                node{
                  heading
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        
        result.data.blog.edges.forEach( edge => {
          const slug = edge.node.slug
          createPage({
            path: `/blog/${slug}`,
            component: blogPost,
            context: {
              slug: slug
            }
          })
        });

        result.data.location.edges.forEach( edge => {
          const heading = edge.node.heading
          createPage({
            path: `/location/${heading}`,
            component: location,
            context: {
              heading: heading
            }
          })
        });
        return
      })
    )
  })
}