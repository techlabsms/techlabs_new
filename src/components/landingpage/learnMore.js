import React from "react"
import BackgroundImage from "gatsby-background-image"
import { FormattedMessage, Link } from "gatsby-plugin-react-intl"

import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"

const LearnMore = ({ backgroundImage }) => {
  return (
    <section className="container-fluid mt-5 background h-100 py-5">
      <BackgroundImage
        fluid={backgroundImage}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Heading
            heading={<FormattedMessage id={"landingpage.learn_more.heading"} />}
            subheading={
              <FormattedMessage id={"landingpage.learn_more.subheading"} />
            }
          />
          <div className="row h-100">
            <div className="col-md-6 mt-3">
              <Link to="/locations" className="noDec">
                <div className="card">
                  <h2 className="mt-3 color-red">
                    {
                      <FormattedMessage
                        id={"landingpage.learn_more.locations.h2"}
                      />
                    }
                  </h2>
                  <p className="color-gl">
                    {
                      <FormattedMessage
                        id={"landingpage.learn_more.locations.text"}
                      />
                    }
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-md-6 mt-3">
              <Link to="/program" className="noDec">
                <div className="card">
                  <h2 className="mt-3 color-red">
                    {
                      <FormattedMessage
                        id={"landingpage.learn_more.program.h2"}
                      />
                    }
                  </h2>
                  <p className="color-gl">
                    {
                      <FormattedMessage
                        id={"landingpage.learn_more.program.text"}
                      />
                    }
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </section>
  )
}

export default LearnMore
