import React from "react"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

const KeyBenefits = () => {
  return (
    <Container>
      <Heading heading="Key Benefits" subheading="So, what’s in it for you?" />
      <div className="row mt-5">
        <div className="card keyBenefits--card mt-4">
          <div className="row">
            <div className="col-2 text-center">
              <img src={icon1} alt="code file" className="mt-2" />
            </div>
            <div className="col-10 pl-5">
              <h3>Start to code - independent of your prior knowledge</h3>
              <p className="keyBenefits--card-text">
                Get a personalized learning path. Learn tech skills in Data
                Science, Artificial Intelligence, or Web Development using the
                best online resources available.
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
                Do you have any questions during the project or your learning
                journey? Just ask our competent mentors with many years of
                practical experience!
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2 text-center">
              <img src={icon2} alt="code file" className="mt-2" />
            </div>
            <div className="col-10 pl-5">
              <h3>Apply your knowledge and solve real-world tasks</h3>
              <p className="keyBenefits--card-text">
                Choose the project you are most interested in and work on it in
                a small interdisciplinary team together with other TechLabs
                participants. Build your own tech project portfolio.
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
                If you want to learn state-of-the-art tech skills that will
                enable you to successfully realize your own tech projects, join
                a tech startup, or get in touch with our renowned partners –
                TechLabs is the right choice for you
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default KeyBenefits
