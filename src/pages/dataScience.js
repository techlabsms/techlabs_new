import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import Faq from "../components/Faq"
import WhatYouWillLearn from "../components/WhatYouWillLearn"
import RightImageSection from "../components/RightImageSection"
import LeftImageSection from "../components/LeftImageSection"
import Partners from "../components/Partners"
import Projects from "../components/Projects"
import CallToAction from "../components/CallToAction"
import FirstImpression from "../components/FirstImpression"
import FaqQuestion from "../components/FaqQuestion"
import dsCover from "../assets/ds_cover.png"
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import accenture from "../assets/accenture.png"
import { Link } from "gatsby";
import background from "../assets/ds_background.png"

class dataScience extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst="Data"
            headingSecond=" Science"
            showCard={true}
            background={background}
            intro="Inform yourself here about our Data Science track. Start your six months learning journey with the next batch in the city of your choice. Acquire state-of-the-art tech skills by making use of our individualised tracks,  offline events and professional mentoring. Within six months you will finish a tech project and be rewarded with  a valuable digital shaper certificate."
          />
        </div>
        <div className="container">
          <WhatYouWillLearn
            intro="Data Science is a multidisciplinary domain which is in it’s core the task of finding valuable insights from data"
            first="How to apply machine learning models to solve problems like churn prediction or customer segmentation"
            second="Exploration of raw data to gain useful insights"
            third="General programming knowledge in R or Python"
            fourth="How to present your results in a structured and visually appealing way"
          />
          <RightImageSection
            heading="Why Data Science?"
            subheading="Data Scientist - The most in demand job in the 21th Century"
            text="“Data is the new oil” - a catchy phrase already said in 2006, which becomes more important during time. What makes companies like Google, Baidu or Amazon so powerful? It´s the data they possess AND the employers that are able to analyze it. 
                  The data volume that is created every year and the number of companies that want to use this growth exponentially Hence the demand for data scientists is also increasing. 
                  Data Science is a pretty versatile. Data Scientist are demanded in HealthCare, Banking, Logistics, E-Commerce and several other domains. Hence, as a data scientist you are able to explore a lot of different problems and gain important business knowledge."
            image={dsCover}
          />
          <LeftImageSection
            heading="What is Data Science"
            subheading="Learn data science - hands-on or theory - R or Python - your choice"
            text="It doesn't matter if you are a beginner or already have some experience. The program is designed so that you can choose which level of experience you want to start with, whether you want to do hands-on or theory courses and whether you prefer to program in Python or R. You decide.
            Both - the hands-on as well as theoretical - tracks include basic programming exercises at first to get to know the chosen programming language. The hands-on track is made for people who want to learn how to quickly apply machine learning algorithms to solve problems without a dive into the mathematical background. The theory track includes materials and exercises which covers the theoretical (mathematical) background of several algorithms like linear and logistic regression, neural networks or dimensionality reduction.
            The tracks also include TechLabs Notebooks where you can deepen the knowlegde and practice the skills you learned during the online courses."
            image={david}
          />
          <Partners
            heading="What our partners say"
            subheading="Read here what our partners think about the skills you learn at TechLabs!"
            quoteText="To start with pogramming is hard when done by yourself, but TechLabs is able to accelerate your learning curve by multiples."
            quoteName="Hans Schneider"
            quoteRole="Data Scientist"
            quoteCompanyLogo={accenture}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading="Get a first Impression"
            subheading="Check out our Open Curriculum"
            firstHeading="Introduction to Data Science with Python"
            firstImage={dashboard}
            firstText="Start with our free Track and learn the fundamentals with Python now and see if it’s right for you"
            firstLink="https://app.edyoucated.org/login"
            secondHeading="Introduction to Data Science with R"
            secondImage={dashboard}
            secondText="Start with our free Track and learn the fundamentals with R now and see if it’s right for you"
            secondLink="https://app.edyoucated.org/login"
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
      </>
    )
  }
}

export default dataScience
