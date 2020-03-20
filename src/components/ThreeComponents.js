import React, { useState } from "react"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"
import VisibilitySensor from "react-visibility-sensor"
import { FormattedMessage } from "gatsby-plugin-intl"

const ThreeComponents = ({ heading, subheading }) => {
  const [componentVisible, setComponentVisible] = useState(false)

  return (
    <VisibilitySensor
      onChange={isVisible => {
        setComponentVisible(isVisible)
      }}
      once
    >
      <Container>
        <Heading heading={heading} subheading={subheading} />
        <div className="row my-5 py-5 d-none d-lg-flex">
          <div className="col-md-2" />
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <div className="threeComponents--circle threeComponents--circle_1  d-flex justify-content-center">
                  <h3 className="align-self-center">Local Community</h3>
                  <div>
                    <h5 className="align-self-center text-center">
                      Local Community
                    </h5>
                    <p className="align-self-center">
                      Online learning does not unfold its full potential in
                      isolation. We need a social context in which people can
                      share what they have learned and help each other. We need
                      the dynamics of a community to make sure that everyone is
                      motivated throughout the learning journey. In order to
                      bring our TechLabs community together and learn
                      collectively, we have various meeting formats during the
                      regular semester.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={
                    componentVisible
                      ? "threeComponents--circle threeComponents--circle_2  d-flex justify-content-center threeComponents--circle_animation"
                      : "threeComponents--circle threeComponents--circle_2  d-flex justify-content-center"
                  }
                >
                  <h3 className="align-self-center">Online Learning</h3>
                  <div>
                    <h5 className="align-self-center text-center">
                      Online Learning
                    </h5>
                    <p className="align-self-center">
                      Our participants learn tech skills in one of our online
                      learning tracks. For each of the tracks, our curriculum
                      experts carefully compiled the best online learning
                      resources available in various formats. Because we want to
                      make sure that both a coding beginner or already
                      experienced techie can learn something new in our program,
                      we individualize our participant’s learning paths based on
                      prior knowledge and learning goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="threeComponents--circle threeComponents--circle_3  d-flex justify-content-center">
                  <h3 className="align-self-center">Project Work</h3>
                  <div>
                    <h5 className="align-self-center text-center">
                      Project Work
                    </h5>
                    <p className="align-self-center">
                      The overarching goal of the online learning component of
                      our program is that the learning resources of our tracks
                      enable our participants to take part in their own tech
                      project in which they solve an open problem. Our mentors
                      are experts in their respective field and are happy
                      support the project groups in case of technical issues and
                      questions regarding the project scope or project
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2" />
        </div>
        <div className="row d-block d-lg-none">
          <div className="col-md-4">
            <h3 className="highlighted mb-3 pl-3 text-left">Local Community</h3>
            <p>
              Online learning does not unfold its full potential in isolation.
              We need a social context in which people can share what they have
              learned and help each other. We need the dynamics of a community
              to make sure that everyone is motivated throughout the learning
              journey. In order to bring our TechLabs community together and
              learn collectively, we have various meeting formats during the
              regular semester.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="highlighted mb-3 pl-3 text-left">Online Learning</h3>
            <p>
              Our participants learn tech skills in one of our online learning
              tracks. For each of the tracks, our curriculum experts carefully
              compiled the best online learning resources available in various
              formats. Because we want to make sure that both a coding beginner
              or already experienced techie can learn something new in our
              program, we individualize our participant’s learning paths based
              on prior knowledge and learning goals.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="highlighted mb-3 pl-3 text-left">Project Work</h3>
            <p>
              The overarching goal of the online learning component of our
              program is that the learning resources of our tracks enable our
              participants to take part in their own tech project in which they
              solve an open problem. Our mentors are experts in their respective
              field and are happy support the project groups in case of
              technical issues and questions regarding the project scope or
              project management.
            </p>
          </div>
        </div>
      </Container>
    </VisibilitySensor>
  )
}

export default ThreeComponents
