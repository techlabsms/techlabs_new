import React from "react"

const JoinTheTeam = ({ heading, subheading }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>{heading}</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
        </div>
      </div>
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
    </>
  )
}

export default JoinTheTeam
