import React, { Component } from "react"

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
import WhyWeDo from "../assets/wwd.png"
import google from "../assets/google.png"
import mission from "../assets/mission.png"
import teamStairs from "../assets/teamStairs.png"
import join from "../assets/join.png"
import MAP from "../assets/map_small.png"
import Lina from "../assets/lina.png"
import Background_mobil from "../assets/about_mobil.png"

class about extends Component {
  render() {
    return (
      <Layout gaLabel="about">
        <ProgrammHero
          headingFirst={<FormattedMessage id="about.about.program_hero.headingFirst"/>}
          headingSecond={<FormattedMessage id="about.about.program_hero.headingSecond"/>}
          intro={<FormattedMessage id="about.about.program_hero.intro"/>}
          background={Background}
          backgroundMobil={Background_mobil}
          secondintro={<FormattedMessage id="about.about.program_hero.secondintro"/>}
          href="why"
        />
        <span id="why"></span>
        <RightImageSectionHeading
          heading={<FormattedMessage id="about.why.RightImageSectionHeading.heading"/>}
          subheading={<FormattedMessage id="about.why.RightImageSectionHeading.subheading"/>}
          text={<FormattedMessage id="about.why.RightImageSectionHeading.text"/>}
          image={WhyWeDo}
          leftSize="5"
          rightSize="7"
        />
        <LeftImageSectionHeading
          heading={<FormattedMessage id="about.vision.LeftImageSectionHeading.heading"/>}
          subheading={<FormattedMessage id="about.vision.LeftImageSectionHeading.subheading"/>}
          text={<FormattedMessage id="about.vision.LeftImageSectionHeading.text"/>}
          image={google}
          leftSize="7"
          rightSize="5"
        />
        <RightImageSectionHeading
          heading={<FormattedMessage id="about.mission.RightImageSectionHeading.heading"/>}
          subheading={<FormattedMessage id="about.mission.RightImageSectionHeading.subheading"/>}
          text={<FormattedMessage id="about.mission.RightImageSectionHeading.text"/>}
          image={mission}
          leftSize="5"
          rightSize="7"
        />
        <ThreeCard
          headingOne={<FormattedMessage id="about.mission_values.ThreeCard.headingOne"/>}
          textOne={<FormattedMessage id="about.mission_values.ThreeCard.textOne"/>}
          headingTwo={<FormattedMessage id="about.mission_values.ThreeCard.headingTwo"/>}
          textTwo={<FormattedMessage id="about.mission_values.ThreeCard.textTwo"/>}
          headingThree={<FormattedMessage id="about.mission_values.ThreeCard.headingThree"/>}
          textThree={<FormattedMessage id="about.mission_values.ThreeCard.textThree"/>}
        />
        <Quote
          heading={<FormattedMessage id="quote.lina.heading"/>}
          subheading={<FormattedMessage id="quote.lina.subheading"/>}
          showHeading={false}
          text={<FormattedMessage id="quote.lina.text"/>}
          name="Lina Oechsner"
          job={<FormattedMessage id="quote.lina.job"/>}
          photo={Lina}
        />
        <CoreValues />
        <LeftImageSectionHeading
          heading={<FormattedMessage id="about.who.LeftImageSectionHeading.heading"/>}
          subheading={<FormattedMessage id="about.who.LeftImageSectionHeading.subheading"/>}
          text={<FormattedMessage id="about.who.LeftImageSectionHeading.text"/>}
          image={teamStairs}
          leftSize="7"
          rightSize="5"
        />
        <RightImageSectionHeading
          heading={<FormattedMessage id="about.join.RightImageSectionHeading.heading"/>}
          subheading={<FormattedMessage id="about.join.RightImageSectionHeading.subheading"/>}
          text={<FormattedMessage id="about.join.RightImageSectionHeading.text"/>}
          image={join}
          hasButton={true}
          buttonText={<FormattedMessage id="about.join.RightImageSectionHeading.buttonText"/>}
          buttonLink="https://www.notion.so/techlabs/Work-at-TechLabs-16fa32d54d2d41a48ece59c6d28ed403"
          leftSize="5"
          rightSize="7"
          galocation="ab"
          gasection="t_apply"
        />
        <RightImageSection
          heading={<FormattedMessage id="about.foundyorown.RightImageSectionHeading.heading"/>}
          text={<FormattedMessage id="about.foundyorown.RightImageSectionHeading.text"/>}
          image={MAP}
          hasButton={true}
          buttonText={<FormattedMessage id="about.foundyorown.RightImageSectionHeading.buttonText"/>}
          buttonLink="/foundYourOwn"
          float={false}
          leftPartSize="8"
          rightPartSize="4"
          galocation="ab"
          gasection="f_mi"
        />
      </Layout>
    )
  }
}

export default about
