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
import BlogCard from "../components/BlogCard"
import LeftImageSection from "../components/LeftImageSection"
import RightImageSection from "../components/RightImageSection"
import News from "../components/News"
import Follow from "../components/Follow"
import JoinTheTeam from "../components/JoinTheTeam"
import Placeholder from "../assets/commu.png"
import Team from "../components/Team"
import David from "../assets/David_team.png"
import Marius from "../assets/Marius_team.png"
import Nils from "../assets/Nils_team.png"
import Jonas from "../assets/Jonas_team.png"
import { Link } from "gatsby"

class location extends Component {
  render() {
    const location = get(this.props, "data.contentfulLocationPage")
    const articles = get(this, "props.data.allContentfulBlogPost.edges")
    return (
      <>
        <section className="container-fluid">
          <Navbar />
          <section>
            <div
              className="location-hero"
              style={{ backgroundImage: `url(${location.image.file.url})` }}
            >
              <div className="row">
                <div className="col-md-12 col-lg-5 border-0 location-card mt-5 py-5 position-absolute">
                  <h1 className="location-title">
                    <img src={location.icon.file.url} alt="" />{" "}
                    {location.heading}
                  </h1>
                  {location.nextBatchDate ? (
                    <p className="text-muted batch-text">
                      Next Batch: {location.nextBatchDate}
                    </p>
                  ) : (
                    <p className="text-muted batch-text">
                      Next Batch will be announced soon
                    </p>
                  )}
                  {location.isOpen ? (
                    <div>
                      <a className="btn btn-primary mt-3 d-inline" href="/">
                        Apply now
                      </a>
                      <a
                        className="btn btn-secondary mt-3 d-inline"
                        href={`mailto:${
                          location.heading
                        }@techlabs.org?subject=Question from techlabs.org`}
                      >
                        Contact us
                      </a>
                    </div>
                  ) : (
                    <div>
                      <a
                        className="btn btn-primary mt-3 d-inline"
                        href={`mailto:${
                          location.heading
                        }@techlabs.org?subject=Question from techlabs.org`}
                      >
                        Contact us
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="container location">
            {location.firstEntryTitle && (
              <LeftImageSection
                heading={location.firstEntryTitle}
                subheading="Text Text Text"
                text={location.firstEntryText}
                image={Placeholder}
              />
            )}
            {location.secondEntryTitle && (
              <RightImageSection
                heading={location.secondEntryTitle}
                subheading="Text Text Text"
                text={location.secondEntryText}
                image={Placeholder}
              />
            )}
            {location.thirdEntryTitle && (
              <LeftImageSection
                heading={location.thirdEntryTitle}
                subheading="Text Text Text"
                text={location.thirdEntryText}
                image={Placeholder}
              />
            )}
            {location.firstName && (
              <Team
                city="Münster"
                firstName="David"
                firstImage={David}
                firstLinkedIn="https://www.linkedin.com"
                secondName="Marius"
                secondImage={Marius}
                secondLinkedIn="https://www.linkedin.com"
                thirdName="Nils"
                thirdImage={Nils}
                thirdLinkedIn="https://www.linkedin.com"
                fourthName="Jonas"
                fourthImage={Jonas}
                fourthLinkedIn="https://www.linkedin.com"
              />
            )}
            <News
              heading="News from Münster"
              subheading="You want to know what’s going on in Münster?"
            />
            <Follow heading="Follow us:" subheading="Stay up to date" />
          </section>
          <div className="locations--background">
            <section className="container">
              <JoinTheTeam
                heading="Join the Team"
                subheading="Interested in joining the team?"
              />
            </section>
          </div>
        </section>

        <Footer />
      </>
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
