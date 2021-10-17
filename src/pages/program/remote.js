import React from "react"
import { Component } from "react"
import { graphql } from "gatsby"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Academy from "../../components/program/Academy"
import ThreeComponents from "../../components/program/ThreeComponents"
import KeyBenefits from "../../components/shared/KeyBenefits"
import LearnMore from "../../components/program/LearnMore"
import Table from "../../components/program/Table"
import Faq from "../../components/shared/Faq"
import FaqQuestion from "../../components/shared/FaqQuestion"
import Newsletter from "../../components/program/newsletter"
import Layout from "../../components/Layout/Layout"
import Hero from "../../components/program/remote/Hero"
import KeyFacts from "../../components/program/remote/keyFacts"

// assets
import DataScience from "../../assets/dashboard.png"
import web from "../../assets/webdevpro.png"
import AI from "../../assets/ai-robot.png"
import UX from "../../assets/ux-image.png"
import Seo from "../../components/Layout/Seo"

class remote extends Component {
  startDateString = date => {
    const newDate = date.split("-")
    return `${newDate[2]}.${newDate[1]}.${newDate[0]}`
  }
  render() {
    const { data } = this.props
    const {
      pageTitle,
      heroHeading,
      intro,
      startDate,
      nextDate,
      newsletterVisible,
      keyFacts,
      concept,
      tracks,
      keyBenefits,
      whatIsIncluded,
      faq,
    } = data.page.edges[0].node
    return (
      <Layout>
        <Seo title="Remote Program" />
        {/* <Hero
          headingFirst={pageTitle.pageTitle.heading1}
          headingSecond={pageTitle.pageTitle.heading2}
          headingIntro={heroHeading}
          intro={""}
          applicationStart={this.startDateString(startDate)}
          nextBootcampStart={this.startDateString(nextDate)}
          img={data.remote.childImageSharp.fluid}
          link="https://techlabsorg.typeform.com/to/tSKG8BBE"
        /> */}
        <KeyFacts facts={keyFacts.facts} />
        {/* {newsletterVisible && (
          <Newsletter
            image={data.newsletterImage.childImageSharp.fluid}
            actionLink="https://techlabs.us10.list-manage.com/subscribe/post?u=ba719a6a0ef0ac12e51aa3ba2&amp;id=8987774d41"
          />
        )} */}
        <div className="container">
          <ThreeComponents
            heading={
              <FormattedMessage id={"program.remote.threeComponents.heading"} />
            }
            subheading={
              <FormattedMessage
                id={"program.remote.threeComponents.subheading"}
              />
            }
            firstHeading={concept.concept[0].heading}
            firstText={concept.concept[0].text}
            secondHeading={concept.concept[1].heading}
            secondText={concept.concept[1].text}
            thirdHeading={concept.concept[2].heading}
            thirdText={concept.concept[2].text}
          />
          <Academy
            firstTrack={tracks.tracks[0].heading}
            firstTrackText={tracks.tracks[0].text}
            firstTrackLink={tracks.tracks[0].link}
            secondTrack={tracks.tracks[1].heading}
            secondTrackText={tracks.tracks[1].text}
            secondTrackLink={tracks.tracks[1].link}
            thirdTrack={tracks.tracks[2].heading}
            thirdTrackText={tracks.tracks[2].text}
            thirdTrackLink={tracks.tracks[2].link}
            fourthTrack={tracks.tracks[3].heading}
            fourthTrackText={tracks.tracks[3].text}
            fourthTrackLink={tracks.tracks[3].link}
          />

          <KeyBenefits
            heading={
              <FormattedMessage id={"program.remote.keyBenefits.heading"} />
            }
            subheading={
              <FormattedMessage id={"program.remote.keyBenefits.subheading"} />
            }
            firstHeading={keyBenefits.keyBenefits[0].heading}
            firstText={keyBenefits.keyBenefits[0].text}
            secondHeading={keyBenefits.keyBenefits[1].heading}
            secondText={keyBenefits.keyBenefits[1].text}
            thirdHeading={keyBenefits.keyBenefits[2].heading}
            thirdText={keyBenefits.keyBenefits[2].text}
            fourthHeading={keyBenefits.keyBenefits[3].heading}
            fourthText={keyBenefits.keyBenefits[3].text}
          />
          <Table
            heading={<FormattedMessage id={"program.remote.table.heading"} />}
            subheading={
              <FormattedMessage id={"program.remote.table.subheading"} />
            }
            activeProgram="remote"
            hasButton={false}
            buttonLink="https://techlabsorg.typeform.com/to/o08v5Y"
            codeathome={whatIsIncluded}
          />
          <LearnMore
            heading={
              <FormattedMessage id={"program.remote.learnMore.heading"} />
            }
            subheading={
              <FormattedMessage id={"program.remote.learnMore.subheading"} />
            }
            firstProjectHeading={
              <FormattedMessage
                id={"program.remote.learnMore.firstProjectHeading"}
              />
            }
            firstProjectImage={web}
            firstLink="/web"
            secondProjectHeading={
              <FormattedMessage
                id={"program.remote.learnMore.secondProjectHeading"}
              />
            }
            secondProjectImage={DataScience}
            secondLink="/dataScience"
            thirdProjectHeading={
              <FormattedMessage
                id={"program.remote.learnMore.thirdProjectHeading"}
              />
            }
            thirdProjectImage={AI}
            thirdLink="/ai"
            fourthProjectHeading={
              <FormattedMessage
                id={"program.remote.learnMore.fourthProjectHeading"}
              />
            }
            fourthProjectImage={UX}
            fourthLink="/ux"
          />
        </div>

        <Faq>
          {faq.map(faq => {
            return <FaqQuestion question={faq.question} answer={"allo"} />
          })}
        </Faq>
      </Layout>
    )
  }
}

export default remote

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query($locale: String) {
    newsletterImage: file(relativePath: { eq: "Newsletter.png" }) {
      ...fluidImage
    }
    remote: file(relativePath: { eq: "remote.png" }) {
      ...fluidImage
    }
    page: allContentfulCodeAtHome(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          pageTitle {
            pageTitle {
              heading1
              heading2
            }
          }
          heroHeading
          # intro {
          #   content {
          #     content {
          #       value
          #     }
          #   }
          # }
          tracks {
            tracks {
              heading
              link
              text
            }
          }
          nextDate
          startDate
          newsletterVisible
          keyFacts {
            facts {
              heading
              text
            }
          }
          concept {
            concept {
              heading
              text
            }
          }
          keyBenefits {
            keyBenefits {
              heading
              text
            }
          }
          whatIsIncluded {
            whatIsIncluded {
              time {
                hours
                month
              }
              who
              what {
                _1
                _2
                _3
                _4
              }
              tracks {
                _1
                _2
                _3
                _4
              }
              difference {
                _1
                _2
                _3
              }
            }
          }
          tracks {
            tracks {
              link
              text
              heading
            }
          }
          faq {
            question
            # answer {
            #   json
            # }
          }
        }
      }
    }
  }
`
