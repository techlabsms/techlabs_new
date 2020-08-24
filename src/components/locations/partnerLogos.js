import React from "react"
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
import Img from "gatsby-image"

const logoStyles = {
  width: "100%",
  height: "50%",
  marginLeft: "auto",
  marginRight: "auto",
}

const PartnerLogos = ({ heading, subheading, partners }) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading}></Heading>
      <div className="row mt-4">
        {partners &&
          partners.map(partner => (
            <div className="col-md-3" key={partner.name}>
              <a
                href={partner.partnerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="aNone"
              >
                <div className="partner--card mb-4">
                  <h6 className="pb-3">{partner.name}</h6>
                  <Img
                    sizes={partner.logo.sizes}
                    alt={partner.logo.title}
                    style={logoStyles}
                  />
                </div>
              </a>
            </div>
          ))}
      </div>
    </Container>
  )
}

export default PartnerLogos
