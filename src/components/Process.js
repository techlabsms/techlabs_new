import React from "react"
import process from "../assets/process.png"
import learn from "../assets/learnBlack.svg"
import orientation from "../assets/orientationBlack.svg"
import kickoff from "../assets/kickoffBlack.svg"
import hackathon from "../assets/hackathonBlack.svg"
import certificate from "../assets/certificateBlack.svg"

const Process = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>Your Learning Journey</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">
            What awaits you at TechLabs? Check out the TechLabs journey from
            start to finish!
          </p>
        </div>
      </div>
      <div className="div">
        <div className="row mt-5">
          <div className="col-12 col-md-4 d-none d-lg-block">
            <h2 className="process--title">
              <span className="process--title-number">1. </span>Orientation Week
            </h2>
            <p className="process--text">
              Inform yourself about the different learning tracks that TechLabs
              offers and choose your favorite one!
            </p>
          </div>

          <div className="col-12 d-lg-none mb-3">
            <div className="row">
              <div className="col-11">
                <div className="card">
                  <h2 className="process--title">
                    <span className="process--title-number">1. </span>
                    Orientation Week
                  </h2>
                  <div className="row">
                    <div className="col-3 text-center">
                      <img
                        src={orientation}
                        alt="learning person"
                        className="w-75 mt-3"
                      />
                    </div>
                    <div className="col-9">
                      <p className="process--text">
                        Get a personalized learning path and learn to code. Meet
                        up with other participants at community events and
                        workshops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1" />
            </div>
          </div>
          <div className="col-12 d-lg-none mb-3">
            <div className="row">
              <div className="col-1" />
              <div className="col-11">
                <div className="card">
                  <h2 className="process--title">
                    <span className="process--title-number">2. </span>Learning
                  </h2>
                  <div className="row">
                    <div className="col-3 text-center">
                      <img
                        src={learn}
                        alt="learning person"
                        className="w-75 mt-3"
                      />
                    </div>
                    <div className="col-9">
                      <p className="process--text">
                        Get a personalized learning path and learn to code. Meet
                        up with other participants at community events and
                        workshops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-lg-block">
            <h2 className="process--title">
              <span className="process--title-number">3. </span>Project Kickoff
            </h2>
            <p className="process--text">
              Choose a project that interests you and work on it in a small
              interdisciplinary team for the upcoming months!
            </p>
          </div>
          <div className="col-12 d-lg-none mb-3">
            <div className="row">
              <div className="col-11">
                <div className="card">
                  <h2 className="process--title">
                    <span className="process--title-number">3. </span>Project
                    Kickoff
                  </h2>
                  <div className="row">
                    <div className="col-3 text-center">
                      <img
                        src={kickoff}
                        alt="learning person"
                        className="w-75 mt-3"
                      />
                    </div>
                    <div className="col-9">
                      <p className="process--text">
                        Choose a project that interests you and work on it in a
                        small interdisciplinary team for the upcoming months!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1" />
            </div>
          </div>
          <div className="col-12 d-lg-none mb-3">
            <div className="row">
              <div className="col-1" />
              <div className="col-11">
                <div className="card">
                  <h2 className="process--title">
                    <span className="process--title-number">4. </span>Project
                    Hackathon
                  </h2>
                  <div className="row">
                    <div className="col-3 text-center">
                      <img
                        src={hackathon}
                        alt="learning person"
                        className="w-75 mt-3"
                      />
                    </div>
                    <div className="col-9">
                      <p className="process--text">
                        Catch up with your team and work on the project that you
                        have chosen. Get guidance from our Mentors!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-lg-none mb-3">
            <div className="row">
              <div className="col-11">
                <div className="card">
                  <h2 className="process--title">
                    <span className="process--title-number">5. </span>Completion
                    of the Project
                  </h2>
                  <div className="row">
                    <div className="col-3 text-center">
                      <img
                        src={certificate}
                        alt="learning person"
                        className="w-75 mt-3"
                      />
                    </div>
                    <div className="col-9">
                      <p className="process--text">
                        Earn a well respected certificate by presenting a
                        project and present your final results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1" />
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-lg-block">
            <h2 className="process--title">
              <span className="process--title-number">5. </span>Completion of
              the Project
            </h2>
            <p className="process--text">
              Earn a well respected certificate by presenting a project and
              present your final results.
            </p>
          </div>
        </div>
        <div className="row my-5  d-lg-block d-none">
          <div className="col-12">
            <img src={process} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-2" />
          <div className="col-12 col-md-4  d-none d-lg-block">
            <h2 className="process--title">
              <span className="process--title-number">2. </span>Learning
            </h2>
            <p className="process--text">
              Get a personalized learning path and learn to code. Meet up with
              other participants at community events and workshops.
            </p>
          </div>
          <div className="col-12 col-md-4  d-none d-lg-block">
            <h2 className="process--title">
              <span className="process--title-number">4. </span>Project
              Hackathon
            </h2>
            <p className="process--text">
              Catch up with your team and work on the project that you have
              chosen. Get guidance from our Mentors!
            </p>
          </div>
          <div className="col-2" />
        </div>
      </div>
    </>
  )
}

export default Process
