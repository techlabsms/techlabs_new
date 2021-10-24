import React from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-react-intl"

// components
import SectionDescription from "./SectionDescription"
import Card from "../talks/TalkCard"
import Button from "../smallComponents/Button"
import PodcastCard from "./PodcastCard"

// assets
import placeholderImage from "../../assets/newsroom/newsroomHero.png"

const MobileGridContainer = props => {
  const content = props.content.sort(() => 0.5 - Math.random()).slice(0, 3)
  return (
    <div className="newsroom-mobile-grid-container">
      <SectionDescription
        title={props.title}
        description={props.description}
        button={props.button}
        buttonLink={props.buttonLink}
      />
      <div className="newsroom-mobile-card-scroll">
        {props.type === "talks" &&
          content.map(element => (
            <Card
              image={placeholderImage}
              title={element.node.subtitle}
              speakers={element.node.speakers}
            ></Card>
          ))}
        {props.type === "podcasts" &&
          content.map(element => (
            <PodcastCard
              title={element.title}
              thumbnail={element.thumbnail}
              url={element.link}
            ></PodcastCard>
          ))}
      </div>
      <div className="newsroom-mobile-button">
        <Button
          text={<FormattedMessage id={props.button} />}
          primary="true"
          link={props.buttonLink}
        />
      </div>
    </div>
  )
}

export default injectIntl(MobileGridContainer)
