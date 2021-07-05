import React from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import SectionDescription from "./SectionDescription"
import Card from "../talks/TalkCard"
import Button from "../smallComponents/Button"


const MobileGridContainer = (props) => {
    const content = props.content.sort(() => 0.5 - Math.random()).slice(0, 3)
    return(
        <div className="newsroom-mobile-grid-container">
            <SectionDescription
                title={props.title}
                description={props.description}
                button={props.button}
                buttonLink={props.buttonLink}
            />
            {/* TO DO:
            image is always same podcasts
            add scroll section for podcasts */}
            <div className="newsroom-mobile-card-scroll">
                {content
                .map(element => (
                <Card
                    image={element.node.thumbnail}
                    title={element.node.subtitle}
                    speakers={element.node.speakers}
                ></Card>
                ))}
            </div>
            <Button
                    text={<FormattedMessage id={props.button}/>}
                    primary="true"
                    link={props.buttonLink}
                />
        </div>
    )
}

export default injectIntl(MobileGridContainer)