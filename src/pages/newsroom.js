import React from "react"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import Layout from "../components/Layout/Layout"
import Hero from "../components/shared/Hero"
import Seo from "../components/Layout/Seo"
import GridContainer from "../components/newsroom/GridContainer"
import MobileGridContainer from "../components/newsroom/MobileGridContainer"

// assets
import heroImage from "../assets/newsroom/newsroomHero.png"

const Newsroom = ({data}) => {
  const talks = data.allContentfulTalksPage.edges
  // const podcasts = TO DO
  return (
    <Layout>
      <Seo title="Newsroom" />
      <div className="newsroom-container">
        <Hero 
            heroImage={heroImage}
            heroTitle="newsroom.heroTitle"
            heroSpan="newsroom.heroSpan"
            heroText="newsroom.heroText"
        />
        <GridContainer
            title="newsroom.talksTitle"
            description="newsroom.talksDescription"
            button="newsroom.talksButton"
            buttonLink="/talks/all"
            content={talks}
        />
        {/* to do - podcasts in Contentful */}
        {/* <GridContainer
            title="newsroom.podcastTitle"
            description="newsroom.podcastDescription"
            button="newsroom.talksButton"
            content={podcasts}
        /> */}
        <MobileGridContainer
            title="newsroom.talksTitle"
            description="newsroom.talksDescription"
            button="newsroom.talksButton"
            buttonLink="/talks/all"
            content={talks}
        />
      </div>
    </Layout>
  )
}

export default injectIntl(Newsroom)

export const pageQuery = graphql`
  query($locale: String) {
    allContentfulTalksPage(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          subtitle
          slug
          videoLink
          speakers {
            company
          }
        }
      }
    }
  }
`
