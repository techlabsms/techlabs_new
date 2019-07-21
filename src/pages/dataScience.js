import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import arrowDown from "../assets/arrowDown.png"

class dataScience extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <section className="dataScience--hero">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="display-5 mt-5 dataScience--heading">
                    <span className="dataScience--highlighted-first">Data</span>{" "}
                    <br />
                    <span className="dataScience--highlighted-second">
                      Science
                    </span>
                  </h1>
                  <p className="dataScience--intro mb-5">
                    TechLabs is the community that enables you to become a
                    Digital Entrepreneur. Exciting meetups, talks, hackathons,
                    social events, workshops and much more await you. Discover
                    TechLabs now. TechLabs is the community that enables you to
                    become a Digital Entrepreneur. Exciting meetups, talks,
                    hackathons, social events, workshops and much more await
                    you. Discover TechLabs now.
                  </p>
                  <a className="locations--hero-btn" href="#locations-techlabs">
                    <img src={arrowDown} alt="locations"/>
                  </a>
                </div>
                <div className="col-md-6" />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    )
  }
}

export default dataScience
