import React from "react"
import ellipse from "../assets/ellipse.png"

const Dates = ({ heading, subheading, dates }) => {
  return (
    <div>
      <div className="container my-5 py-5 h-100">
        <div className="row mt-5">
          <div className="col">
            <h2>{heading}</h2>
            <div className="section-divider" />
            <p className="basicSection--sub">{subheading}</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-6 col-md-2">
            <ul className="dates--dateList">
              <li>{dates[0]}<br/><span className="d-inline d-md-none">Kick-Off for the new batch</span></li>
              <div className="text-center d-block d-md-none py-2">
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
              </div>
              <li>{dates[1]}<br/><span className="d-inline d-md-none">Social with the TechLabs Community</span></li>
               <div className="text-center d-block d-md-none py-2">
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
              </div>
              <li>{dates[2]}<br/><span className="d-inline d-md-none">Beginner-Workshop</span></li>
               <div className="text-center d-block d-md-none py-2">
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
              </div>
              <li>{dates[3]}<br/><span className="d-inline d-md-none">Kick-Off for the Project Work</span></li>
               <div className="text-center d-block d-md-none py-2">
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
              </div>
              <li>{dates[4]}<br/><span className="d-inline d-md-none">Social with the TechLabs Community</span></li>
               <div className="text-center d-block d-md-none py-2">
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
              </div>
              <li>{dates[5]}<br/><span className="d-inline d-md-none">Hackathon I / Project Day</span></li>
               <div className="text-center d-block d-md-none py-2">
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
              </div>
              <li>{dates[6]}<br/><span className="d-inline d-md-none">Hackathon II / Project Day</span></li>
               <div className="text-center d-block d-md-none py-2">
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
                <div className="div"><img src={ellipse} alt="text-center"/></div>
              </div>
              <li>{dates[7]}<br/><span className="d-inline d-md-none">Project Pitch</span></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-10 d-none d-md-block">
            <ul className="dates--list">
              <li>
                <span>Kick-Off for the new batch</span>
              </li>
              <li>
                <span>Social with the TechLabs Community</span>
              </li>
              <li>
                <span>Beginner-Workshop</span>
              </li>
              <li>
                <span>Kick-Off for the Project Work </span>
              </li>
              <li>
                <span>Social with the TechLabs Community</span>
              </li>
              <li>
                <span>Hackathon I / Project Day</span>
              </li>
              <li>
                <span>Hackathon II / Project Day</span>
              </li>
              <li>
                <span>Project Pitch</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dates
