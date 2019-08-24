module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `TechLabs - We Build. Digital. Shapers.`,
    description: `TechLabs is a platform for young people from all disciplines. We provide state-of-the-art Tech-Skills to solve the problems of our time digitally and entrepreneurially.`,
    url: `https://www.techlabs.org`,
    image: `/assets/tl-favicon.svg`
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
