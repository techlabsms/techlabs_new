import React from "react"
import learn from "../assets/learn.png"
import standing from "../assets/standing.png";
import meeting from "../assets/meeting.png";
import code from "../assets/code.png";
import graph from "../assets/graph.png";

const Process = () => {
  return (
    <>
      <div className="row mt-5 mb-5">
        <div className="col">
          <h2>Curriculum Process</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">
            Est sint officia anim eu consectetur veniam id tempor consectetur
            labore culpa voluptate.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h3>
            <span>1. </span> Orientation Week
          </h3>
          <p>
            Inform yourself about the three Learning - Tracks that TechLabs
            offers and choose your favorite track!
          </p>
        </div>
        <div className="col-4">
          <h3>
            <span>3. </span> Project Kickoff
          </h3>
          <p>
            Inform yourself about the three Learning - Tracks that TechLabs
            offers and choose your favorite track!
          </p>
        </div>
        <div className="col-4">
          <h3>
            <span>5. </span> Completion of the Project
          </h3>
          <p>
            Inform yourself about the three Learning - Tracks that TechLabs
            offers and choose your favorite track!
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4">
          <div className="process--shapeOne text-center d-flex justify-content-center align-items-center">
            <img src={learn} alt="" className="process--shapeOne-img" />
          </div>
        </div>
        <div className="col-4">
          <div className="process--shapeTwo text-center d-flex justify-content-center align-items-center">
            <img src={meeting} alt="" className="process--shapeOne-img" />
          </div>
        </div>
        <div className="col-4">
          <div className="process--shapeThree text-center d-flex justify-content-center align-items-center">
            <img src={graph} alt="" className="process--shapeOne-img" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5 d-flex justify-content-center ">
          <div className="process--shapeFour text-center d-flex justify-content-center align-items-center">
            <img src={standing} alt="" className="process--shapeOne-img" />
          </div>
        </div>
        <div className="col-7 d-flex justify-content-center ">
          <div className="process--shapeFive text-center d-flex justify-content-center align-items-center">
            <img src={code} alt="" className="process--shapeOne-img" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <h3>
              <span>5. </span> Completion of the Project
            </h3>
            <p>
              Inform yourself about the three Learning - Tracks that TechLabs
              offers and choose your favorite track!
            </p>
          </div>
          <div className="col-6">
            <h3>
              <span>5. </span> Completion of the Project
            </h3>
            <p>
              Inform yourself about the three Learning - Tracks that TechLabs
              offers and choose your favorite track!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Process
