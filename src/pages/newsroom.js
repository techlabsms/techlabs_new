import React from "react"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import Layout from "../components/Layout/Layout"
import Hero from "../components/shared/Hero"
import Seo from "../components/Layout/Seo"
import GridContainer from "../components/newsroom/GridContainer"

// assets
import heroImage from "../assets/newsroom/newsroomHero.png"

const Newsroom = ({data}) => {
  const talks = data.allContentfulTalksPage.edges
  // const podcasts = 
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
        {/* <GridContainer
            title="newsroom.talksTitle"
            description="newsroom.talksDescription"
            button="newsroom.talksButton"
            content={podcasts}
        /> */}
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
