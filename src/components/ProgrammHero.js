import React from "react"
import clock from "../assets/clock.png"
import diploma from "../assets/diploma.png"
import profile from "../assets/profile.png"

const ProgrammHero = ({
  headingFirst,
  headingSecond,
  intro,
  showCard,
  background,
  backgroundMobil,
}) => {
  return (
    <>
      <section
        className="programmHero--hero d-none d-md-block"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="container h-100">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h1 className="display-5 mt-5 programmHero--heading">
                <span className="programmHero--highlighted-first">
                  {headingFirst}
                </span>
                <br />
                <span className="programmHero--highlighted-second">
                  {headingSecond}
                </span>
              </h1>

              <p className="programmHero--intro mb-5">{intro}</p>
            </div>
            {showCard && (
              <>
                <div className="col-md-6 d-none d-lg-block">
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
                            <img
                              src={clock}
                              alt="clock"
                              className="align-middle"
                            />
                          </div>
                          <div className="col-10">
                            <p>
                              6 months program
                              <br />
                              10 hours per week
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
                              Receive a graduation certificate <br />
                              by presenting your project
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
                            <p>Over 250 graduates</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 d-block d-lg-none">
                  <div className="card programmHero--card">
                    <h2 className="programmHero--card-heading-small text-center">
                      {headingFirst} {headingSecond}
                    </h2>
                    <div className="row mt-2">
                      <div className="col-2">
                        <img src={clock} alt="clock" width="30" />
                      </div>
                      <div className="col-4">
                        <h2 className="programmHero--card-heading-second mt-2">
                          Time
                        </h2>
                      </div>
                      <div className="col-6">
                        <p>
                          6 Months Program
                          <br />
                          10 Hours per Week
                        </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-2">
                        <img src={diploma} alt="clock" width="30" />
                      </div>
                      <div className="col-4">
                        <h2 className="programmHero--card-heading-second mt-2">
                          Certificate
                        </h2>
                      </div>
                      <div className="col-6">
                        <p>
                          Get a graduation certificate by submitting a project
                        </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-2">
                        <img src={profile} alt="clock" width="30" />
                      </div>
                      <div className="col-4">
                        <h2 className="programmHero--card-heading-second mt-2">
                          Participants
                        </h2>
                      </div>
                      <div className="col-6">
                        <p className="mt-2">Over 250 grads</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <section
        className="programmHero--hero d-md-none"
        style={{
          backgroundImage: `url(${backgroundMobil})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h1 className="display-5 mt-5 programmHero--heading-mobil">
                <span className="programmHero--highlighted-first-mobil">
                  {headingFirst}
                </span>
                <br />
                <span className="programmHero--highlighted-second-mobil">
                  {headingSecond}
                </span>
              </h1>
            </div>
          </div>
          {showCard && (
            <div className="row mt-5">
              <div className="col-12">
                <div className="programmHero--card_mobil">
                  <div className="row">
                    <div className="col-4">
                      <h1 className="programmHero--card-title_mobil">Time</h1>
                      <div className="section-divider_mobil" />
                      <p className="programmHero--card-subtitle_mobil">
                        10 Hours/ Week <br /> 6 Month Program
                      </p>
                    </div>
                    <div className="col-4">
                      <h1 className="programmHero--card-title_mobil">
                        Certificate
                      </h1>
                      <div className="section-divider_mobil" />
                      <p className="programmHero--card-subtitle_mobil">
                        Get a graduation certificate by submitting a project
                      </p>
                    </div>
                    <div className="col-4">
                      <h1 className="programmHero--card-title_mobil">
                        Participants
                      </h1>
                      <div className="section-divider_mobil" />
                      <p className="programmHero--card-subtitle_mobil">
                        Over 250 grads
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className="row"
            style={{
              marginTop: showCard ? "35%" : "70%",
            }}
          >
            <div className="col">
              <p className="programmHero--intro mb-5">{intro}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProgrammHero
