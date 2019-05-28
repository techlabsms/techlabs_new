import React from "react"
import Logo from "../assets/tl-logo-white.svg"
import PayPal from '../assets/paypal.svg';

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container text-center text-lg-left footer-content">
          <div className="row d-flex justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
            <div className="d-flex flex-column col-10 col-lg-5 pl-0">
              <img src={Logo} alt="" className="footer-img" />
              <p className="mt-3">We build. Digital. Shapers</p>
            </div>
            <div>
              <h6>About us</h6>
              <ul className="list-inline ml-0">
                <li className="py-1">
                  <a href="/">Team</a>
                </li>
                <li className="py-1">
                  <a href="/">Partner</a>
                </li>
                <li classNameName="py-1">
                  <a href="/">Carrer</a>
                </li>
                <li className="py-1">
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h6>Program</h6>
              <ul className="list-inline ml-">
                <li className="py-1">
                  <a href="/">Data Science</a>
                </li>
                <li className="py-1">
                  <a href="/">Web Development</a>
                </li>
                <li className="py-1">
                  <a href="/">Artificial Intelligence</a>
                </li>
              </ul>
            </div>
            <div>
              <h6>Terms</h6>
              <ul className="list-inline ml-0">
                <li className="py-1">
                  <a href="/">Privacy Policy</a>
                </li>
                <li className="py-1">
                  <a href="/">Imprint</a>
                </li>
              </ul>
            </div>
            <div className="w-100 border-top my-3" />
          </div>
          <div className="row mt-3">
            <div className="col-md-6 mt-2">
              <ul className="">
                <li className="d-inline mr-5">Muenster</li>
                <li className="d-inline mr-5">Copenhagen</li>
                <li className="d-inline">Barcelona</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={PayPal} alt="PayPal Button" className="footer-paypal"/>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
