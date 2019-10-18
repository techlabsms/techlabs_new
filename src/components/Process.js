import React from "react"
import process from "../assets/process.png"
import learn from "../assets/learnBlack.svg"
import orientation from "../assets/orientationBlack.svg"
import kickoff from "../assets/kickoffBlack.svg"
import hackathon from "../assets/hackathonBlack.svg"
import certificate from "../assets/certificateBlack.svg"
import dotLine from "../assets/dotLine.svg"
import dot from "../assets/dot.svg"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"

const Process = () => {
  return (
    <Container>
      <Heading heading="Your Learning Journey" subheading="Explore the TechLabs Journey from start to finish!" />
      <div className="d-none d-lg-block">
        <div className="div">
          <div className="row">
            <div className="col-12 col-md-4 d-none d-lg-block">
              <h2 className="process--title">
                <span className="process--title-number">1. </span>Orientation
                Week
              </h2>
              <p className="process--text">
                Inform yourself about the different learning tracks that
                TechLabs offers and select your favorite one!
              </p>
            </div>

            <div className="col-12 col-md-4 d-none d-lg-block">
              <h2 className="process--title">
                <span className="process--title-number">3. </span>Project
                Kickoff
              </h2>
              <p className="process--text">
                Choose the project that interests you the most and work on it in
                a small interdisciplinary team for the upcoming months!
              </p>
            </div>

            <div className="col-12 col-md-4 d-none d-lg-block">
              <h2 className="process--title">
                <span className="process--title-number">5. </span>Completion of
                the Project
              </h2>
              <p className="process--text">
                Earn a well-respected certificate by completing your group
                project and presenting your final results.
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
                Get a personalized learning path and learn how to code. Meet up
                with other participants at local community events and workshops.
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
      </div>
      <div className="d-lg-none">
        <div className="row mt-3">
          <div className="col-3 text-center">
            <img src={orientation} alt="orientation" />
          </div>
          <div className="col-1 d-flex justify-contentstartr  align-self-stretch">
            <img src={dotLine} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">Orientation Week</h4>
            <p className="process--text-mobil">
              Inform yourself about the three Learning Tracks that TechLabs
              offers and choose your favorite track!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-center">
            <img src={learn} alt="learn" />
          </div>
          <div className="col-1  d-flex justify-content-start  align-self-stretch">
            <img src={dotLine} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">Online Course</h4>
            <p className="process--text-mobil">
              Get a personalized learning path and learn how to code. Meet up
              with other participants at local community events and workshops.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-center">
            <img src={kickoff} alt="kickoff" />
          </div>
          <div className="col-1 d-flex justify-content-start  align-self-stretch">
            <img src={dotLine} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">Project Kickoff</h4>
            <p className="process--text-mobil">
              Choose the project that interests you the most and work on it in a
              small interdisciplinary team for the upcoming months!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-center">
            <img src={hackathon} alt="hackathon" />
          </div>
          <div className="col-1 d-flex justify-content-start  align-self-stretch">
            <img src={dotLine} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">Project Hackathon</h4>
            <p className="process--text-mobil">
              Catch up with your team and work on the project that you have
              chosen. Get guidance from our Mentors!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-center">
            <img src={certificate} alt="certificate" />
          </div>
          <div className="col-1 d-flex justify-content-start  align-self-stretch">
            <img src={dot} alt="" className="h-100" />
          </div>
          <div className="col-7 ml-2">
            <h4 className="process--h4">Completion of the Project</h4>
            <p className="process--text-mobil">
              Earn a well-respected certificate by completing your group project
              and presenting your final results.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Process
