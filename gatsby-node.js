const Promise = require("bluebird")
const path = require("path")

// pages locale
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  page.context.intl.language === "pt"
    ? (locale = "en")
    : (locale = page.context.intl.language)
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: locale,
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const locationTemplate = path.resolve("./src/templates/location.js")
    const talksTemplate = path.resolve("./src/templates/talks.js")
    const talksregisterTemplate = path.resolve("./src/templates/talksregister.js")
    resolve(
      graphql(
        `
          {
            location: allContentfulLocationPage {
              edges {
                node {
                  heading
                  slug
                }
              }
            }
            talks: allContentfulTalksPage {
              edges {
                node {
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

        const { location, talks } = result.data

        location.edges.forEach(edge => {
          const heading = edge.node.heading
          const slug = edge.node.slug
          createPage({
            path: `/location/${slug}`,
            component: locationTemplate,
            context: {
              heading: heading,
            },
          })
        })

        talks.edges.forEach(edge => {
          const slug = edge.node.slug
          createPage({
            path: `/talks/${slug}`,
            component: talksTemplate,
            context: {
              slug,
            },
          })
        })

        talks.edges.forEach(edge => {
          const slug = edge.node.slug
          createPage({
            path: `/talks/${slug}/register`,
            component: talksregisterTemplate,
            context: {
              slug,
            },
          })
        })

        return
      })
    )
  })
}
