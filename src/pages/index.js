import React from "react"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-react-intl"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

// components
import Slider from "../components/landingpage/Slider"
import RightImageSectionHeading from "../components/shared/RightImageSectionHeading"
import PartnerLogos from "../components/landingpage/PartnerLogos"
import KeyBenefits from "../components/shared/KeyBenefits"
import Quote from "../components/shared/Quote"
import Heading from "../components/smallComponents/Heading"
import Button from "../components/smallComponents/Button"
import ApplicationPeriod from "../components/landingpage/applicationPeriod"
import Layout from "../components/Layout/Layout"

// assets
import GIC from "../assets/gic.svg"

// styles
import "../styles/_main.scss"
import "../styles/bootstrap.min.css"
import LearnMore from "../components/landingpage/learnMore"
import Seo from "../components/Layout/Seo"

import OGImage from "../assets/images/startPage.png"

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
    const { data, intl } = this.props

    const allCountries = this.props.data.allContentfulLocationPage.edges
    return (
      <Layout>
        <Seo locale={intl.locale} image={OGImage} />
        <div className="container-fluid">
          {/* header section */}
          <section className="py-5 padding-top-15">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 my-auto xs-margin-right">
                  <h1 className="display-4">
                    We Build.
                    <br />
                    <span className="highlighted lh-90">Digital. </span>
                    <span className="highlighted lh-90">Shapers.</span>
                  </h1>
                  <p className="index--lead mb-4 margin-top-15 margin-bottom-2 text-justify">
                    <FormattedMessage id={"landingpage.digital.shaper.part1"} />
                    <span className="text-bold-pink">
                      <FormattedMessage
                        id={"landingpage.digital.shaper.part2"}
                      />
                    </span>
                  </p>
                  <div className="mt-5">
                    <Button
                      text={
                        <FormattedMessage id={"landingpage.button.program"} />
                      }
                      primary={false}
                      link="/program"
                    />
                    <Button
                      text={
                        <FormattedMessage id={"landingpage.button.about"} />
                      }
                      primary={true}
                      link="/about"
                    />
                  </div>
                </div>
                <div className="col-md-7 d-none d-lg-block">
                  {/* <Img
                    alt="commmunity"
                    fluid={data.imageOne.childImageSharp.fluid}
                    fadeIn={false}
                  /> */}
                </div>
              </div>
            </div>
          </section>
          {/* winner of GIC and partner logos */}
          <section className="gic py-5">
            <div className="container center">
              <img className="gic-badge" src={GIC} alt="gic" />
            </div>
            {/* <PartnerLogos
              logoOne={data.accint.childImageSharp.fluid}
              linkPartnerOne="https://www.accenture.com/de-de/interactive-index"
              logoTwo={data.sopra.childImageSharp.fluid}
              linkPartnerTwo="https://www.soprasteria.de/de"
              logoThree={data.westfalen.childImageSharp.fluid}
              linkPartnerThree="https://westfalen.com/de/de/privatkunden/"
              logoFour={data.ey.childImageSharp.fluid}
              linkPartnerFour="https://www.ey.com/de_de"
            /> */}
          </section>
          {/* what we offer */}
          <section className="mt-5">
            {/* <BackgroundImage
              fluid={data.wwo.childImageSharp.fluid}
              fadeIn={false}
              style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <div className="container">
                <Heading
                  heading={
                    <FormattedMessage id={"landingpage.what.we.offer.title"} />
                  }
                  subheading={
                    <FormattedMessage
                      id={"landingpage.what.we.offer.subtitle"}
                    />
                  }
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
                          <p className="card-subtitle">
                            {
                              <FormattedMessage
                                id={"landingpage.what.weeks.of.coding"}
                              />
                            }
                          </p>
                          <p>
                            {
                              <FormattedMessage
                                id={"landingpage.what.weeks.of.coding.text"}
                              />
                            }
                          </p>
                          <span className="card-discover">
                            {
                              <FormattedMessage
                                id={"landingpage.what.weeks.of.coding.discover"}
                              />
                            }
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2 col-sm-6 mt-5">
                      <Link to="/program" className="card-a">
                        <div className="card h-100">
                          <h1 className="card-title">4</h1> <br />
                          <p className="card-subtitle">
                            {
                              <FormattedMessage
                                id={"landingpage.what.digital.tracks"}
                              />
                            }
                          </p>
                          <p className=" pb-4">
                            {
                              <FormattedMessage
                                id={"landingpage.what.digital.tracks.text"}
                              />
                            }
                          </p>
                          <span className="card-discover">
                            {
                              <FormattedMessage
                                id={"landingpage.what.digital.tracks.discover"}
                              />
                            }
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2 col-sm-6 mt-5">
                      <Link to="/locations" className="card-a">
                        <div className="card h-100">
                          <h1 className="card-title">300+</h1> <br />
                          <p className="card-subtitle">
                            {
                              <FormattedMessage
                                id={"landingpage.what.community.members"}
                              />
                            }
                          </p>
                          <p>
                            {
                              <FormattedMessage
                                id={"landingpage.what.community.members.text"}
                              />
                            }
                            <br />
                            <br />
                          </p>
                          <span className="card-discover">
                            {
                              <FormattedMessage
                                id={
                                  "landingpage.what.community.members.discover"
                                }
                              />
                            }
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2 col-sm-6 mt-5">
                      <Link to="/locations" className="card-a">
                        <div className="card h-100">
                          <h1 className="card-title">
                            {data.allContentfulLocationPage.edges.length}
                          </h1>
                          <br />
                          <p className="card-subtitle">
                            {
                              <FormattedMessage
                                id={"landingpage.what.location"}
                              />
                            }
                          </p>
                          <p className="pb-4">
                            <FormattedMessage id="landingpage.location.text" />
                          </p>
                          <span className="card-discover">
                            {
                              <FormattedMessage
                                id={"landingpage.location.discover"}
                              />
                            }
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage> */}
          </section>
          {/* application deadlines                       */}
          {/* <ApplicationPeriod
            wave={data.wave.childImageSharp.fluid}
            locationData={allCountries}
            locale={intl.locale}
          /> */}
          {/* our community slider */}
          {/* <Slider
            quoteOne={<FormattedMessage id={"landingpage.slider.jin.text"} />}
            imageOne={data.jin.childImageSharp.fluid}
            imageOneMobil={data.jin_mobil.childImageSharp.fixed}
            imageOneThumbnail={data.jin_mobil_thumbnail.childImageSharp.fluid}
            quoteTwo={
              <FormattedMessage id={"landingpage.slider.hümeyra.text"} />
            }
            imageTwo={data.huemeyra.childImageSharp.fluid}
            imageTwoMobil={data.huemeyra_mobil.childImageSharp.fixed}
            quoteThree={
              <FormattedMessage id={"landingpage.slider.miriam.text"} />
            }
            imageThree={data.miriam.childImageSharp.fluid}
            imageThreeMobil={data.miriam_mobil.childImageSharp.fixed}
            imageThreeThumbnail={
              data.miriam_mobil_thumbnail.childImageSharp.fluid
            }
          /> */}

          {/* <RightImageSectionHeading
            heading={
              <FormattedMessage id={"landingpage.googlechallenge.heading"} />
            }
            subheading={
              <FormattedMessage id={"landingpage.googlechallenge.subheading"} />
            }
            text={<FormattedMessage id={"landingpage.googlechallenge.text"} />}
            image={data.gic.childImageSharp.fluid}
            hasButton={true}
            buttonText={
              <FormattedMessage id={"landingpage.button.read_more"} />
            }
            buttonLink="https://www.wn.de/Muenster/3342867-Muensteraner-bei-Google-Impact-Challenge-ausgezeichnet-Non-Profit-Startup-Techlabs-gewinnt-20.000-Euro-Foerderpreis"
          />
          <Quote
            heading={<FormattedMessage id={"landingpage.quote.nils.heading"} />}
            subheading={
              <FormattedMessage id={"landingpage.quote.nils.subheading"} />
            }
            text={<FormattedMessage id={"landingpage.quote.nils.text"} />}
            photo={data.nils.childImageSharp.fixed}
            name="Nils Bahr"
            job="Head of Product @ TechLabs"
          /> */}
          <KeyBenefits
            heading={
              <FormattedMessage id={"program.local.keyBenefits.heading"} />
            }
            subheading={
              <FormattedMessage id={"program.local.keyBenefits.subheading"} />
            }
            firstHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.first.heading"}
              />
            }
            firstText={
              <FormattedMessage id={"program.local.keyBenefits.first.text"} />
            }
            secondHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.second.heading"}
              />
            }
            secondText={
              <FormattedMessage id={"program.local.keyBenefits.second.text"} />
            }
            thirdHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.third.heading"}
              />
            }
            thirdText={
              <FormattedMessage id={"program.local.keyBenefits.third.text"} />
            }
            fourthHeading={
              <FormattedMessage
                id={"program.local.keyBenefits.fourth.heading"}
              />
            }
            fourthText={
              <FormattedMessage id={"program.local.keyBenefits.fourth.text"} />
            }
          />
          {/* <LearnMore
            backgroundImage={data.background_location.childImageSharp.fluid}
          /> */}
        </div>
      </Layout>
    )
  }
}

