import React, { Component } from "react"
import Arrow from "../assets/arrow.svg"
import Simon from "../assets/simon.png"
import Huemeyra from "../assets/huemeyra.png"
import Clara from "../assets/clara.png"
import Quote from '../assets/quote.png'

class Slider extends Component {
  state = {
    testimonials: [
      {
        name: "Simon, IT-Admin",
        text:
          "I already come from the IT sector, but I am not learning programming there. That's why I came to TechLabs. The Web Development Track provides me with the necessary knowledge and the certificate is particularly valuable to me.",
        image: Simon,
      },
      {
        name: "Hümeyra, IT-Admin",
        text:
          "Consectetur nulla officia duis irure ad adipisicing ea cupidatat. Laborum sunt sunt ea est laboris consectetur officia mollit. Aute eu occaecat amet laboris non cupidatat mollit nostrud amet. Est consectetur quis consequat enim velit nisi mollit ad magna nisi nulla voluptate. Commodo enim tempor dolor pariatur enim eu magna.",
        image: Huemeyra,
      },
      {
        name: "Clara, IT-Admin",
        text:
          "I already come from the IT sector, but I am not learning programming there. That's why I came to TechLabs. The Web Development Track provides me with the necessary knowledge and the certificate is particularly valuable to me.",
        image: Clara,
      },
    ],
    number: 0,
  }
  render() {
    const { testimonials, number } = this.state
    return (
      <>
        <section className="py-5">
          <div className="container">
            <h1 className="section-title">Our community</h1>
            <div className="section-divider" />
            <div className="row">
              <div className="col-12 col-lg-5 text-center">
                <img src={Simon} alt="" className="mt-3"/>
              </div>
              <div className="col-md-1 text-center d-none d-lg-block" >
                <img src={Quote} alt=""className="mt-5 w-50"/>
              </div>
              <div className="col-12 col-lg-6">
                <p className="slider--pre">TESTIMONIALS</p>
                <h2 className="slider--title mt-4"> 
                  TechLabs taught me <br />
                  how to code
                </h2>
                <p className="slider--text mt-5"> 
                  I already have an IT background, however, I have not learnt
                  coding before TechLabs. That's why I came to TechLabs. The Web
                  Development Track provides me with the necessary knowledge and
                  the certificate is particularly valuable to me.
                </p>
                <p className="slider--name mt-5">Simon<br/>
                    <span className="slider--role">IT-Specialist</span>
                </p>
                <button className="slider--button mt-2"><span role="emoji">👍🏻</span> read about Simon´s project</button>
                <div className="row mt-5">
                    <div className="col-6 d-flex">
                        <span>01</span>
                        <div className="slider--status">
                            <div className="slider--status-inner"></div>                        </div>
                        <span>04</span>
                    </div>
                    <div className="col-6 text-right">
                        <img src={Arrow} alt="" className="slider--arrow slider--arrow-left"/>
                        <img src={Arrow} alt="" className="slider--arrow"/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Slider
