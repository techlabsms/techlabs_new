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
import BlogCard from "../components/BlogCard"
import Faq from "../components/Faq"
import FaqQuestion from "../components/FaqQuestion"
import { Link } from 'gatsby'

class location extends Component {
  render() {
    const location = get(this.props, "data.contentfulLocationPage")
    const articles = get(this, "props.data.allContentfulBlogPost.edges")
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
                      <a
                        className="btn btn-secondary mt-3 d-inline"
                        href="mailto:info@techlabs.org?subject=Kontaktanfrage TechLabs.org"
                      >
                        Contact us
                      </a>
                    </div>
                  ) : (
                    <div>
                      <a
                        className="btn btn-secondary mt-3 d-inline"
                        href="mailto:info@techlabs.org?subject=Kontaktanfrage TechLabs.org"
                      >
                        Contact us
                      </a>
                    </div>
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
                      <p>{location.thirdEntryText}</p>
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
                {articles.map(({ node }) => {
                  return <BlogCard article={node} key={node.title} />
                })}
              </div>
            </div>
          </section>
          <Faq>
            <FaqQuestion
              question="This should be a question"
              answer="Esse ex magna aute eu labore. Qui id consectetur esse sint tempor consectetur tempor magna. Veniam elit velit cillum magna id nisi tempor laboris sit elit veniam consequat ex ea."
            />
            <FaqQuestion
              question="This should be a question"
              answer="Esse ex magna aute eu labore. Qui id consectetur esse sint tempor consectetur tempor magna. Veniam elit velit cillum magna id nisi tempor laboris sit elit veniam consequat ex ea."
            />
            <FaqQuestion
              question="This should be a question"
              answer="Esse ex magna aute eu labore. Qui id consectetur esse sint tempor consectetur tempor magna. Veniam elit velit cillum magna id nisi tempor laboris sit elit veniam consequat ex ea."
            />
            <div className="text-center mt-5">
              <Link className="btn btn-primary" to="/faq">
                More Questions?
              </Link>
            </div>
          </Faq>
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
      partnerOne {
        file {
          url
        }
      }
      partnerTwo {
        file {
          url
        }
      }
      partnerThree {
        file {
          url
        }
      }
    }
    allContentfulBlogPost(limit: 3) {
      edges {
        node {
          title
          id
          readTime
          authorName
          slug
          abstract
          postImg {
            file {
              url
            }
          }
        }
      }
    }
  }
`
