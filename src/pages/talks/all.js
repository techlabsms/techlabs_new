import React, { useState } from "react"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import Layout from "../../components/Layout/Layout"
import TalksHero from "../../components/talks/TalksHero"
import TalksCard from "../../components/talks/TalkCard"

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
  return (
    <Layout>
      <div className="talks-container">
        <TalksHero />
        <div className="talks-searchbar">
          <h4>
            <FormattedMessage id="talks.previous" /> ({talks.length})
          </h4>
          <input
            placeholder="Search"
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
              <Link to={talk.node.slug}>
                <TalksCard
                  title={talk.node.subtitle}
                  speakers={talk.node.speakers}
                />
              </Link>
            )
          })}
        </div>
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
          speakers {
            company
          }
        }
      }
    }
  }
`
