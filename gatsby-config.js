module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `TechLabs - We Build. Digital. Shapers.`,
    description: `TechLabs is a platform for young people from all disciplines. We provide state-of-the-art Tech-Skills to solve the problems of our time digitally and entrepreneurially.`,
    url: `https://www.techlabs.org`,
    image: `/assets/tl-favicon.svg`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zb5zx2adqx5t`,
        accessToken: `920E3JZQNSjINbGuuNGDFOZ1n08Y1s4WEyvSysjgGO4`,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-T9RV4L2`,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: {platform: `gatsby`},
      },
    }, {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `de`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
  ],
}
