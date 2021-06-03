import React, { Component } from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import talks from "../../pages/talks"


const TalksHero = (props) => {
    
    return(
        <div className="talks-hero">
            <div className="talks-hero-text">
                <h1><FormattedMessage id={"talks.heroTitle"}/><span><FormattedMessage id={"talks.heroSpan"}/></span></h1>
                <p><FormattedMessage id={"talks.heroText"}/></p>
            </div>
            <div className="talks-hero-img"></div>
        </div>
    )
}

export default injectIntl(TalksHero)