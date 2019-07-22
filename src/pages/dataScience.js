import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import WhatYouWillLearn from "../components/WhatYouWillLearn"
import RightImageSection from "../components/RightImageSection"
import graph from "../assets/graphs.png"

class dataScience extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero headingFirst="Data" headingSecond=" Science" />
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
            image={graph}
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default dataScience
