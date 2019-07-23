import React from "react"
import Charts from "../assets/charts2.png"
import smartCity from '../assets/smartCity.png'

const Projects = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>Projects from our participants</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">
            Work on interesting project together with other participants
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading highlighted">Churn Prediction</h3>
            <div className="card-body">
              <p className="projects--text">
                The main goal was to identify customers that are likely to
                resign their mobile phone contracts. Aside from the
                resign-probabal, the team identified the impact of several
                variables.
              </p>
              <img src={Charts} alt="" />
              <button className="btn btn-primary mt-5">More information</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading"><span className="highlighted">Apartment-Price</span> <span className="highlighted">Prediction</span></h3>
            <div className="card-body">
              <p className="projects--text">
                The project team gathered apartment data through web crawling.
                They build a model which predicts based on attributes like
                number of rooms, balcony yes/no or location.
              </p>
              <img src={Charts} alt="" />
              <button className="btn btn-primary mt-5">More information</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 mt-5">
            <h3 className="text-center projects--heading"><span className="highlighted">Smart City</span></h3>
            <div className="card-body">
              <p className="projects--text">
                Analysis of the bycicle infrastructure in Münster. The team
                identified bottleneck which might slow down the traffic.
              </p>
              <img src={smartCity} alt="" />
              <button className="btn btn-primary mt-5">More information</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
