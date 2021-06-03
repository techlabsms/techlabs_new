import React from "react"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import Layout from "../components/Layout/Layout"
import TalksHero from "../components/talks/TalksHero"

// styles
import "../styles/_main.scss"

const talks = props => {
    const talks = props.data.allContentfulTalksPage.edges;
    return(
        <Layout>
            <TalksHero/>
            <div className="talks-searchbar">
                <h4><FormattedMessage id="talks.previous"/></h4>
                <input 
                    placeholder="Search"
                    onFocus={(e) => e.target.placeholder = ""} 
                    onBlur={(e) => e.target.placeholder = "Search"}
                ></input>
            </div>
            <div className="talks-cards">
                {talks.map(talk => {
                    return(
                        <Link to={talk.node.slug}>{talk.node.subtitle}</Link>
                        // implement cards here
                    )                    
                })}
            </div>
        </Layout>
    )
}

export default injectIntl(talks)

export const pageQuery = graphql`
  query TalksPageQuery {
    allContentfulTalksPage {
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
