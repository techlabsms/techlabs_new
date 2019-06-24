import React, { Component } from "react"
import get from "lodash/get"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faInstagram,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import Logo from "../assets/tl-logo.svg"

class location extends Component {
  render() {
    const location = get(this.props, "data.contentfulLocationPage")
    return (
      <div>
        <Navbar />
        <section className="container-fluid">
          <section>
            <div
              className="location-hero-ms location-hero"
              style={{ backgroundImage: `url(${location.image.file.url})` }}
            >
              <div>
                <div className="col-md-9 col-lg-5 border-0 my-5 p-5 location-card">
                  <h1 className="location-title">
                    <img src={location.icon.file.url} alt="" />{" "}
                    {location.heading}
                  </h1>
                  <p className="text-muted batch-text">
                    Next Batch {location.nextBatchDate}
                  </p>
                  {location.isOpen ? (
                    <div>
                      <a className="btn btn-primary mt-3 d-inline" href="/">
                        Apply now
                      </a>
                      <a className="btn btn-secondary mt-3 d-inline" href="/">
                        Contact us
                      </a>
                    </div>
                  ) : (
                    <a className="btn btn-secondary mt-3 d-inline" href="/">
                      Contact us
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="py-3">
            <div className="container">
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex mt-3">
                  <p className="mb-0 small text-muted">Follow us</p>
                </div>

                <div className="d-flex mb-3 mt-2">
                  {location.facebookUrl !== null && (
                    <a href={location.facebookUrl}>
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        size="2x"
                        className="locations--icon mr-3"
                      />
                    </a>
                  )}
                  {location.instagramUrl !== null && (
                    <a href={location.instagramUrl}>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        className="locations--icon mr-3"
                      />
                    </a>
                  )}

                  {location.twitterUrl !== null && (
                    <a href={location.twitterUrl}>
                      <FontAwesomeIcon
                        icon={faTwitterSquare}
                        size="2x"
                        className="locations--icon mr-3"
                      />
                    </a>
                  )}

                  {location.linkedinUrl !== null && (
                    <a href={location.linkedinUrl}>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="2x"
                        className="locations--icon"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container text-center">
              <h1 className="mb-4">
                <span className="locations--tech">Tech</span>Labs x{" "}
                {location.heading}
              </h1>
              <div>
                {location.usesFirstEntry && (
                  <div className="row align-items-center text-md-left mb-5">
                    <div className="col-md-6 order-1 order-md-0">
                      <img
                        className="img-fluid"
                        src={location.firstEntryImage.file.url}
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 mb-4 mb-md-0">
                      <h3 className="mb-4">{location.firstEntryTitle}</h3>
                      <p>{location.firstEntryText}</p>
                    </div>
                  </div>
                )}
                {location.usesSecondEntry && (
                  <div className="row align-items-center text-md-right mb-5">
                    <div className="col-md-6 order-1">
                      <img
                        className="img-fluid"
                        src={location.secondEntryImage.file.url}
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 mb-4 mb-md-0 order-0">
                      <h3 className="mb-4">{location.secondEntryTitle}</h3>
                      <p>{location.secondEntryText}</p>
                    </div>
                  </div>
                )}
                {location.usesThirdEntry && (
                  <div className="row align-items-center text-md-left mb-5">
                    <div className="col-md-6 order-1 order-md-0">
                      <img
                        className="img-fluid"
                        src={location.thirdEntryImage.file.url}
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 mb-4 mb-md-0">
                      <h3 className="mb-4">{location.thirdEntryTitle}</h3>
                      <p>
                        {
                          location.thirdEntryText
                        }
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h2 className="mb-4">Recent articels</h2>
              <div className="row">
                <div className="col-lg-7">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-5 mb-4 mb-md-0">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-md-7">
                          <a className="badge badge-primary px-2" href="#">
                            Label
                          </a>
                          <h5 className="card-title my-2">
                            <a href="#">Why I'm the Best Programmer Ever</a>
                          </h5>
                          <p className="small text-muted">
                            I feel like not everybody outside of Pied Piper
                            knows it, so I wanted to make it clear why I'm the
                            best programmer in the world.
                          </p>
                          <a href="#">Read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-5 mb-4 mb-md-0">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col-md-7">
                          <a className="badge badge-primary px-2" href="#">
                            Label
                          </a>
                          <h5 className="card-title my-2">
                            <a href="#">Why Strong Tea Isn't Good For CEOs</a>
                          </h5>
                          <p className="small text-muted">
                            An exhaustive guide about how different teas can
                            affect a CEO during their workday.
                          </p>
                          <a href="#">Read more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card">
                    <a href="#">
                      <img
                        className="card-img-top"
                        src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg"
                        alt=""
                      />
                    </a>
                    <div className="card-body">
                      <a className="badge badge-primary px-2" href="#">
                        Label
                      </a>
                      <h5 className="card-title my-2">
                        <a href="#">How Our ICO Almost Failed</a>
                      </h5>
                      <p className="small text-muted">
                        This is a short story about how we uncovered an insane
                        problem with our ICO, fixed it, and still managed to
                        secure vast funding.
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h2 className="mb-5 text-center">Thousands of happy companies</h2>
              <div className="row">
                <div className="col-6 col-sm-4 col-md-2 mb-4">
                  <img
                    className="img-fluid"
                    src="https://bootstrapshuffle.com/placeholder/logos/gitscape.svg"
                    alt=""
                  />
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-4">
                  <img
                    className="img-fluid"
                    src="https://bootstrapshuffle.com/placeholder/logos/k-hole.svg"
                    alt=""
                  />
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-4">
                  <img
                    className="img-fluid"
                    src="https://bootstrapshuffle.com/placeholder/logos/tholio.svg"
                    alt=""
                  />
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-4">
                  <img
                    className="img-fluid"
                    src="https://bootstrapshuffle.com/placeholder/logos/plucky.svg"
                    alt=""
                  />
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-4">
                  <img
                    className="img-fluid"
                    src="https://bootstrapshuffle.com/placeholder/logos/1stsight.svg"
                    alt=""
                  />
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-4">
                  <img
                    className="img-fluid"
                    src="https://bootstrapshuffle.com/placeholder/logos/realweb.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
              <div className="row">
                <div className="col-lg-6">
                  <h4 className="mb-3">Our product</h4>
                  <div className="accordion" id="faq-accordion-left-05">
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-left1-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-left1-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-left1-05"
                        >
                          How is a decentralized network different from the
                          traditional web?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-left1-05"
                        aria-labelledby="faq-heading-left1-05"
                        data-parent="#faq-accordion-left-05"
                      >
                        <p>
                          Decentralization is a key aspect of PiperNet.
                          Traditionally, to access data on a website, you needed
                          to connect to a single server containing that data.
                          This method of storing data makes it easy for third
                          parties to get access to it, corrupt it or even delete
                          it. In PiperNet it is securely stored on multiple
                          devices in the network, which makes it harder to hack
                          and interfere with your data.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-left2-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-left2-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-left2-05"
                        >
                          Why shouldn't I just store my data on a Hooli Box?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-left2-05"
                        aria-labelledby="faq-heading-left2-05"
                        data-parent="#faq-accordion-left-05"
                      >
                        <p>
                          That's just the thing - if you store your data in a
                          single place, like Gavin Belsons' poorly-made server
                          box, your data will very susceptible to hacking.
                          Whereas on PiperNet, your data is safe with many
                          copies to back it up from.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-left3-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-left3-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-left3-05"
                        >
                          What makes PiperNet so safe?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-left3-05"
                        aria-labelledby="faq-heading-left3-05"
                        data-parent="#faq-accordion-left-05"
                      >
                        <p>
                          Our proprietary middle-out compression algorithm
                          allows data to flow so fast that it can't be hacked!
                          But, in all seriousness, the algorithm helps but it's
                          the public, immutable ledger that makes it secure.
                          This enables PiperNet users to exchange data without
                          risk of it being intercepted by third parties.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-left4-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-left4-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-left4-05"
                        >
                          How long does it take to get a company up and running
                          on PiperNet?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-left4-05"
                        aria-labelledby="faq-heading-left4-05"
                        data-parent="#faq-accordion-left-05"
                      >
                        <p>
                          Access to the public network is granted within a day,
                          but moving all your data and integrating your existing
                          software depends on how big your company is. Startups
                          can expect to be fully online within a week,
                          enterprises can take up to a month due to large
                          reliance on legacy systems and huge datasets.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-left5-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-left5-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-left5-05"
                        >
                          How is a decentralized network different from the
                          traditional web?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-left5-05"
                        aria-labelledby="faq-heading-left5-05"
                        data-parent="#faq-accordion-left-05"
                      >
                        <p>
                          Decentralization is a key aspect of PiperNet.
                          Traditionally, to access data on a website, you needed
                          to connect to a single server containing that data.
                          This method of storing data makes it easy for third
                          parties to get access to it, corrupt it or even delete
                          it. In PiperNet it is securely stored on multiple
                          devices in the network, which makes it harder to hack
                          and interfere with your data.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-left6-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-left6-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-left6-05"
                        >
                          Why shouldn't I just store my data on a Hooli Box?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-left6-05"
                        aria-labelledby="faq-heading-left6-05"
                        data-parent="#faq-accordion-left-05"
                      >
                        <p>
                          That's just the thing - if you store your data in a
                          single place, like Gavin Belsons' poorly-made server
                          box, your data will very susceptible to hacking.
                          Whereas on PiperNet, your data is safe with many
                          copies to back it up from.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <h4 className="mb-3">Payment options</h4>
                  <div className="accordion" id="faq-accordion-right-05">
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-right1-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-right1-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-right1-05"
                        >
                          How is a decentralized network different from the
                          traditional web?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-right1-05"
                        aria-labelledby="faq-heading-right1-05"
                        data-parent="#faq-accordion-right-05"
                      >
                        <p>
                          Decentralization is a key aspect of PiperNet.
                          Traditionally, to access data on a website, you needed
                          to connect to a single server containing that data.
                          This method of storing data makes it easy for third
                          parties to get access to it, corrupt it or even delete
                          it. In PiperNet it is securely stored on multiple
                          devices in the network, which makes it harder to hack
                          and interfere with your data.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-right2-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-right2-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-right2-05"
                        >
                          Why shouldn't I just store my data on a Hooli Box?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-right2-05"
                        aria-labelledby="faq-heading-right2-05"
                        data-parent="#faq-accordion-right-05"
                      >
                        <p>
                          That's just the thing - if you store your data in a
                          single place, like Gavin Belsons' poorly-made server
                          box, your data will very susceptible to hacking.
                          Whereas on PiperNet, your data is safe with many
                          copies to back it up from.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-right3-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-right3-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-right3-05"
                        >
                          What makes PiperNet so safe?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-right3-05"
                        aria-labelledby="faq-heading-right3-05"
                        data-parent="#faq-accordion-right-05"
                      >
                        <p>
                          Our proprietary middle-out compression algorithm
                          allows data to flow so fast that it can't be hacked!
                          But, in all seriousness, the algorithm helps but it's
                          the public, immutable ledger that makes it secure.
                          This enables PiperNet users to exchange data without
                          risk of it being intercepted by third parties.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-right4-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-right4-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-right4-05"
                        >
                          How long does it take to get a company up and running
                          on PiperNet?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-right4-05"
                        aria-labelledby="faq-heading-right4-05"
                        data-parent="#faq-accordion-right-05"
                      >
                        <p>
                          Access to the public network is granted within a day,
                          but moving all your data and integrating your existing
                          software depends on how big your company is. Startups
                          can expect to be fully online within a week,
                          enterprises can take up to a month due to large
                          reliance on legacy systems and huge datasets.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-right5-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-right5-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-right5-05"
                        >
                          How is a decentralized network different from the
                          traditional web?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-right5-05"
                        aria-labelledby="faq-heading-right5-05"
                        data-parent="#faq-accordion-right-05"
                      >
                        <p>
                          Decentralization is a key aspect of PiperNet.
                          Traditionally, to access data on a website, you needed
                          to connect to a single server containing that data.
                          This method of storing data makes it easy for third
                          parties to get access to it, corrupt it or even delete
                          it. In PiperNet it is securely stored on multiple
                          devices in the network, which makes it harder to hack
                          and interfere with your data.
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 border-bottom">
                      <h5 id="faq-heading-right6-05">
                        <button
                          className="btn btn-link btn-block text-left px-0 d-flex"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq-collapse-right6-05"
                          aria-expanded="false"
                          aria-controls="faq-collapse-right6-05"
                        >
                          Why shouldn't I just store my data on a Hooli Box?
                          <img
                            className="p-1 ml-auto my-auto"
                            src="placeholder/icons/chevron-circle-down.svg"
                            alt=""
                          />
                        </button>
                      </h5>
                      <div
                        className="collapse"
                        id="faq-collapse-right6-05"
                        aria-labelledby="faq-heading-right6-05"
                        data-parent="#faq-accordion-right-05"
                      >
                        <p>
                          That's just the thing - if you store your data in a
                          single place, like Gavin Belsons' poorly-made server
                          box, your data will very susceptible to hacking.
                          Whereas on PiperNet, your data is safe with many
                          copies to back it up from.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <Footer />
      </div>
    )
  }
}

export default location

export const pageQuery = graphql`
  query LocationByHeading($heading: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulLocationPage(heading: { eq: $heading }) {
      heading
      icon {
        file {
          url
        }
      }
      image {
        file {
          url
        }
      }
      isOpen
      nextBatchDate
      facebookUrl
      instagramUrl
      linkedinUrl
      twitterUrl
      usesFirstEntry
      firstEntryTitle
      firstEntryText
      firstEntryImage {
        file {
          url
        }
      }
      usesSecondEntry
      secondEntryTitle
      secondEntryText
      secondEntryImage {
        file {
          url
        }
      }
      usesThirdEntry
      thirdEntryTitle
      thirdEntryText
      thirdEntryImage {
        file {
          url
        }
      }
    }
  }
`
