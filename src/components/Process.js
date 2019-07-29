import React from "react"
import process from "../assets/process.png"

const Process = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>Curriculum Process</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">Text Text Text</p>
        </div>
      </div>
      <div className="div">
        <div className="row mt-5">
          <div className="col-4">
            <h2 className="process--title">
              <span className="process--title-number">1. </span>Orientation Week
            </h2>
            <p className="process--text">
              Inform yourself about the three Learning - Tracks that TechLabs
              offers and choose your favorite track!
            </p>
          </div>
          <div className="col-4">
            <h2 className="process--title">
              <span className="process--title-number">3. </span>Project Kickoff
            </h2>
            <p className="process--text">
              Inform yourself about the three Learning - Tracks that TechLabs
              offers and choose your favorite track!
            </p>
          </div>
          <div className="col-4">
            <h2 className="process--title">
              <span className="process--title-number">5. </span>Completion of the Project
            </h2>
            <p className="process--text">
              Inform yourself about the three Learning - Tracks that TechLabs
              offers and choose your favorite track!
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12">
            <img src={process} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-2" />
          <div className="col-4">
            <h2 className="process--title">
              <span className="process--title-number">2. </span>Learning
            </h2>
            <p className="process--text">
              Inform yourself about the three Learning - Tracks that TechLabs
              offers and choose your favorite track!
            </p>
          </div>
          <div className="col-4">
            <h2 className="process--title">
              <span className="process--title-number">4. </span>Project Hackathon
            </h2>
            <p className="process--text">
              Inform yourself about the three Learning - Tracks that TechLabs
              offers and choose your favorite track!
            </p>
          </div>
          <div className="col-2" />
        </div>
      </div>
    </>
  )
}

export default Process
