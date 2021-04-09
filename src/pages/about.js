import React, { Component } from "react"
import { graphql } from "gatsby"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Layout from "../components/Layout/Layout"
import ProgrammHero from "../components/program/ProgrammHero"
import RightImageSectionHeading from "../components/shared/RightImageSectionHeading"
import RightImageSection from "../components/shared/RightImageSection"
import LeftImageSectionHeading from "../components/shared/LeftImageSectionHeading"
import CoreValues from "../components/program/CoreValues"
import Quote from "../components/shared/Quote"
import ThreeCard from "../components/smallComponents/ThreeCard"

// assets
import Background from "../assets/about_background.png"
import google from "../assets/google.png"
import teamStairs from "../assets/teamStairs.png"
import MAP from "../assets/map_small.png"
import Background_mobil from "../assets/about_mobil.png"

class about extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <ProgrammHero
          headingFirst={
            <FormattedMessage id="about.about.program_hero.headingFirst" />
          }
          headingSecond={
            <FormattedMessage id="about.about.program_hero.headingSecond" />
          }
          intro={<FormattedMessage id="about.about.program_hero.intro" />}
          background={Background}
          backgroundMobil={Background_mobil}
          secondintro={
            <FormattedMessage id="about.about.program_hero.secondintro" />
          }
          href="why"
        />
        <span id="why"></span>
        <RightImageSectionHeading
          heading={
            <FormattedMessage id="about.why.RightImageSectionHeading.heading" />
          }
          subheading={
            <FormattedMessage id="about.why.RightImageSectionHeading.subheading" />
          }
          text={
            <FormattedMessage id="about.why.RightImageSectionHeading.text" />
          }
          image={data.whyWeDo.childImageSharp.fluid}
          leftSize="5"
          rightSize="7"
        />
        <LeftImageSectionHeading
          heading={
            <FormattedMessage id="about.vision.LeftImageSectionHeading.heading" />
          }
          subheading={
            <FormattedMessage id="about.vision.LeftImageSectionHeading.subheading" />
          }
          text={
            <FormattedMessage id="about.vision.LeftImageSectionHeading.text" />
          }
          image={google}
          leftSize="7"
          rightSize="5"
        />
        <RightImageSectionHeading
          heading={
            <FormattedMessage id="about.mission.RightImageSectionHeading.heading" />
          }
          subheading={
            <FormattedMessage id="about.mission.RightImageSectionHeading.subheading" />
          }
          text={
            <FormattedMessage id="about.mission.RightImageSectionHeading.text" />
          }
          image={data.mission.childImageSharp.fluid}
          leftSize="5"
          rightSize="7"
        />
        <ThreeCard
          headingOne={
            <FormattedMessage id="about.mission_values.ThreeCard.headingOne" />
          }
          textOne={
            <FormattedMessage id="about.mission_values.ThreeCard.textOne" />
          }
          headingTwo={
            <FormattedMessage id="about.mission_values.ThreeCard.headingTwo" />
          }
          textTwo={
            <FormattedMessage id="about.mission_values.ThreeCard.textTwo" />
          }
          headingThree={
            <FormattedMessage id="about.mission_values.ThreeCard.headingThree" />
          }
          textThree={
            <FormattedMessage id="about.mission_values.ThreeCard.textThree" />
          }
        />
        <Quote
          heading={<FormattedMessage id="quote.headofmarketing.heading" />}
          subheading={<FormattedMessage id="quote.headofmarketing.subheading" />}
          showHeading={false}
          text={<FormattedMessage id="quote.headofmarketing.text" />}
          name="Julian Junghöfer"
          job={<FormattedMessage id="quote.headofmarketing.job" />}
          photo={data.julian.childImageSharp.fixed}
        />
        <CoreValues />
        <LeftImageSectionHeading
          heading={
            <FormattedMessage id="about.who.LeftImageSectionHeading.heading" />
          }
          subheading={
            <FormattedMessage id="about.who.LeftImageSectionHeading.subheading" />
          }
          text={
            <FormattedMessage id="about.who.LeftImageSectionHeading.text" />
          }
          image={teamStairs}
          leftSize="7"
          rightSize="5"
        />
        <RightImageSectionHeading
          heading={
            <FormattedMessage id="about.join.RightImageSectionHeading.heading" />
          }
          subheading={
            <FormattedMessage id="about.join.RightImageSectionHeading.subheading" />
          }
          text={
            <FormattedMessage id="about.join.RightImageSectionHeading.text" />
          }
          image={data.join.childImageSharp.fluid}
          hasButton={true}
          buttonText={
            <FormattedMessage id="about.join.RightImageSectionHeading.buttonText" />
          }
          buttonLink="https://www.notion.so/techlabs/Volunteer-at-TechLabs-9004464ef2a0420cb587aab9ba03037d"
          leftSize="5"
          rightSize="7"
        />
        <RightImageSection
          heading={
            <FormattedMessage id="about.foundyorown.RightImageSectionHeading.heading" />
          }
          text={
            <FormattedMessage id="about.foundyorown.RightImageSectionHeading.text" />
          }
          image={MAP}
          hasButton={true}
          buttonText={
            <FormattedMessage id="about.foundyorown.RightImageSectionHeading.buttonText" />
          }
          buttonLink="/foundYourOwn"
          float={false}
          leftPartSize="8"
          rightPartSize="4"
        />
      </Layout>
    )
  }
}

export default about

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 50, height: 50) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`


export const pageQuery = graphql`
  query {
    whyWeDo: file(relativePath: { eq: "wwd.png" }) {
      ...fluidImage
    }
    mission: file(relativePath: { eq: "mission.png" }) {
      ...fluidImage
    }
    join: file(relativePath: { eq: "join.png" }) {
      ...fluidImage
    }
    julian: file(relativePath: { eq: "julian.png" }) {
    ...fixedImage
    }
  }
`
