import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import Layout from "../../components/Layout/Layout"
import TalksHero from "../../components/talks/TalksHero"
import TalksCard from "../../components/talks/TalkCard"

// styles
import "../../styles/_main.scss"

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0) // integer state
  return () => setValue(value => value + 1) // update the state to force render
}

const All = props => {
  const [searchTerm, setSearchTerm] = useState("")
  const talks = props.data.allContentfulTalksPage.edges
  const forceUpdate = useForceUpdate()

  const filteredTalks = talks.filter(talk => {
    return talk.node.subtitle
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase())
  })
  useEffect(() => {
    async function getThumbnails() {
      await talks.forEach(async talk => {
        const vimeoID = talk.node.videoLink.split("/")[4]
        const vimeoData = await fetch(
          `http://vimeo.com/api/v2/video/${vimeoID}.json`
        )
        const vimeoJSON = await vimeoData.json()
        const talksIndex = talks.findIndex(
          talk => talk.node.videoLink.split("/")[4] === vimeoID
        )

        talks[talksIndex].node["thumbnail"] = vimeoJSON[0].thumbnail_medium

        forceUpdate()
      })
    }

    getThumbnails()
  }, [filteredTalks, forceUpdate, talks])

  
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
