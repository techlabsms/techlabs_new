import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import WhatYouWillLearn from '../components/WhatYouWillLearn'

class dataScience extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst="Data"
            headingSecond=" Science"
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
        </div>
        <Footer />
      </>
    )
  }
}

export default dataScience
