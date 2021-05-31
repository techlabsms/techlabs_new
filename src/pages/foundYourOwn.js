import React, { Component } from "react"
import MAP from "../assets/world.png"
import PictureOne from "../assets/fyo1.png"
import PictureTwo from "../assets/pic2.png"
import PictureThree from "../assets/fyo3.png"
import ArrowsLeft from "../assets/arrows.png"
import ArrowsRight from "../assets/arrowsRight.png"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Layout/Seo"
import { FormattedMessage } from "gatsby-plugin-intl"

class foundYourOwn extends Component {
  render() {
    return (
      <Layout>
        <Seo title="Found your own" />
        <section className="foundYourOwn-hero py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 my-auto xs-margin-right">
                <h1 className="display-5 foundYourOwn--heading">
                  <FormattedMessage id="foundYourOwn.headline.text1" /> <br />
                  <span className="foundYourOwn--highlight">
                    <FormattedMessage id="foundYourOwn.headline.text2" />
                  </span>
                </h1>
                <p className="mb-4 margin-top-15 margin-bottom-2 foundYourOwn--subtitle">
                  <FormattedMessage id="foundYourOwn.subheading.text" />
                </p>
                <ul className="foundYourOwn--list mb-4">
                  <li>
                    <FormattedMessage id="foundYourOwn.list.entry1.text" />
                  </li>
                  <li>
                    <FormattedMessage id="foundYourOwn.list.entry2.text" />
                  </li>
                  <li>
                    <FormattedMessage id="foundYourOwn.list.entry3.text" />
                  </li>
                </ul>
                <h3 className="foundYourOwn--cta-first my-5">
                  <FormattedMessage id="foundYourOwn.heading3.text" />
                </h3>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid mt-4 mt-md-0 center-padding"
                  src={MAP}
                  alt="commmunity"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="foundYourOwn--cards">
          <div className="container">
            <div className="row">
              <h2 className="ml-3">
                <FormattedMessage id="foundYourOwn.challenge.heading.text1" />{" "}
                <span className="foundYourOwn--cta">
                  <FormattedMessage id="foundYourOwn.challenge.heading.text2" />{" "}
                </span>
              </h2>
            </div>
            <div className="row mt-3">
              <div className="card mb-3">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center">
                    <img src={PictureOne} className="card-img" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <p className="foundYourOwn--card-text ml-3 mr-3 mt-5">
                        <FormattedMessage id="foundYourOwn.challenge.card.text" />{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <h2 className="ml-3">
                <FormattedMessage id="foundYourOwn.initiative.heading.text1" />
                <span className="foundYourOwn--cta">
                  {" "}
                  <FormattedMessage id="foundYourOwn.initiative.heading.text2" />
                </span>
              </h2>
            </div>
            <div className="row mt-3">
              <div className="card mb-3">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="card-body ">
                      <p className="foundYourOwn--card-text mr-3 ml-3 mt-5">
                        <FormattedMessage id="foundYourOwn.initiative.card.text" />
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center">
                    <img src={PictureTwo} className="card-img" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <h2 className="ml-3">
                <FormattedMessage id="foundYourOwn.prepare.heading.text1" />{" "}
                <span className="foundYourOwn--cta">
                  <FormattedMessage id="foundYourOwn.prepare.heading.text2" />
                </span>
              </h2>
            </div>
            <div className="row mt-3">
              <div className="card mb-3">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center">
                    <img src={PictureThree} className="card-img" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <p className="foundYourOwn--card-text ml-3 mr-3 mt-3">
                        <FormattedMessage id="foundYourOwn.prepare.card.text" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="foundYourOwn--quote">
          <div className="container">
            <div className="row my-5">
              <div className="col-3">
                <img src={ArrowsLeft} alt="arrow" className="float-right" />
              </div>
              <div className="col-6">
                <h1 className="foundYourOwn--last">
                  <FormattedMessage id="foundYourOwn.wait.heading.text1" />{" "}
                  <span className="foundYourOwn--cta">
                    <FormattedMessage id="foundYourOwn.wait.heading.text2" />
                  </span>
                </h1>
              </div>
              <div className="col-3">
                <img
                  src={ArrowsRight}
                  alt="arrow"
                  className="float-left rightArrow"
                />
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row text-center mt-5">
              <div className="col">
                <a
                  className="btn btn-primary d-inline"
                  href="mailto:bizdev@techlabs.org?subject=Found your own location"
                >
                  <FormattedMessage id="foundYourOwn.calltoAction.text" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default foundYourOwn
