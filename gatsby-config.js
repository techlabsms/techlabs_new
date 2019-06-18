module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Title from siteMetadata`,
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
  ],
}
