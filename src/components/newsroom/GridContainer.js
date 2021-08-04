import React from "react"

// plugins & external
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl"

// components
import SectionDescription from "./SectionDescription"
import Card from "../talks/TalkCard"
import PodcastCard from "./PodcastCard"

const GridContainer = (props) => {
    const content = props.content.sort(() => 0.5 - Math.random()).slice(0, 3)

    return(
        <div className="newsroom-grid-container">
            <SectionDescription
                title={props.title}
                description={props.description}
                button={props.button}
                buttonLink={props.buttonLink}
                sectionId={props.type}
            />
            {props.type === "talks" && content
            .map(element => {
                return(
                    <Link to={`/talks/${element.node.slug}`}>
                        <Card
                            image={element.node.thumbnail}
                            title={element.node.subtitle}
                            speakers={element.node.speakers}
                        />
                    </Link>
                )
            })}
            {props.type === "podcasts" && content.map(element => (
                <PodcastCard
                title={element.title}
                thumbnail={element.thumbnail}
                url={element.link}
                />
            ))}
        </div>
    )
}

export default injectIntl(GridContainer)