import React from "react"
import Img from "gatsby-image"

// plugins
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

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
        heading={<FormattedMessage id="team.heading" />}
        subheading={
          <FormattedMessage id="team.subheading" values={{ city: city }} />
        }
      />
      <div className="team">
        {team &&
          team.map(teamMember => (
            <div className="col-12 col-md-3" key={teamMember.name}>
              <Img
                fluid={teamMember.image.fluid}
                alt={teamMember.image.title}
                style={circleImage}
              />
              <h3 className="team--name">
                <span>{teamMember.name}</span>
              </h3>
              <p>{teamMember.role}</p>
              <p>{teamMember.roleDescription}</p>
              <div className="get-in-contact">
                <a
                  href={teamMember.linkedIn}
                  target="_blank"
                  className="highlighted"
                  rel="noreferrer"
                >
                  <FormattedMessage id="team.contactButton" />
                </a>
              </div>
            </div>
          ))}
      </div>
    </Container>
  )
}

export default Team
