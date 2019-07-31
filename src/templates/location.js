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
                    <img src={location.icon.file.url} alt="" /> Münster
                  </h1>
                  <p className="text-muted batch-text">Next Batch</p>

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
                </div>
              </div>
            </div>
          </section>
          <section className="container location">
            <LeftImageSection
              heading={location.firstEntryTitle}
              subheading="Text Text Text"
              text={location.firstEntryText}
              image={Placeholder}
            />
            <RightImageSection
              heading={location.secondEntryTitle}
              subheading="Text Text Text"
              text={location.secondEntryText}
              image={Placeholder}
            />
            <LeftImageSection
              heading={location.thirdEntryTitle}
              subheading="Text Text Text"
              text={location.thirdEntryText}
              image={Placeholder}
            />
            <Team
              city="Münster"
              firstName="David"
              firstDescription="Magna officia exercitation voluptate sunt excepteur esse id id consequat occaecat duis commodo laborum. Aute esse est laboris cillum nulla. Quis aliqua nostrud laborum labore duis eiusmod eu enim quis cupidatat. Commodo ea nulla nostrud tempor non nulla. Incididunt fugiat est deserunt cupidatat ex est. Est magna fugiat ullamco sunt sint. Occaecat labore irure eiusmod ullamco ex est non id ullamco."
              firstImage={David}
              firstLinkedIn="https://www.linkedin.com"
              secondName="Marius"
              secondDescription="Quis nisi aliqua aliquip enim. Enim ad sunt nostrud exercitation eiusmod ad magna sunt laborum ut in. Nostrud officia consequat dolore sint eu proident pariatur dolor sit veniam aliqua dolore minim ea. In reprehenderit minim voluptate exercitation incididunt laborum minim aute et quis duis."
              secondImage={Marius}
              secondLinkedIn="https://www.linkedin.com"
              thirdName="Nils"
              thirdDescription="Consectetur aliquip adipisicing aute anim quis cupidatat nostrud culpa tempor est in enim mollit. Officia ad enim minim laboris dolor aute non tempor id cillum labore ut reprehenderit. Magna voluptate ad labore magna sint adipisicing officia sit consequat non id magna exercitation in. Ex ea excepteur velit nostrud adipisicing. Sint consequat exercitation Lorem amet eiusmod ut occaecat est."
              thirdImage={Nils}
              thirdLinkedIn="https://www.linkedin.com"
              fourthName="Jonas"
              fourthDescription="Veniam adipisicing qui voluptate deserunt officia. Cupidatat minim sunt nostrud eu elit irure amet tempor elit. Id cillum aliquip eu non in consequat. Laborum eiusmod sunt cupidatat irure non id. Non officia esse aliquip exercitation nulla ut anim anim excepteur ea."
              fourthImage={Jonas}
              fourthLinkedIn="https://www.linkedin.com"
            />
            <News
              heading="News from Münster"
              subheading="You want to know what’s going on in Münster?"
            />
            <Follow
              heading="Follow us:"
              subheading="Stay up to date"
            />
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
