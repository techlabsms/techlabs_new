<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="./src/assets/tl-icon.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Official Website Repository for TechLabs Global
</h1>

## 🚀 Quick start

We use Gatsby.js to build our Site

1. Clone the Repo
2. Install the Gatsby CLI `npm install -g gatsby-cli`G
3. Run `npm install`
4. Get the contentful access token from passbolt and add it as `.env` file
5. Run `gatsby develop` to start the project locally

## Publish Changes

Staging branch automatically deploys to the staging environment and the production branch automatically to the production environment.

## ✏️ Content

We use Contentful as a CMS (Content Management System). There you can edit the location page of your TechLabs Community and add the BlogPosts.

## Location Pages

Currentliy the only pages that are generated are /location. In the templates folder you could find the template for the pages, which are generated from the gatsby-node file.

Any change in the content of the location pages has to be done through contentful.

## Technical Setup

- React as a Frontend Framework (<a href="https://reactjs.org/docs/getting-started.html">DOCS</a>)
- Gatsby as static site generator (<a href="https://www.gatsbyjs.org/">DOCS</a>)
- Data Source <a href="https://www.contentful.com/">Contentful</a>

## URLS

- Staging-Environment: <a href="https://techlabs-staging.netlify.com">Staging</a> [![Netlify Status](https://api.netlify.com/api/v1/badges/c95ad6e6-d4b0-491f-ba27-6df51922187e/deploy-status)](https://app.netlify.com/sites/techlabs-staging/deploys)
- Production: <a href="techlabs.org">techlabs.org</a> [![Netlify Status](https://api.netlify.com/api/v1/badges/1c016a39-3c99-4e93-a749-7b8a7cf9e62e/deploy-status)](https://app.netlify.com/sites/techlabs-prod/deploys)

## 🐛 Bugs and issues

You found something that has to be different? Something is broken? Please report it here: <a href="https://www.notion.so/techlabs/f246cf2457594f7a969ed04603696304?v=7da9c1ea7b964c9b9a6eed40fcc32594">Report issue</a>

## Lighthouse

![lighthouse staging](https://github.com/techlabsms/techlabs_new/workflows/lighthouse%20staging/badge.svg)

## Questions?

Please feel free to write a message to <a href="mailto:richard.menning@techlabs.org">Richard</a>
