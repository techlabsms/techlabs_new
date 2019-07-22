import React from "react"
import arrowDown from "../assets/arrowDown.png"
import clock from "../assets/clock.png"
import diploma from "../assets/diploma.png"
import profile from "../assets/profile.png"

const ProgrammHero = ({ headingFirst, headingSecond }) => {
  return (
    <>
      <section className="programmHero--hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-5 mt-5 programmHero--heading">
                <span className="programmHero--highlighted-first">
                  {headingFirst}
                </span>{" "}
                <br />
                <span className="programmHero--highlighted-second">
                  {headingSecond}
                </span>
              </h1>
              <p className="programmHero--intro mb-5">
                TechLabs is the community that enables you to become a Digital
                Entrepreneur. Exciting meetups, talks, hackathons, social
                events, workshops and much more await you. Discover TechLabs
                now. TechLabs is the community that enables you to become a
                Digital Entrepreneur. Exciting meetups, talks, hackathons,
                social events, workshops and much more await you. Discover
                TechLabs now.
              </p>
              <a className="locations--hero-btn" href="#locations-techlabs">
                <img src={arrowDown} alt="locations" />
              </a>
            </div>
            <div className="col-md-6 d-none d-sm-none d-md-block">
              <div className="card programmHero--card">
                <h2 className="programmHero--card-heading text-center">
                  {headingFirst} {headingSecond}
                </h2>
                <div className="row pl-5">
                  <div className="col">
                    <h4>Time</h4>
                    <div className="section-divider" />
                    <div className="row">
                      <div className="col-2">
                        <img src={clock} alt="clock" className="align-middle" />
                      </div>
                      <div className="col-10">
                        <p>
                          6 Months Program
                          <br />
                          10 Hours per Week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pl-5">
                  <div className="col">
                    <h4>Certificate</h4>
                    <div className="section-divider" />
                    <div className="row">
                      <div className="col-2">
                        <img
                          src={diploma}
                          alt="clock"
                          className="align-middle"
                        />
                      </div>
                      <div className="col-10">
                        <p>
                          Get a graduation certificate <br /> by submitting a
                          project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pl-5">
                  <div className="col">
                    <h4>Participants</h4>
                    <div className="section-divider" />
                    <div className="row">
                      <div className="col-2">
                        <img
                          src={profile}
                          alt="clock"
                          className="align-middle"
                        />
                      </div>
                      <div className="col-10">
                        <p>Over 250 grads</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProgrammHero
