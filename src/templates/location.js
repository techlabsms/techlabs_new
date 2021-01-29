import React, { Component } from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import LeftImageSection from "../components/shared/LeftImageSection"
import RightImageSection from "../components/shared/RightImageSection"
import DatesCalendar from "../components/locations/DatesCalendar"
import Follow from "../components/locations/Follow"
import Team from "../components/locations/Team"
import Tooltip from "../components/smallComponents/Tooltip"
import Heading from "../components/smallComponents/Heading"
import Container from "../components/smallComponents/Container"
import Button from "../components/smallComponents/Button"
import Layout from "../components/Layout/Layout"
import PartnerLogos from "../components/locations/partnerLogos"
import Newsletter from "../components/program/newsletter"

// assets
import teamspirit from "../assets/teamspirit.png"
import pin2 from "../assets/pin2.png"
import getDirection from "../assets/get-directions-button.png"
import ds from "../assets/ds.png"
import ai from "../assets/ai.png"
import web from "../assets/web.png"
import ux from "../assets/UX.svg"

class location extends Component {
  state = {
    modalIsOpen: false,
    x: 0,
    y: 0,
    text: "Web Dev",
  }

  handleOpenToolTip(e, track) {
    this.setState({
      modalIsOpen: true,
      x: e.clientX,
      y: e.clientY,
      text: track,
    })
  }
  render() {
    const location = get(this.props, "data.contentfulLocationPage")
    const data = this.props
    const { modalIsOpen, x, y, text } = this.state
    return (
      <Layout>
        <section className="container-fluid">
          <section>
            <div
              className="location-hero"
              style={{ backgroundImage: `url(${location.image.file.url})` }}
            >
              <Tooltip modalIsOpen={modalIsOpen} x={x} y={y} text={text} />
              <div className="row">
                <div className="col-md-12 col-lg-5 border-0 location-card mt-4 py-5 position-absolute">
                  <div className="row text-right fixed-top-absolute py-3">
                    <div className="col-md-12">
                      <small className="text-muted mr-4">
                        <FormattedMessage id="location.availableTracks" />
                      </small>
                      {location.avaiableTracks.web && (
                        <img
                          src={web}
                          alt="web development"
                          width="25"
                          className="mr-3"
                          onMouseOver={e =>
                            this.handleOpenToolTip(e, "Web Dev")
                          }
                          onFocus={e => this.handleOpenToolTip(e, "Web Dev")}
                          onMouseLeave={() =>
                            this.setState({
                              modalIsOpen: false,
                            })
                          }
                          role="presentation"
                        />
                      )}
                      {location.avaiableTracks.ai && (
                        <img
                          src={ai}
                          width="25"
                          className="mr-3"
                          alt="ai"
                          onMouseOver={e => this.handleOpenToolTip(e, "AI")}
                          onFocus={e => this.handleOpenToolTip(e, "AI")}
                          onMouseLeave={() =>
                            this.setState({
                              modalIsOpen: false,
                            })
                          }
                          role="presentation"
                        />
                      )}
                      {location.avaiableTracks.data && (
                        <img
                          src={ds}
                          width="25"
                          className="mr-3"
                          alt="data science"
                          onMouseOver={e =>
                            this.handleOpenToolTip(e, "Data Science")
                          }
                          onFocus={e =>
                            this.handleOpenToolTip(e, "Data Science")
                          }
                          onMouseLeave={() =>
                            this.setState({
                              modalIsOpen: false,
                            })
                          }
                          role="presentation"
                        />
                      )}
                      {location.avaiableTracks.ux && (
                        <img
                          src={ux}
                          width="25"
                          className="mr-3"
                          alt="ux"
                          onMouseOver={e =>
                            this.handleOpenToolTip(e, "UX Design")
                          }
                          onFocus={e => this.handleOpenToolTip(e, "UX Design")}
                          onMouseLeave={() =>
                            this.setState({
                              modalIsOpen: false,
                            })
                          }
                          role="presentation"
                        />
                      )}
                    </div>
                  </div>

                  <h1 className="location-title">
                    <img src={location.icon.file.url} alt="" width="60" />{" "}
                    {location.heading}
                  </h1>

                  <div className="row">
                    <div className="col">
                      {location.isOpen ? (
                        <p className="text-muted batch-text">
                          <FormattedMessage id="location.nextApplication" />{" "}
                          <span className="a-black">
                            {location.nextBatchDate}
                          </span>
                        </p>
                      ) : (
                        <p className="text-muted batch-text">
                          <FormattedMessage id="location.nextBatch" />
                        </p>
                      )}
                    </div>
                  </div>

                  {location.isOpen ? (
                    <>
                      <Button
                        text={
                          <FormattedMessage id="about.join.RightImageSectionHeading.buttonText" />
                        }
                        link={`${location.applicationLink}`}
                        isExternal={true}
                        primary={true}
                      />
                      <Button
                        text={
                          <FormattedMessage id="foundYourOwn.calltoAction.text" />
                        }
                        primary={false}
                        isExternal={true}
                        link={`mailto:${location.email}`}
                      />
                    </>
                  ) : (
                    <>
                      <Button
                        text={
                          <FormattedMessage id="foundYourOwn.calltoAction.text" />
                        }
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
          {!location.isOpen && location.newsletterActive && (
            <Newsletter
              image={data.data.newsletterImage.childImageSharp.fluid}
              actionLink={data.location.newsletterLink}
            />
          )}
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
                text={location.firstEntryTextAsMd.childMarkdownRemark.html}
                image={
                  location.firstEntryImage && location.firstEntryImage.file.url
                }
                leftPartSize="6"
                rightPartSize="6"
                float={true}
                html
              />
            )}
            {location.secondEntryTitle && (
              <RightImageSection
                heading={location.secondEntryTitle}
                subheading={location.secondEntrySubtitle}
                text={location.secondEntryTextAsMd.childMarkdownRemark.html}
                image={
                  location.secondEntryImage &&
                  location.secondEntryImage.file.url
                }
                leftPartSize="6"
                rightPartSize="6"
                float={true}
                html
              />
            )}
            {location.thirdEntryTitle && (
              <LeftImageSection
                heading={location.thirdEntryTitle}
                subheading={location.thirdEntrySubtitle}
                text={location.thirdEntryTextAsMd.childMarkdownRemark.html}
                image={
                  location.thirdEntryImage && location.thirdEntryImage.file.url
                }
                leftPartSize="6"
                rightPartSize="6"
                float={true}
                html
              />
            )}
            {location.team != null && (
              <Team
                city={location.heading && location.heading}
                team={location.team}
              />
            )}
            {location.facebookUrl !== null ||
            location.instagramUrl !== null ||
            location.linkedinUrl !== null ||
            location.mediumUrl !== null ? (
              <Follow
                heading={<FormattedMessage id="location.follow.heading" />}
                subheading={
                  <FormattedMessage id="location.follow.subheading" />
                }
                facebookLink={location.facebookUrl}
                instagramLink={location.instagramUrl}
                linkedInLink={location.linkedinUrl}
                mediumLink={location.mediumUrl}
              />
            ) : null}
          </section>
          {location.openPositionsLink && (
            <RightImageSection
              heading={<FormattedMessage id="location.openPositions.heading" />}
              subheading={
                <FormattedMessage id="location.openPositions.subheading" />
              }
              text={<FormattedMessage id="location.openPositions.text" />}
              image={teamspirit}
              hasButton={true}
              buttonLink={location.openPositionsLink}
              buttonText={
                <FormattedMessage id="location.openPositions.button" />
              }
            />
          )}
          {location.officeName && (
            <Container>
              <Heading
                heading={
                  <FormattedMessage
                    id="location.office.heading"
                    values={{ officeName: location.officeName }}
                  />
                }
                subheading={
                  <FormattedMessage id="location.office.subheading" />
                }
              />
              <div className="row">
                <div
                  className="col-md-7 office--img"
                  style={{
                    backgroundImage: location.officeImg
                      ? `url(${location.officeImg.file.url})`
                      : null,
                  }}
                >
                  <div className="w-75 office--card position-absolute">
                    <h3 className="office--heading">
                      <FormattedMessage id="location.office.visit" />{" "}
                      {location.officeName}
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
                        <FormattedMessage id="location.office.directions" />
                      </a>
                    </div>
                  </div>
                </div>
                {location.officeText ? (
                  <div className="col-md-5">
                    <div className="row pl-5 d-flex h-100 mt-5 pr-5">
                      <p className="align-self-center justify-content-center office--text">
                        {location.officeText.json.content[0].content[0].value}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </Container>
          )}
          {location.partners && (
            <PartnerLogos
              heading={<FormattedMessage id="location.partners.heading" />}
              subheading={
                <FormattedMessage id="location.partners.subheading" />
              }
              partners={location.partners}
            />
          )}
        </section>
      </Layout>
    )
  }
}

export default injectIntl(location)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query LocationByHeading($heading: String!, $locale: String) {
    newsletterImage: file(relativePath: { eq: "Newsletter.png" }) {
      ...fluidImage
    }
    site {
      siteMetadata {
        title
      }
    }
    contentfulLocationPage(
      heading: { eq: $heading }
      node_locale: { eq: $locale }
    ) {
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
      newsletterActive
      newsletterLink
      nextBatchDate
      facebookUrl
      instagramUrl
      linkedinUrl
      mediumUrl
      firstEntryTitle
      firstEntrySubtitle
      firstEntryTextAsMd {
        childMarkdownRemark {
          html
        }
      }
      firstEntryImage {
        file {
          url
        }
      }
      secondEntryTitle
      secondEntrySubtitle

      secondEntryTextAsMd {
        childMarkdownRemark {
          html
        }
      }
      secondEntryImage {
        file {
          url
        }
      }
      thirdEntryTitle
      thirdEntrySubtitle

      thirdEntryTextAsMd {
        childMarkdownRemark {
          html
        }
      }
      thirdEntryImage {
        file {
          url
        }
      }
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
      usesTeam
      hasCalendar
      team {
        linkedIn
        name
        role
        image {
          sizes(quality: 100) {
            ...GatsbyContentfulSizes_withWebp
          }
          title
        }
      }
      avaiableTracks {
        ai
        data
        ux
        web
      }
      partners {
        name
        partnerLink
        logo {
          sizes(quality: 100) {
            ...GatsbyContentfulSizes_withWebp
          }
        }
      }
    }
  }
`
