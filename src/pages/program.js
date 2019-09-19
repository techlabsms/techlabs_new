import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ProgrammHero from "../components/ProgrammHero"
import Academy from "../components/Academy"
import ThreeComponents from "../components/ThreeComponents"
import LearnMore from "../components/LearnMore"
import background from "../assets/p_background.png"
import Faq from "../components/Faq"
import FaqQuestion from "../components/FaqQuestion"
import Process from "../components/Process"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import DataScience from "../assets/dashboard.png"
import web from "../assets/webdevpro.png"
import AI from "../assets/ai-robot.png"
import UX from "../assets/UX.png"
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
          intro="Our program provides you with the most effective way to build domain knowledge in the tech sphere. Our blended-learning concept combines Online Learning, Project Work, and TechLabs Community Events. Discover our program now."
          background={background}
        />
        <div className="container">
          <Academy />
          <ThreeComponents />
          <section className="container mt-5 mb-5 keyBenefits">
            <h2>Key Benefits</h2>
            <div className="section-divider" />
            <p className="basicSection--sub">So, what’s in it for you?</p>
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
                      Data Science, Artificial Intelligence, or Web Development
                      using the best online resources available.
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
                      Do you have any questions during the project or your
                      learning journey? Just ask our competent mentors with many
                      years of practical experience!
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
                    <h3>Apply your knowledge and solve real-world tasks</h3>
                    <p className="keyBenefits--card-text">
                      Choose the project you are most interested in and work on
                      it in a small interdisciplinary team together with other
                      TechLabs participants. Build your own tech project
                      portfolio.
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
                      If you want to learn state-of-the-art tech skills that
                      will enable you to successfully realize your own tech
                      projects, join a tech startup, or get in touch with our
                      renowned partners – TechLabs is the right choice for you.
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
            firstLink="/web"
            secondProjectHeading="Data Science"
            secondProjectImage={DataScience}
            secondLink="/dataScience"
            thirdProjectHeading="Artificial Intelligence"
            thirdProjectImage={AI}
            thirdLink="/ai"
            fourthProjectHeading="User Experience Design"
            fourthProjectImage={UX}
            fourthLink="/ux"
          />
          <Faq>
            <FaqQuestion
              question="How do I apply for the Digital Shaper Program?"
              answer="This can be done directly on our application page. Make sure to look up the application deadline for your location."
            />
            <FaqQuestion
              question="What should I write in my application to be accepted?"
              answer="At TechLabs we want to understand why you are motivated to join our program. We are building a vibrant and interdisciplinary team, so don’t hesitate to apply independent of your study background and previous knowledge. There is no such thing as the right answer to our questions."
            />
            <FaqQuestion
              question="How can I imagine the time required?"
              answer="In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum. Our learning materials have a total duration of 50+ hours. Please also bear in mind that the project phase is usually linked to increased coordination effort with your project team. In any case, the invested time will be worth it!"
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
