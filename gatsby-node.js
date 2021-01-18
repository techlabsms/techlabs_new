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
    const location = path.resolve('./src/templates/location.js')
    resolve(
      graphql(
        `
          {
            location: allContentfulLocationPage{
              edges{
                node{
                  heading
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.location.edges.forEach( edge => {
          const heading = edge.node.heading
          const slug = edge.node.slug
          createPage({
            path: `/location/${slug}`,
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