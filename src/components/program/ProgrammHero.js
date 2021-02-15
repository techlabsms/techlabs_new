import React from "react"

// plugins && external
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import ArrowButton from "../smallComponents/ArrowButton"

// assets
import clock from "../../assets/clock.png"
import diploma from "../../assets/diploma.png"
import profile from "../../assets/profile.png"

const ProgrammHero = ({
  headingFirst,
  headingSecond,
  intro,
  showCard,
  background,
  backgroundMobil,
  href,
  secondintro,
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
                <span className="programmHero--highlighted-first highlighted">
                  {headingFirst}
                </span>
                <br />
                <span className="programmHero--highlighted-second">
                  {headingSecond}
                </span>
              </h1>

              <p className="programmHero--intro">{intro}</p>
              {secondintro && (
                <p className="programmHero--intro-second mb-5">{secondintro}</p>
              )}
              {href && <ArrowButton href={href} />}
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
                        <h4>
                          <FormattedMessage
                            id={"programmHero.info.time.heading"}
                          />
                        </h4>
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
                              <FormattedMessage
                                id={"programmHero.info.time.first"}
                              />
                              <br />
                              <FormattedMessage
                                id={"programmHero.info.time.second"}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row pl-5">
                      <div className="col">
                        <h4>
                          <FormattedMessage
                            id={"programmHero.info.certificate.heading"}
                          />
                        </h4>
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
                              <FormattedMessage
                                id={"programmHero.info.certificate.first"}
                              />{" "}
                              <br />
                              <FormattedMessage
                                id={"programmHero.info.certificate.second"}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row pl-5">
                      <div className="col">
                        <h4>
                          <FormattedMessage
                            id={"programmHero.info.participants.heading"}
                          />
                        </h4>
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
                            <p>
                              <FormattedMessage
                                id={"programmHero.info.participants.long"}
                              />
                            </p>
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
                          <FormattedMessage
                            id={"programmHero.info.time.heading"}
                          />
                        </h2>
                      </div>
                      <div className="col-6">
                        <p>
                          <FormattedMessage
                            id={"programmHero.info.time.first"}
                          />
                          <br />
                          <FormattedMessage
                            id={"programmHero.info.time.second"}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-2">
                        <img src={diploma} alt="clock" width="30" />
                      </div>
                      <div className="col-4">
                        <h2 className="programmHero--card-heading-second mt-2">
                          <FormattedMessage
                            id={"programmHero.info.certificate.heading"}
                          />
                        </h2>
                      </div>
                      <div className="col-6">
                        <p>
                          <FormattedMessage
                            id={"programmHero.info.certificate.short"}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-2">
                        <img src={profile} alt="clock" width="30" />
                      </div>
                      <div className="col-4">
                        <h2 className="programmHero--card-heading-second mt-2">
                          <FormattedMessage
                            id={"programmHero.info.participants.heading"}
                          />
                        </h2>
                      </div>
                      <div className="col-6">
                        <p className="mt-2">
                          <FormattedMessage
                            id={"programmHero.info.participants.short"}
                          />
                        </p>
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
                      <h1 className="programmHero--card-title_mobil">
                        <FormattedMessage
                          id={"programmHero.info.time.heading"}
                        />
                      </h1>
                      <div className="section-divider_mobil" />
                      <p className="programmHero--card-subtitle_mobil">
                        <FormattedMessage
                          id={"programmHero.info.time.second"}
                        />{" "}
                        <br />{" "}
                        <FormattedMessage id={"programmHero.info.time.first"} />
                      </p>
                    </div>
                    <div className="col-4">
                      <h1 className="programmHero--card-title_mobil">
                        <FormattedMessage
                          id={"programmHero.info.certificate.heading"}
                        />
                      </h1>
                      <div className="section-divider_mobil" />
                      <p className="programmHero--card-subtitle_mobil">
                        <FormattedMessage
                          id={"programmHero.info.certificate.short"}
                        />
                      </p>
                    </div>
                    <div className="col-4">
                      <h1 className="programmHero--card-title_mobil">
                        <FormattedMessage
                          id={"programmHero.info.participants.heading"}
                        />
                      </h1>
                      <div className="section-divider_mobil" />
                      <p className="programmHero--card-subtitle_mobil">
                        <FormattedMessage
                          id={"programmHero.info.participants.short"}
                        />
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
