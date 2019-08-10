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
import LeftImageSectionHeading from "../components/LeftImageSectionHeading"
import RightImageSectionHeading from "../components/RightImageSectionHeading"
import News from "../components/News"
import Follow from "../components/Follow"
import JoinTheTeam from "../components/JoinTheTeam"
import Placeholder from "../assets/commu.png"
import Team from "../components/Team"
import PartnerLogos from "../components/PartnerLogos"
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
          <PartnerLogos 
            logoOne={location.partnerOne.file.url}
            logoTwo={location.partnerTwo.file.url}
            logoThree={location.partnerThree.file.url}
            logoFour={location.partnerFour.file.url}
          />
            {location.firstEntryTitle && (
              <LeftImageSectionHeading
                heading={location.firstEntryTitle}
                subheading="Text Text Text"
                text={location.firstEntryText}
                image={location.firstEntryImage.file.url}
              />
            )}
            {location.secondEntryTitle && (
              <RightImageSectionHeading
                heading={location.secondEntryTitle}
                subheading="Text Text Text"
                text={location.secondEntryText}
                image={location.secondEntryImage.file.url}
              />
            )}
            {location.thirdEntryTitle && (
              <LeftImageSectionHeading
                heading={location.thirdEntryTitle}
                text={location.thirdEntryText.json.content[0].content[0].value}
                image={location.thirdEntryImage.file.url}
              />
            )}
            {location.teamNameOne && (
              <Team
                city={location.heading}
                firstName={location.teamNameOne}
                firstImage={location.teamImgOne.file.url}
                firstLinkedIn={location.teamLinkedInOne}
                secondName={location.teamNameTwo}
                secondImage={location.teamImgTwo.file.url}
                secondLinkedIn={location.teamLinkedInTwo}
                thirdName={location.teamNameThree}
                thirdImage={location.teamImgThree.file.url}
                thirdLinkedIn={location.teamLinkedInThree}
                fourthName={location.teamImgFour}
                fourthImage={location.teamNameFour.file.url}
                fourthLinkedIn={location.teamLinkedInFour}
              />
            )}
            <Follow
              heading="Follow us:"
              subheading="Stay up to date"
              facebookLink={location.facebookUrl}
              instagramLink={location.instagramUrl}
              linkedInLink={location.linkedinUrl}
              mediumLink={location.mediumUrl}
            />
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
      mediumUrl
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
      thirdEntryText {
        json
      }

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
      partnerFour {
        file {
          url
        }
      }
      teamNameOne
      teamLinkedInOne
      teamImgOne {
        file {
          url
        }
      }
      teamNameTwo
      teamLinkedInTwo
      teamImgTwo {
        file {
          url
        }
      }
      teamNameThree
      teamLinkedInThree
      teamImgThree {
        file {
          url
        }
      }
      teamNameFour {
        file {
          url
        }
      }
      teamLinkedInFour
      teamImgFour
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
