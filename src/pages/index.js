import React from "react"
import { graphql } from "gatsby"

// plugins & external
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-react-intl"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

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

    const wwoBackground = getImage(data.wwo.childImageSharp)
    const wwoBackgroundImage = convertToBgImage(wwoBackground)
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
                    <span className="highlighted lh-90">Digital. Shapers.</span>
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
                  <StaticImage
                    alt="commmunity"
                    src="../assets/images/startPage.png"
                    placeholder="tracedSVG"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* winner of GIC and partner logos */}
          <section className="gic py-5">
            <div className="container center">
              <img className="gic-badge" src={GIC} alt="gic" />
            </div>
            <PartnerLogos
              logoOne={data.accint}
              linkPartnerOne="https://www.accenture.com/de-de/interactive-index"
              logoTwo={data.sopra}
              linkPartnerTwo="https://www.soprasteria.de/de"
              logoThree={data.westfalen}
              linkPartnerThree="https://westfalen.com/de/de/privatkunden/"
              logoFour={data.eyj}
              linkPartnerFour="https://www.ey.com/de_de"
            />
          </section>
          {/* what we offer */}
          <section className="mt-5">
            <BackgroundImage
              {...wwoBackgroundImage}
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
            </BackgroundImage>
          </section>
          {/* application deadlines                       */}
          <ApplicationPeriod locationData={allCountries} locale={intl.locale} />
          {/* our community slider */}
          <Slider
            quoteOne={<FormattedMessage id={"landingpage.slider.jin.text"} />}
            imageOne={data.jin}
            imageOneMobil={data.jin_mobil}
            imageOneThumbnail={data.jin_mobil_thumbnail}
            quoteTwo={
              <FormattedMessage id={"landingpage.slider.hümeyra.text"} />
            }
            imageTwo={data.huemeyra}
            imageTwoMobil={data.huemeyra_mobil}
            quoteThree={
              <FormattedMessage id={"landingpage.slider.miriam.text"} />
            }
            imageThree={data.miriam}
            imageThreeMobil={data.miriam_mobil}
            imageThreeThumbnail={data.miriam_mobil_thumbnail}
          />

          <RightImageSectionHeading
            heading={
              <FormattedMessage id={"landingpage.googlechallenge.heading"} />
            }
            subheading={
              <FormattedMessage id={"landingpage.googlechallenge.subheading"} />
            }
            text={<FormattedMessage id={"landingpage.googlechallenge.text"} />}
            image={data.gic}
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
            photo={data.nils}
            name="Nils Bahr"
            job="Head of Product @ TechLabs"
          />
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
  query ($locale: String) {
    accint: file(relativePath: { eq: "accint.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          width: 150
        )
      }
    }
    sopra: file(relativePath: { eq: "sopra.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          width: 150
        )
      }
    }
    westfalen: file(relativePath: { eq: "westfalen.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          width: 100
        )
      }
    }
    ey: file(relativePath: { eq: "ey.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          width: 50
        )
      }
    }
    wwo: file(relativePath: { eq: "wwo.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }

    jin: file(relativePath: { eq: "jinrhee.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    jin_mobil: file(relativePath: { eq: "jinrhee_mobil.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    jin_mobil_thumbnail: file(relativePath: { eq: "jin_mobil.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    huemeyra: file(relativePath: { eq: "humeyra.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    huemeyra_mobil: file(relativePath: { eq: "humeyra_mobil.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    miriam: file(relativePath: { eq: "miriam.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    miriam_mobil: file(relativePath: { eq: "miriam_mobil.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    miriam_mobil_thumbnail: file(
      relativePath: { eq: "miriam_mobil_thumbnail.png" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    nils: file(relativePath: { eq: "nils.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    gic: file(relativePath: { eq: "gic_team.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
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
