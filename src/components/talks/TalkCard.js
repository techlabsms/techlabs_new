import React from "react"

//assets

import playSymbol from "../../assets/talks/play_symbol.png"

const createCompaniesArray = speakers => {
  const companies = []
  speakers.map(speaker => {
    companies.push(speaker.company)
    companies.push(", ")
  })
  companies.pop()
  companies[companies.length - 2] = " & "
  return companies
}
const TalksCard = props => {
  const companies = createCompaniesArray(props.speakers)
  return (
    <div className="talks-card">
      <img src={playSymbol} alt="play" className="talks-card-play-symbol"/>
      <div className="talks-card-img">
        <img src={props.image} />
      </div>
      <div className="talks-card-bottom">
        <h1>{props.title}</h1>
        <p>feat. {companies.join("")}</p>
      </div>
    </div>
  )
}

export default TalksCard
