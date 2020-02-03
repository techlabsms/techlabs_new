import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import RightImageSectionHeading from "../components/RightImageSectionHeading"
import PartnerLogos from "../components/PartnerLogos"
import GIC from "../assets/gic.svg"
import KeyBenefits from "../components/KeyBenefits"
import Quote from "../components/Quote"
import firstImage from "../assets/startPage.png"
import accenture from "../assets/accenture.png"
import westfalen from "../assets/westfalen.png"
import sopra from "../assets/sopra.png"
import ernstYoung from "../assets/ernst-young-ey.png"
import gic from "../assets/gic_team.png"
import nils from "../assets/nils.png"
import { Link } from "gatsby"
import "../styles/_main.scss"
import "../styles/bootstrap.min.css"
import Heading from "../components/smallComponents/Heading"
import Container from "../components/smallComponents/Container"
import Button from "../components/smallComponents/Button"

class index extends React.Component {
  componentDidMount() {
    console.log(
      "%cTechLabs",
      "font-family:'helvetica'; display: block;font-weight:bold; font-size:48px;"
    )
    console.log(
      "%cPassionated about Tech? Become a Co-Founder of TechLabs => https://techlabs.org/foundYourOwn",
      "font-family:'helvetica'; font-weight:100;"
    )
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <Navbar />

          <section className="py-5 padding-top-15">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 my-auto xs-margin-right">
                  <h1 className="display-4">
                    We Build.
                    <br />
                    <span className="highlighted lh-90">Digital. </span>
                    <br />
                    <span className="highlighted lh-90">Shapers.</span>
                  </h1>
                  <p className="index--lead mb-4 margin-top-15 margin-bottom-2 text-justify">
                    Learn Data Science, Artificial Intelligence, Web Development
                    and User Experience by means of our pioneering Digital
                    Shaper program that combines online learning, project work
                    as well as community events at one of our locations{" "}
                    <span className="text-bold">
                      - and that completely free for everyone!
                    </span>
                  </p>
                  <div className="mt-5">
                    <Button text="Program" primary={false} link="/program" />
                    <Button text="About" primary={true} link="/about" />
                  </div>
                </div>
                <div className="col-md-7 d-none d-lg-block">
                  <img
                    className="img-fluid mt-5 mt-md-0 center-padding"
                    src={firstImage}
                    alt="commmunity"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="gic py-5">
            <div className="container center">
              <img className="gic-badge" src={GIC} alt="gic" />
            </div>
            <PartnerLogos
              logoOne={accenture}
              linkPartnerOne="https://www.accenture.com/de-de/interactive-index"
              logoTwo={sopra}
              linkPartnerTwo="https://www.soprasteria.de/de"
              logoThree={westfalen}
              linkPartnerThree="https://westfalen.com/de/de/privatkunden/"
              logoFour={ernstYoung}
              linkPartnerFour="https://www.ey.com/de_de"
            />
          </section>

          <section className="py-5 my-5 wwo">
            <div className="container">
              <Heading
                heading="What We Offer"
                subheading="Check out what TechLabs has in store for you!"
              />
              <div className="row">
                <div className="col-lg-5 d-none d-md-block">
                  <div className="d-flex flex-column h-100 p-4" />
                </div>
                <div className="d-flex col-lg-7 flex-wrap">
                  <div className="p-2 col-sm-6 mt-5">
                    <Link to="/program" className="card-a">
                      <div className="card h-100">
                        <h1 className="card-title">16</h1> <br />
                        <p className="card-subtitle">weeks of coding</p>
                        <p className="text-muted">
                          Within 12-16 weeks you will gain insights into the
                          world of coding and will be able to master tech
                          through our blended learning concept.
                        </p>
                        <span className="card-discover">
                          > Discover our program
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2 col-sm-6 mt-5">
                    <Link to="/program" className="card-a">
                      <div className="card h-100">
                        <h1 className="card-title">4</h1> <br />
                        <p className="card-subtitle">digital tracks</p>
                        <p className="text-muted pb-4">
                          With TechLabs you can learn state-of-the-art tech in
                          AI, Web Development, Data Science, and UX.
                        </p>
                        <span className="card-discover">
                          > Discover our tracks
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2 col-sm-6 mt-5">
                    <Link to="/locations" className="card-a">
                      <div className="card h-100">
                        <h1 className="card-title">300+</h1> <br />
                        <p className="card-subtitle">community members</p>
                        <p className="text-muted">
                          Our growing community connects 300+ people motivated
                          to learn tech – online and offline.
                          <br />
                          <br />
                        </p>
                        <span className="card-discover">
                          > Discover our community
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2 col-sm-6 mt-5">
                    <Link to="/locations" className="card-a">
                      <div className="card h-100">
                        <h1 className="card-title">6</h1> <br />
                        <p className="card-subtitle">locations</p>
                        <p className="text-muted pb-4">
                          We currently have local communities in Muenster,
                          Barcelona, Copenhagen, Berlin, Curitiba and Medellín.
                        </p>
                        <span className="card-discover">
                          > Discover our locations
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Slider />

          <RightImageSectionHeading
            heading="Award-Winning Concept"
            subheading="Google Impact Challenge 2018!"
            text="TechLabs - the idea has convinced: The non-profit startup TechLabs offers students the opportunity to broaden and deepen their tech skills – all free of charge! In 2018, the project was awarded as TechLabs won 20,000 EUR in the final of the Google Impact Challenge in Berlin. Today over 100 people joined TechLabs on a voluntary basis to spread the idea."
            image={gic}
            hasButton={true}
            buttonText="Read more"
            buttonLink="https://www.wn.de/Muenster/3342867-Muensteraner-bei-Google-Impact-Challenge-ausgezeichnet-Non-Profit-Startup-Techlabs-gewinnt-20.000-Euro-Foerderpreis"
          />
          <Quote
            heading="The TechLabs Journey"
            subheading="What awaits you at TechLabs"
            text="Get up to speed learning tech skills in one semester by means
                  of our program that combines Online Learning, Project Work,
                  and TechLabs Community Meetings. Independent of the background
                  and prior knowledge - anyone can participate and learn
                  tech-skills. At TechLabs we don’t want money to be an issue.
                  That’s why our programs are free of charge. We help you to
                  complete your own tech project and qualify for tech roles."
            photo={nils}
            name="Nils Bahr"
            job="Head of Product @ TechLabs"
          />
          <KeyBenefits />
          <section className="container-fluid mt-5 background h-100 py-5">
            <Container>
              <Heading
                heading="Learn More"
                subheading="Check out our locations and our Digital Shaper Program!"
              />
              <div className="row h-100">
                <div className="col-md-6 mt-3">
                  <Link to="/locations" className="noDec">
                    <div className="card">
                      <h2 className="mt-3 color-red">Locations →</h2>
                      <p className="color-gl">
                        Take a look at what is currently happening in our local
                        tech communities. Your town is still missing? Bring
                        TechLabs to your city, let’s build Digital Shapers
                        together.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 mt-3">
                  <Link to="/program" className="noDec">
                    <div className="card">
                      <h2 className="mt-3 color-red">Program →</h2>
                      <p className="color-gl">
                        Not sure which learning track is the right one for you?
                        Check out our program and get more information about
                        each of our tracks.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        </div>
        <Footer />
      </>
    )
  }
}

export default index
