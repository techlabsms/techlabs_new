import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ProgrammHero from "../components/ProgrammHero"
import Academy from "../components/Academy"
import ThreeComponents from "../components/ThreeComponents"
import LearnMore from "../components/LearnMore"
import background from "../assets/p_background.png"
import Faq from "../components/Faq"
import FaqQuestion from "../components/FaqQuestion"
import benefits from "../assets/benefits.png"
import Process from "../components/Process"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import DataScience from "../assets/dashboard.png"
import web from "../assets/webdevpro.png"
import AI from "../assets/ai-robot.png"
import { Link } from "gatsby"
import Footer from "../components/Footer"

class program extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ProgrammHero
          headingFirst="Digital Shaper"
          headingSecond="Program"
          intro="Our program provides you with the most effective way to build
                domain knowledge in the tech sphere. Our blended-learning
                concept combines Online Learning, Project Work and Events within
                your Offline Community. Discover our Program now."
          background={background}
        />
        <div className="container">
          <Academy />
          <ThreeComponents />
          <section className="container mt-5 mb-5 keyBenefits">
            <h2>Key Benefits</h2>
            <div className="section-divider" />
            <div className="row mt-5">
              <div className="card keyBenefits--card-program">
                <div className="row">
                  <div className="col-md-2 text-center">
                    <img
                      src={icon1}
                      alt="code file"
                      className="mt-2 py-5 py-md-0"
                    />
                  </div>
                  <div className="col-md-10 pl-md-5">
                    <h3>Start to code - independent of your prior knowledge</h3>
                    <p className="keyBenefits--card-text">
                      Get a personalized learning path. Learn tech skills in
                      Data Science, Artificial Intelligence or Web Development
                      by means of the best online resources available
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-2 text-center">
                    <img
                      src={icon4}
                      alt="code file"
                      className="mt-2 py-5 py-md-0"
                    />
                  </div>
                  <div className="col-md-10 pl-md-5">
                    <h3>Learn from skilled mentors</h3>
                    <p className="keyBenefits--card-text">
                      Do you have questions during the projects or your learning
                      journey? Just ask our proficient mentors who have
                      long-standing practical experience!
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-2 text-center">
                    <img
                      src={icon2}
                      alt="code file"
                      className="mt-2 py-5 py-md-0"
                    />
                  </div>
                  <div className="col-md-10 pl-md-5">
                    <h3>Build your own tech project portfolio</h3>
                    <p className="keyBenefits--card-text">
                      Choose a project idea that you find interesting and work
                      on it in an interdisciplinary group of 3-4 fellow TechLabs
                      participants. Build up a tech project portfolio.
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-2 text-center">
                    <img
                      src={icon3}
                      alt="code file"
                      className="mt-2 py-5 py-md-0"
                    />
                  </div>
                  <div className="col-md-10 pl-md-5">
                    <h3>Shape your career path</h3>
                    <p className="keyBenefits--card-text">
                      If you want to learn state-of-the-art tech skills, that
                      will enable you to quickly create stunning tech projects,
                      join a tech startup or get in touch with our renowned
                      partners – TechLabs is the right choice for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Process />
          <LearnMore
            heading="Learn More"
            subheading="Get more information about the three different learning tracks!"
            firstProjectHeading="Web Development"
            firstProjectImage={web}
            secondProjectHeading="Data Science"
            secondProjectImage={DataScience}
            thirdProjectHeading="Artificial Intelligence"
            thirdProjectImage={AI}
          />
          <Faq>
            <FaqQuestion
              question="How do I apply for the Digital Shaper Program?"
              answer="This can be done directly via our application form for the respective location."
            />
            <FaqQuestion
              question="What should I write in my application to be accepted?"
              answer="At TechLabs we want to get to know you and your motivation better. Thats why its generally true that there is no right or wrong answer to the questions. Please only make sure that your answer really refers to the question. Unfortunately, we cannot evaluate important aspects that do not relate to the question."
            />
            <FaqQuestion
              question="How can I imagine the time required?"
              answer="In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum and allow for about 5 hours per week. Please also bear in mind that the project phase can mean increased coordination effort with your project team. In any case, the invested time will be worth it."
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Link to="/faq" className="btn btn-primary">
                  More Questions?
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default program
