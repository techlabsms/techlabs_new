import React from "react"
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"

const CoreValues = () => {
  return (
    <>
      <Container>
        <div className="row coreValues d-none d-lg-flex">
          <div className="col-md-12 col-lg-4 d-flex justify-content-center align-items-center">
            <h1 className="text-right coreValues--heading">
              <span>Our</span> Core values
            </h1>
          </div>
          <div className="col-md-12 col-lg-8 pl-3 mt-auto mb-auto">
            <div className="row w-75">
              <div className="col">
                <h2>Impact</h2>
                <p>
                  Creating a positive impact on the world is the primary reason
                  why we work at TechLabs. We challenge the status-quo every day
                  and actively create and implement new ideas. We focus on great
                  results rather than on the process.
                </p>
              </div>
            </div>
            <div className="row w-75">
              <div className="col">
                <h2>Passion</h2>
                <p>
                  We are passionate about the TechLabs mission because tech
                  education is one of the most pressing challenges of our time.
                  Therefore, we need to step in now and lead by example to
                  inspire others and actually make change happen.
                </p>
              </div>
            </div>
            <div className="row w-75">
              <div className="col">
                <h2>Learning</h2>
                <p>
                  We are lifelong learners who love to learn and grow, both
                  personally and together as an organization. We are extemely
                  driven to aquire and apply new knowledge and skills.
                </p>
              </div>
            </div>
            <div className="row w-75">
              <div className="col">
                <h2>Selflessness</h2>
                <p>
                  We create significant impact by volunteering. We are not
                  asking for anything in return, as our motivation is primarily
                  rooted in the joy of bringing tech skills to our communities.
                  Helping others to learn and understand the world a little bit
                  better is one of the most rewarding experiences.
                </p>
              </div>
            </div>
            <div className="row w-75">
              <div className="col">
                <h2>Respect</h2>
                <p>
                  We are open-minded and embrace diversity throughout our
                  communities. We respect each others backgrounds and opinions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="container-fluid coreValues--mobil d-lg-none">
        <div className="container">
          <Heading heading="Our core values" />
        </div>
        <div className="container py-5 text-justify">
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2>Impact</h2>
              <p>
                Creating a positive impact on the world is the primary reason
                why we work at TechLabs. We challenge the status-quo every day
                and actively create and implement new ideas. We focus on great
                results rather than on the process.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2>Passion</h2>
              <p>
                We are passionate about the TechLabs mission because tech
                education is one of the most pressing challenges of our time.
                Therefore, we need to step in now and lead by example to inspire
                others and actually make change happen.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2>Learning</h2>
              <p>
                We are lifelong learners who love to learn and grow, both
                personally and together as an organization. We are extemely
                driven to aquire and apply new knowledge and skills.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2>Selflessness</h2>
              <p>
                We create significant impact by volunteering. We are not asking
                for anything in return, as our motivation is primarily rooted in
                the joy of bringing tech skills to our communities. Helping
                others to learn and understand the world a little bit better is
                one of the most rewarding experiences.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 mb-4">
              <h2>Respect</h2>
              <p>
                We are open-minded and embrace diversity throughout our
                communities. We respect each others backgrounds and opinions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoreValues
