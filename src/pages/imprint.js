import { GatsbySeo } from "gatsby-plugin-next-seo"
import React, { Component } from "react"
import Layout from "../components/Layout/Layout"

class imprint extends Component {
  render() {
    return (
      <Layout>
        <GatsbySeo noindex={true} />
        <div className="container">
          <h1 className="mt-3">Impressum</h1>
          <p>
            Angaben gem. § 5 TMG. <br />
            <br />
            Betreiber und Kontakt: <br />
            <br />
            <h6>TechLabs e. V.</h6>
            Hafenweg 16
            <br />
            48155 Münster <br />
            <br />
            E-Mail-Adresse: info@techlabs.org <br />
            <br />
            Vorstand: David Middelbeck, Marius Vennemann, Rebecca Janßen, Jana
            Jeggle, Eric Grunenberg
            <br />
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
      </Layout>
    )
  }
}

export default imprint
