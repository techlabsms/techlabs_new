import React, { Component } from "react"
import ProgrammHero from "../components/program/ProgrammHero"
import Faq from "../components/shared/Faq"
import WhatYouWillLearn from "../components/program/WhatYouWillLearn"
import RightImageSection from "../components/shared/RightImageSection"
import LeftImageSection from "../components/shared/LeftImageSection"
import Projects from "../components/program/Projects"
import CallToAction from "../components/shared/CallToAction"
import FirstImpression from "../components/foundYourOwn/FirstImpression"
import FaqQuestion from "../components/shared/FaqQuestion"
import dsCover from "../assets/ds_cover.png"
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import { Link } from "gatsby"
import background from "../assets/ds_background.png"
import backgroundMobil from "../assets/courseMobil.png"
import Layout from "../components/Layout/Layout"

class dataScience extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <ProgrammHero
            headingFirst="Data"
            headingSecond=" Science"
            showCard={true}
            background={background}
            intro="Inform yourself here about our Data Science track. Start your six months learning journey as a part of the next batch in the city of your choice. Acquire state-of-the-art tech skills by using one of our individualized tracks, local events, and professional mentoring. Within six months you will finish a tech project and be rewarded with our Digital Shaper certificate."
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading="Why Data Science?"
            subheading="Data Scientist - The most in demand job in the 21st century!"
            text="“Data is the new oil” - a catchy phrase already said in 2006, which becomes more important over time. What makes companies like Google, Baidu or Amazon so powerful? It’s the amount of data they possess and the employees that are able to analyze it. 
                  The data volume that is created as well as the number of companies that want to use this data growth exponentially every year. There are beautiful and interesting insights hidden in this sea of ever increasing data, waiting to be discovered and Data Science is the key to decipher all these hidden insights. Therefore the demand for data scientists is increasing. 
                  Data Science is a pretty versatile field. Data Scientist are demanded in almost ever field you can imagine, such as HealthCare, Banking, Logistics, E-Commerce and many more. Hence, as a data scientist you are able to solve a lot of different problems, gain important knowledge and deliver value to other people and your business."
            image={dsCover}
          />
          <WhatYouWillLearn
            intro="Data Science is a multidisciplinary domain. In it’s core it is the task of finding valuable insights from data."
            first="How to apply machine learning models to solve problems like churn prediction or customer segmentation"
            second="Exploration of raw data to gain useful insights"
            third="General programming knowledge in R or Python"
            fourth="How to present your results in a structured and visually appealing way"
          />
          <LeftImageSection
            heading="More about the Track"
            subheading="Learn data science - hands-on or theory - R or Python - your choice"
            text="It doesn't matter if you are a beginner or already have some experience. The program is designed so that you can choose which level of experience you want to start with, whether you want to do hands-on or theory courses and whether you prefer to program in Python or R. You decide.
                  Both - the hands-on as well as theoretical - tracks include basic programming exercises at first to get to know the chosen programming language. The hands-on track is made for people who want to learn how to quickly apply machine learning algorithms to solve problems without a dive into the mathematical background. The theory track includes materials and exercises which covers the theoretical (mathematical) background of several algorithms like linear and logistic regression, neural networks or dimensionality reduction.
                  The tracks also include TechLabs Notebooks where you can deepen the knowlegde and practice the skills you learned during the online courses."
            image={david}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading="Get a First impression"
            subheading="Check out our curriculum that is open for everybody!"
            firstHeading="Introduction to Data Science with Python"
            firstImage={dashboard}
            firstText="Start with our free track and learn the fundamentals of Data Science with Python now and see if you want to join the Digital Shaper Program!"
            firstLink="https://app.edyoucated.org/login"
            secondHeading="Introduction to Data Science with R"
            secondImage={dashboard}
            secondText="Start with our free Track and learn the fundamentals of Data Science with R now and see if you want to join the Digital Shaper Program!"
            secondLink="https://app.edyoucated.org/login"
          />
          <Faq>
            <FaqQuestion
              question="How do I apply for the Digital Shaper Program?"
              answer="This can be done directly on our application page. Make sure to look up the application deadline for your location."
            />
            <FaqQuestion
              question="What do you look for in an applicant?"
              answer="At TechLabs we want to understand why you are motivated to join our program. We are building a vibrant and interdisciplinary team, so don’t hesitate to apply independent of your study background and previous knowledge. There is no such thing as the right answer to our questions."
            />
            <FaqQuestion
              question="How much time is required to become Digital Shaper?"
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
      </Layout>
    )
  }
}

export default dataScience
