import React, { Component } from "react"
import NavBar from "../components/Navbar"
import "../styles/_location.scss"
import "../styles/_location_muenster.scss"
import Footer from "../components/Footer"
import MS from "../assets/loc-ms.svg"
import ImgOne from "../assets/muenster_img.png"
import ImgTwo from "../assets/muenster_img_two.png"
import GIC from "../assets/googleimpact.png"
import tweet from "../assets/tweet_GIC.png"
import article from "../assets/thanks_GIC.png"
import wn from "../assets/wn.svg"
import { Helmet } from "react-helmet"
import Position from "../components/Position"

class muenster extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Helmet>
          <script src="https://embed.small.chat/TG9SCN33JGHR17BPSR.js" async />
        </Helmet>

        <body>
          <section className="container-fluid muenster">
            <section>
              <div className="location-hero-ms location-hero">
                <div>
                  <div className="col-md-9 col-lg-5 border-0 my-5 p-5 location-card">
                    <h1 className="location-title">
                      <img src={MS} alt="" /> Muenster
                    </h1>
                    <p className="text-muted batch-text">
                      Next Batch 01.10.2019
                    </p>

                    <a className="btn btn-primary mt-3 d-inline" href="/">
                      Apply now
                    </a>
                    <a className="btn btn-secondary mt-3 d-inline" href="/">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-5">
              <div className="row">
                <div className="col-9">
                  <img src={ImgOne} alt="" className="muenster--img" />
                </div>
              </div>
              <div className="row py-5">
                <div className="col-sm-0 col-md-3" />
                <div className="col-sm-12 col-md-9 text-right">
                  <img src={ImgTwo} alt="" className="muenster--img" />
                </div>
              </div>
            </section>

            <section className="py-5">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 text-left">
                  <img src={GIC} alt="" className="muenster--img" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 text-left">
                  <h1 className="section-title">
                    Google <br /> Impact <br /> Challenge
                  </h1>
                  <div className="section-divider" />
                  <p className="w-50 community-text py-3">
                    Münster - the idea has convinced: The non-profit start-up
                    "TechLabs" from Münster offers students the opportunity to
                    continue their education in the tech sector free of charge
                    in addition to their training. Their project has now
                    received an award and won 20,000 euros at the final of the
                    Google Impact Challenge in Berlin
                  </p>
                </div>
              </div>
            </section>
            <section className="py-5">
              <div className="row">
                <div className="col-6">
                  <img
                    src={tweet}
                    alt="tweet google impact challenge"
                    className="float-right "
                  />
                </div>

                <div className="col-6 ">
                  <div className="locations--card w-50">
                    <img
                      className="card-img"
                      src={article}
                      alt="testimonial"
                    />

                    <div className="row mt-3">
                      <div className="col-8 ">
                        <h3 className="text-muted mt-4 ml-2 pr-3 d-inline-block align-middle">
                          Read more about the Google Impact Challenge
                        </h3>
                      </div>
                      <div className="col-4 text-right">
                        <img
                          src={wn}
                          alt="icon"
                          className="locations--icon mr-4 mt-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="container">
            <section className="py-5">
              <div className="row">
                <div className="col-6">
                  <h2 className="section-title">Open positions</h2>
                  <div className="section-divider" />
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-5">
                  <Position
                    emoji="💻"
                    jobTitle="Full Stack Web Developer"
                    jobDescription="Cillum in reprehenderit magna sit. Duis incididunt ex magna deserunt mollit aliquip consectetur in culpa ut reprehenderit incididunt mollit. Dolor ex ullamco sint duis quis proident elit adipisicing ullamco deserunt pariatur duis. Exercitation officia ipsum incididunt duis labore ullamco sit qui amet anim cupidatat."
                  />
                  <Position 
                    emoji="📊"     
                    jobTitle="Sales Coordinator"
                    jobDescription="Deserunt anim occaecat proident mollit ullamco esse velit minim. Culpa duis laborum mollit laboris. Velit mollit laboris nulla ad eu laborum veniam aliquip voluptate esse velit. Eu proident sunt Lorem fugiat nulla ex."             
                  />
                  <Position/>
                </div>
              </div>
            </section>
          </section>
          <Footer />
        </body>
      </>
    )
  }
}

export default muenster
