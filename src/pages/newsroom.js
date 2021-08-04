import React, { useState, useEffect } from "react"
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
  const anchorRSS = "https://anchor.fm/s/47019a04/podcast/rss"
  const rssToJSON = "https://api.rss2json.com/v1/api.json?rss_url="
  const [podcasts, setPodcasts] = useState([])
  useEffect(() => {
    // get data from Anchor RSS feed, as JSON and not XML
    fetch(`${rssToJSON}${anchorRSS}`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setPodcasts(resultData.items)
      }) 
  }, [])
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
            type="talks"
            content={talks}
        />
        <GridContainer
            title="newsroom.podcastTitle"
            description="newsroom.podcastDescription"
            button="newsroom.podcastButton"
            type="podcasts"
            buttonLink="#"
            content={podcasts}
        />      
        {/* mobile displays    */}
        <MobileGridContainer
            title="newsroom.talksTitle"
            description="newsroom.talksDescription"
            button="newsroom.talksButton"
            type="talks"
            buttonLink="/talks/all"
            content={talks}
        />
        <MobileGridContainer
            title="newsroom.podcastTitle"
            description="newsroom.podcastDescription"
            button="newsroom.podcastButton"
            type="podcasts"
            buttonLink="#"
            content={podcasts}
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
