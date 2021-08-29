import React from "react"


const PodcastCard = props => {
    const formatRSSTitle = (title) => {
        if (title.substring(0, 7) === "Digital") {
            return title.substring(22);
        } else {
            return title;
        }
    }
    const title = formatRSSTitle(props.title)
    return (
        <a href={props.url} rel="noopener noreferrer" target="_blank">
            <div className="podcast-card">
                <div className="podcast-card-img">
                    <img src={props.thumbnail} alt="Digital Shapers Podcast"/>
                </div>
                <div className="podcast-card-bottom">
                    <h1>{title}</h1>
                </div>
            </div>
        </a>
    )
}

export default PodcastCard