export default injectIntl(index)

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `
// export const fixedImage = graphql`
//   fragment fixedImage on File {
//     childImageSharp {
//       fixed(width: 50, height: 50) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query($locale: String) {
    # imageOne: file(relativePath: { eq: "startPage.png" }) {
    #   ...fluidImage
    # }
    # accint: file(relativePath: { eq: "accint.png" }) {
    #   ...fluidImage
    # }
    # sopra: file(relativePath: { eq: "sopra.png" }) {
    #   ...fluidImage
    # }
    # westfalen: file(relativePath: { eq: "westfalen.png" }) {
    #   ...fluidImage
    # }
    # ey: file(relativePath: { eq: "ey.png" }) {
    #   ...fluidImage
    # }
    # wwo: file(relativePath: { eq: "wwo.png" }) {
    #   ...fluidImage
    # }
    # wave: file(relativePath: { eq: "wave.png" }) {
    #   ...fluidImage
    # }
    # jin: file(relativePath: { eq: "jinrhee.png" }) {
    #   ...fluidImage
    # }
    # jin_mobil: file(relativePath: { eq: "jinrhee_mobil.png" }) {
    #   ...fixedImage
    # }
    # jin_mobil_thumbnail: file(relativePath: { eq: "jin_mobil.png" }) {
    #   ...fluidImage
    # }
    # huemeyra: file(relativePath: { eq: "humeyra.png" }) {
    #   ...fluidImage
    # }
    # huemeyra_mobil: file(relativePath: { eq: "humeyra_mobil.png" }) {
    #   ...fixedImage
    # }
    # miriam: file(relativePath: { eq: "miriam.png" }) {
    #   ...fluidImage
    # }
    # miriam_mobil: file(relativePath: { eq: "miriam_mobil.png" }) {
    #   ...fixedImage
    # }
    # miriam_mobil_thumbnail: file(
    #   relativePath: { eq: "miriam_mobil_thumbnail.png" }
    # ) {
    #   ...fluidImage
    # }
    # nils: file(relativePath: { eq: "nils.png" }) {
    #   ...fixedImage
    # }
    # gic: file(relativePath: { eq: "gic_team.png" }) {
    #   ...fluidImage
    # }
    # background_location: file(
    #   relativePath: { eq: "background_locations.png" }
    # ) {
    #   ...fluidImage
    # }
    allContentfulLocationPage(
      filter: { node_locale: { eq: $locale } }
      sort: { fields: [country, heading], order: [DESC, ASC] }
    ) {
      edges {
        node {
          heading
          country
          applicationStart
          applicationEnd
          applicationLink
        }
      }
    }
  }
`
