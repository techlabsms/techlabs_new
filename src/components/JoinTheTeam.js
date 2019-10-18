import React from "react"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"

const JoinTheTeam = ({ heading, subheading }) => {
  return (
    <Container>
    <Heading heading={heading} subheading={subheading} />
      <div className="row mt-5">
        <div className="col">
          <p className="joinTheTeam--text">
            Do you dream of a world with no digital illitarates? Are you
            passionate about tech? As a TechLabs Management Member you can
            actively support others in learning tech. Join TechLabs and change
            the future of education.
          </p>
          <div className="container text-center mt-5">
            <button className="btn btn-primary joinTheTeam--button"> Open Positions</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default JoinTheTeam
