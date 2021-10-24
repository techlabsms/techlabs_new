import React from "react"
import { FormattedMessage, Link } from "gatsby-plugin-react-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const OpenPositions = ({ jobs }) => {
  return (
    <Container>
      <Heading
        heading={<FormattedMessage id={"talk.positions.heading"} />}
        subheading={<FormattedMessage id={"talk.positions.subheading"} />}
      />
      <div className="talk__positions">
        <div className="row">
          {jobs.map(job => (
            <div className="col-12 col-lg-6 talk__positions__item">
              <Link to={job.positionLink} className="noDec w-100">
                <div className="card">
                  <div className="row">
                    <div className="col-2">
                      <img src={job.companyIcon.file.url} alt="Icon" />
                    </div>
                    <div className="col-6">{job.openPosition}</div>
                    <div className="col-3 px-2">
                      <FormattedMessage id={"talk.positions.learnmore"} />
                    </div>
                    <div className="col-1 px-0">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default OpenPositions
