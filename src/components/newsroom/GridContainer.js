import React from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import SectionDescription from "./SectionDescription"


const GridContainer = (props) => {
    
    return(
        <div className="newsroom-grid-container">
            <SectionDescription
                title={props.title}
                description={props.description}
                button={props.button}
            />
        </div>
    )
}

export default injectIntl(GridContainer)