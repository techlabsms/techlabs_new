import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { Link } from "gatsby"
import "../styles/_main.scss"

class locations extends Component {
  render() {
    return (
      <>
        <Navbar />

        <body>
          <div className="container-fluid">
            <section className="section-picture">
              <div className="container py-5">
                <div className="row margin-top-bot padding-location">
                  <div className="col-md-9 col-lg-6 card border-0 my-5 p-5 ml-auto text-center">
                    <h1 className="mt-4 mb-3">
                      Discover our locations
                    </h1>
                    <p>
                      Our mission is not to outsell Hooli with a product like
                      their latest Box 3. We are not in it for the money - we
                      are in it to make the whole world decentralized.
                    </p>
                    <a className="btn btn-primary" href="#">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-5">
              <div className="container text-center">
                <h2 className="mb-5">
                  Great Companies that already use PiperNet
                </h2>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg"
                        alt=""
                      />
                      <div className="card-body">
                        <h5 className="card-title">Pied Piper</h5>
                        <p className="card-text">
                          We are constantly looking for new partners to migrate
                          onto the PiperNet. The future of the internet is here
                          - venture towards it with Pied Piper!
                        </p>
                        <a href="#">Read case</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg"
                        alt=""
                      />
                      <div className="card-body">
                        <h5 className="card-title">Pied Piper</h5>
                        <p className="card-text">
                          We are constantly looking for new partners to migrate
                          onto the PiperNet. The future of the internet is here
                          - venture towards it with Pied Piper!
                        </p>
                        <a href="#">Read case</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg"
                        alt=""
                      />
                      <div className="card-body">
                        <h5 className="card-title">Pied Piper</h5>
                        <p className="card-text">
                          We are constantly looking for new partners to migrate
                          onto the PiperNet. The future of the internet is here
                          - venture towards it with Pied Piper!
                        </p>
                        <a href="#">Read case</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg"
                        alt=""
                      />
                      <div className="card-body">
                        <h5 className="card-title">Pied Piper</h5>
                        <p className="card-text">
                          We are constantly looking for new partners to migrate
                          onto the PiperNet. The future of the internet is here
                          - venture towards it with Pied Piper!
                        </p>
                        <a href="#">Read case</a>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary mt-3" href="#">
                  View all PiperNet clients
                </a>
              </div>
            </section>
          </div>
        </body>

        <Footer>
        </Footer>
      </>
    )
  }
}

export default locations
