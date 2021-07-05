import React from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import SectionDescription from "./SectionDescription"
import Card from "../talks/TalkCard"


const GridContainer = (props) => {
    const content = props.content.sort(() => 0.5 - Math.random()).slice(0, 3)
    return(
        <div className="newsroom-grid-container">
            <SectionDescription
                title={props.title}
                description={props.description}
                button={props.button}
                buttonLink={props.buttonLink}
            />
            {content
            .map(element => (
            <Card
                image={element.node.thumbnail}
                title={element.node.subtitle}
                speakers={element.node.speakers}
            ></Card>
            ))}
        </div>
    )
}

export default injectIntl(GridContainer)