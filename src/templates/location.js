import React, { Component } from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LeftImageSection from "../components/LeftImageSection"
import RightImageSection from "../components/RightImageSection"
import Follow from "../components/Follow"
import Team from "../components/Team"
import PartnerLogos from "../components/PartnerLogos"
import teamspirit from "../assets/teamspirit.png"
import pin2 from "../assets/pin2.png"
import getDirection from "../assets/get-directions-button.png"

class location extends Component {
  render() {
    const location = get(this.props, "data.contentfulLocationPage")
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
                  <div className="row">
                    <div className="col">
                      {location.nextBatchDate ? (
                        <p className="text-muted batch-text">
                          Next Batch: {location.nextBatchDate}
                        </p>
                      ) : (
                        <p className="text-muted batch-text">
                          Next Batch will be announced soon
                        </p>
                      )}
                    </div>
                  </div>

                  {location.isOpen ? (
                    <>
                      <a
                        className="btn btn-primary mt-3 d-inline"
                        href={`${location.applicationLink}`}
                      >
                        Apply now
                      </a>

                      <a
                        className="btn btn-secondary mt-3 d-inline"
                        href={`mailto:${location.email}`}
                      >
                        Contact us
                      </a>
                    </>
                  ) : (
                    <div>
                      <a
                        className="btn btn-primary mt-3 d-inline"
                        href={`mailto:${location.email}`}
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
            {location.hasPartner && (
              <PartnerLogos
                logoOne={location.partnerOne.file.url}
                logoTwo={location.partnerTwo.file.url}
                logoThree={location.partnerThree.file.url}
                logoFour={location.partnerFour.file.url}
              />
            )}
            {location.firstEntryTitle && (
              <LeftImageSection
                heading={location.firstEntryTitle}
                subheading={location.firstEntrySubtitle}
                text={location.firstEntryText.json.content[0].content[0].value}
                image={location.firstEntryImage.file.url}
                leftPartSize="6"
                rightPartSize="6"
                float={true}
              />
            )}
            {location.secondEntryTitle && (
              <RightImageSection
                heading={location.secondEntryTitle}
                subheading={location.secondEntrySubtitle}
                text={location.secondEntryText.json.content[0].content[0].value}
                image={location.secondEntryImage.file.url}
                leftPartSize="6"
                rightPartSize="6"
                float={true}
              />
            )}
            {location.thirdEntryTitle && (
              <LeftImageSection
                heading={location.thirdEntryTitle}
                subheading={location.thirdEntrySubtitle}
                text={location.thirdEntryText.json.content[0].content[0].value}
                image={location.thirdEntryImage.file.url}
                leftPartSize="6"
                rightPartSize="6"
                float={true}
              />
            )}
            {location.usesTeam ? (
              location.teamNameOne && location.teamNameFour ? (
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
              ) : (
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
                />
              )
            ) : null}
            <Follow
              heading="Follow Us:"
              subheading="Stay up to date!"
              facebookLink={location.facebookUrl}
              instagramLink={location.instagramUrl}
              linkedInLink={location.linkedinUrl}
              mediumLink={location.mediumUrl}
            />
          </section>
          {location.openPositionsLink && (
            <RightImageSection
              heading="Join the Team"
              subheading="Interested in joining our team?"
              text="You are dreaming of a world with no digital illiterates and are passionate about tech? As a TechLabs Management-Team member you can actively support others in learning tech. Reach out and join the TechLabs family. "
              image={teamspirit}
              hasButton={true}
              buttonLink={location.openPositionsLink}
              buttonText="Open Positions"
            />
          )}
          {location.officeName && (
            <div className="container h-100 my-5 py-5">
              <div className="row">
                <div className="col">
                  <h2>{`Our Office - ${location.officeName}`}</h2>
                  <div className="section-divider" />
                  <p className="basicSection--sub">Checkout our Workspace</p>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-7 office--img"
                  style={{
                    backgroundImage: `url(${location.officeImg.file.url})`,
                  }}
                >
                  <div className="w-75 office--card position-absolute">
                    <h3 className="office--heading">
                      Come & visit {location.officeName}
                    </h3>
                    <div className="row mt-4">
                      <img src={pin2} alt="pin" className="h-75 mx-3" />
                      <p className=" office--smalltext">
                        {location.officeAdress}
                      </p>
                    </div>
                    <div className="row mt-2">
                      <img src={getDirection} alt="pin" className="h-75 mx-3" />
                      <a
                        href={location.officeLink}
                        className="d-inline noDec office--smalltext"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row pl-5 d-flex h-100 mt-5 pr-5">
                    <p className="align-self-center justify-content-center office--text">
                      {location.officeText.json.content[0].content[0].value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
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
      mediumUrl
      firstEntryTitle
      firstEntrySubtitle
      firstEntryText {
        json
      }
      firstEntryImage {
        file {
          url
        }
      }
      secondEntryTitle
      secondEntrySubtitle
      secondEntryText {
        json
      }
      secondEntryImage {
        file {
          url
        }
      }
      thirdEntryTitle
      thirdEntrySubtitle
      thirdEntryText {
        json
      }

      thirdEntryImage {
        file {
          url
        }
      }
      hasPartner
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
      openPositionsLink
      officeName
      officeImg {
        file {
          url
        }
      }
      officeAdress
      officeText {
        json
      }
      officeLink
      applicationLink
      email
      slackLink
      usesTeam
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
