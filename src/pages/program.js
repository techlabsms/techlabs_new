import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ProgrammHero from "../components/ProgrammHero"
import Academy from "../components/Academy"
import ThreeComponents from "../components/ThreeComponents"
import background from "../assets/p_background.png"
import benefits from "../assets/benefits.png"
import Process from '../components/Process'
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

class program extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst="Digital Shaper"
            headingSecond="Program"
            background={background}
          />
        </div>
        <div className="container">
          <Academy />
          <ThreeComponents />
          <section className="container mt-5 mb-5 keyBenefits">
            <h2>Key Benefits</h2>
            <div className="section-divider" />
            <div className="row mt-5">
              <div className="card keyBenefits--card-program">
                <div className="row">
                  <div className="col-2 text-center">
                    <img src={icon1} alt="code file" className="mt-2" />
                  </div>
                  <div className="col-10 pl-5">
                    <h3>Start to code - independent of your prior knowledge</h3>
                    <p className="keyBenefits--card-text">
                      Get a personal learning path. Learn tech skills in the
                      tracks Data Science, Artitificial Intelligence or Web
                      Development by means of the best online resources
                      available.
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 text-center">
                    <img src={icon2} alt="code file" className="mt-2" />
                  </div>
                  <div className="col-10 pl-5">
                    <h3>Build your own tech project portfolio</h3>
                    <p className="keyBenefits--card-text">
                      Choose a project idea that you find interesting and work
                      on it in an interdisciplinary group of 3-4 fellow TechLabs
                      participants. Build up a tech project portfolio.
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 text-center">
                    <img src={icon3} alt="code file" className="mt-2" />
                  </div>
                  <div className="col-10 pl-5">
                    <h3>Shape your career path</h3>
                    <p className="keyBenefits--card-text">
                      If you want to learn state-of-the-art tech skills that
                      will enable you to quickly create stunning tech projects,
                      join a tech startup or get in touch with our renowned
                      partners. TechLabs is the right way to go for.
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2 text-center">
                    <img src={icon4} alt="code file" className="mt-2" />
                  </div>
                  <div className="col-10 pl-5">
                    <h3>Learn from skilled mentors</h3>
                    <p className="keyBenefits--card-text">
                      In case you have any question during your learning journey
                      or project work, our mentors are happy to support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Process/>
        </div>
      </div>
    )
  }
}

export default program
