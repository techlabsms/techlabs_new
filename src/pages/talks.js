import React, { Component } from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import Layout from "../components/Layout/Layout"
import TalksHero from "../components/talks/TalksHero"

// styles
import "../styles/_main.scss"

const talks = () => {
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
                
            </div>
        </Layout>
    )
}

export default injectIntl(talks)