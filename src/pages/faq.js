import React, { Component } from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import FaqQuestion from '../components/FaqQuestion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestion } from "@fortawesome/free-solid-svg-icons"

class faq extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <div className="row py-5">
            <h1>FAQ</h1>
          </div>
          <div className="row">
            <FaqQuestion
                question="Hier könnte deine Frage stehen"
                answer="Das ist die ANtwort"
            />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default faq
