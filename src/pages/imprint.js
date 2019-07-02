import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

class imprint extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1 className="mt-3">Impressum</h1>
          <p>
            Angaben gem. § 5 TMG <br />
            <br />
            Betreiber und Kontakt: <br />
            <br />
            <h6>TechLabs e. V.</h6>
            c/o David Middelbeck <br />
            Goebenstr. 14 <br />
            48151 Münster <br />
            <br />
            E-Mail-Adresse: info@tech-labs.de <br />
            <br />
            Vorstand: David Middelbeck, Marius Vennemann, Jonas Wagner, Nils
            Bahr <br />
            Register und Registernummer: Amtsgericht Münster VR 5787 <br />
            <br />
            Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO: <br />
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung <br />
            (OS) bereit, die Sie unter{" "}
            <a href="http://ec.europa.eu/consumers/odr/">
              http://ec.europa.eu/consumers/odr/
            </a>
          </p>
        </div>
        <Footer/>
      </>
    )
  }
}

export default imprint
