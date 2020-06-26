import React from "react"
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"
import Img from "gatsby-image"

const circleImage = {
  borderRadius: "300px",
  height: "200px",
  width: "200px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "20px",
}

const Team = ({ city, team }) => {
  return (
    <Container>
      <Heading
        heading="Our Board Members"
        subheading={`The People behind ${city}`}
      />
      <div className="row d-flex d-justify-content-center">
        {team &&
          team.map(teamMember => (
            <div
              className="col-12 col-md-3 text-center my-4 d-flex flex-column justify-content-center"
              key={teamMember.name}
            >
              <Img
                sizes={teamMember.image.sizes}
                alt={teamMember.image.title}
                style={circleImage}
              />
              <h3 className="team--name text-center">
                <span className="highlighted">{teamMember.name}</span>
              </h3>
              <div className="mt-4">
                <a
                  href={teamMember.linkedIn}
                  target="_blank"
                  className="a-black"
                >
                  Get in contact
                </a>
              </div>
            </div>
          ))}
      </div>
    </Container>
  )
}

export default Team
