import React, { Component } from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LeftImageSection from "../components/LeftImageSection"
import RightImageSection from "../components/RightImageSection"
import DatesCalendar from "../components/DatesCalendar"
import Follow from "../components/Follow"
import Team from "../components/Team"
import teamspirit from "../assets/teamspirit.png"
import pin2 from "../assets/pin2.png"
import getDirection from "../assets/get-directions-button.png"
import Heading from "../components/smallComponents/Heading"
import Container from "../components/smallComponents/Container"
import Button from "../components/smallComponents/Button"

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
                    <img src={location.icon.file.url} alt="" width="60" />{" "}
                    {location.heading}
                  </h1>
                  <div className="row">
                    <div className="col">
                      {location.isOpen ? (
                        <p className="text-muted batch-text">
                          Next application phase:{" "}
                          <span className="a-black">
                            {location.nextBatchDate}
                          </span>
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
                      <Button
                        text="Apply now"
                        link={`${location.applicationLink}`}
                        isExternal={true}
                        primary={true}
                      />
                      <Button
                        text="Contact us"
                        primary={false}
                        isExternal={true}
                        link={`mailto:${location.email}`}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        text="Contact us"
                        primary={true}
                        isExternal={true}
                        link={`mailto:${location.email}`}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="container location">
            {location.hasCalendar && (
              <DatesCalendar
                eventsPage={location.eventsPage}
                city={location.heading}
                mail={location.email}
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
            <Team
              city={location.heading && location.heading}
              firstName={location.teamNameOne && location.teamNameOne}
              firstImage={location.teamImgOne && location.teamImgOne.file.url}
              firstLinkedIn={
                location.teamLinkedInOne && location.teamLinkedInOne
              }
              secondName={location.teamNameTwo && location.teamNameTwo}
              secondImage={location.teamImgTwo && location.teamImgTwo.file.url}
              secondLinkedIn={
                location.teamLinkedInTwo && location.teamLinkedInTwo
              }
              thirdName={location.teamNameThree && location.teamNameThree}
              thirdImage={
                location.teamImgThree && location.teamImgThree.file.url
              }
              thirdLinkedIn={
                location.teamLinkedInThree && location.teamLinkedInThree
              }
              fourthName={location.teamImgFour && location.teamImgFour}
              fourthImage={
                location.teamNameFour && location.teamNameFour.file.url
              }
              fourthLinkedIn={
                location.teamLinkedInFour && location.teamLinkedInFour
              }
            />

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
            <Container>
              <Heading
                heading={`Our Office - ${location.officeName}`}
                subheading="Checkout our Workspace"
              />
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
            </Container>
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
      hasCalendar
    }
  }
`
