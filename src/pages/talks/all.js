import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import PLACEHOLDER from "../../assets/talks/talksHero.png"

// components
import Layout from "../../components/Layout/Layout"
import Hero from "../../components/shared/Hero"
import TalksCard from "../../components/talks/TalkCard"
import Seo from "../../components/Layout/Seo"

// styles
import "../../styles/_main.scss"

const All = props => {
  const [searchTerm, setSearchTerm] = useState("")
  const talks = props.data.allContentfulTalksPage.edges

  const filteredTalks = talks.filter(talk => {
    return talk.node.subtitle
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
  })

  const searchPlaceholder = props.intl.formatMessage({ id: "talks.search" })
  return (
    <Layout>
      <Seo title="Talks" />
      <div className="talks-container">
        <Hero 
        heroImage={heroImage}
        heroTitle="talks.heroTitle"
        heroSpan="talks.heroSpan"
        heroText="talks.heroText"/>
        <div className="talks-searchbar">
          <h4>
            <FormattedMessage id="talks.previous" /> ({talks.length})
          </h4>
          <input
            placeholder={searchPlaceholder}
            type="search"
            aria-label="Search location"
            className="locations--search mb-4 align-self-center"
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          ></input>
        </div>
        <div className="talks-cards">
          {filteredTalks.map(talk => {
            return (
              <Link to={`/talks/${talk.node.slug}`}>
                <TalksCard
                  key={talk.node.videoLink}
                  title={talk.node.subtitle}
                  speakers={talk.node.speakers}
                  image={PLACEHOLDER}
                />
              </Link>
            )
          })}
        </div>
      </div>
      <div className="mobile-talks">
        {filteredTalks.map(talk => {
          return (
            <Link to={`/talks/${talk.node.slug}`}>
              <TalksCard
                key={talk.node.videoLink}
                title={talk.node.subtitle}
                speakers={talk.node.speakers}
                image={talk.node.thumbnail}
              />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default injectIntl(All)

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
