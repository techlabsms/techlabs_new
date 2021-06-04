import React from "react"

//assets

import logo from "../../assets/tl-logo.png"

const createCompaniesArray = (speakers) => {
    const companies = [];
    speakers.map(speaker => {
        companies.push(speaker.company)
        companies.push(", ")
    })
    companies.pop()
    companies[companies.length - 2] = " & "
    return companies
}
const TalksCard = (props) => {
    const companies = createCompaniesArray(props.speakers)
    return(
        <div className="talks-card">
            <div className="talks-card-img">
                <img src={logo} alt="provisory image"/>
            </div>
            <div className="talks-card-bottom">
                <h1>{props.title}</h1>
                <p>feat. {companies.join("")}</p>
            </div>
        </div>
    )
}

export default TalksCard
