import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import Background from "../assets/about_background.png"
import RightImageSectionHeading from "../components/RightImageSectionHeading"
import RightImageSection from "../components/RightImageSection"
import LeftImageSectionHeading from "../components/LeftImageSectionHeading"
import CoreValues from "../components/CoreValues"
import CheckoutLocations from "../components/CheckoutLocations"
import Quote from "../components/Quote"
import WhyWeDo from "../assets/wwd.png"
import google from "../assets/google.png"
import mission from "../assets/mission.png"
import teamStairs from "../assets/teamStairs.png"
import join from "../assets/join.png"
import ThreeCard from "../components/smallComponents/ThreeCard"
import MAP from "../assets/map_small.png"
import Lina from "../assets/lina.png"
import Background_mobil from "../assets/about_mobil.png"

class about extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ProgrammHero
          headingFirst="About"
          headingSecond="TechLabs"
          intro="We at TechLabs dream of a world with no digital illiterates. A world full of tech-savvy individuals who approach the challenges of our time with a digital and entrepreneurial mindset."
          background={Background}
          backgroundMobil={Background_mobil}
          secondintro="Learn more about us and our vision."
          href="test"
        />
        <RightImageSectionHeading
          heading="Why we do what we do"
          subheading="We need to address the digital skill gap"
          text="McKinsey estimates that between 400 million and 800 million individuals could be displaced by automation and need to find new jobs by 2030 around the world. 75 million to 375 million may need to switch occupational categories and learn new skills. Who is there to help? Universities and bootcamps will not achieve this alone. It will come down to people like us to rethink education from the ground up and come up with new and innovative ideas on how to solve this immense challenge."
          image={WhyWeDo}
          leftSize="5"
          rightSize="7"
        />
        <LeftImageSectionHeading
          heading="Our Vision"
          subheading="A world without digital illiterates"
          text="We at TechLabs dream of a world with no digital illiterates. A world full of tech-savvy individuals who approach the challenges of our time with a digital and entrepreneurial mindset. As a learning accelerator for technology skills, TechLabs designs pioneering learning journeys for our communities. It's a place where diversity meets personalized learning paths. A place where beginners meet experienced mentors. A place where curiosity meets powerful learning resources and where online and offline learning are not just two separate sides of the same coin, but perfectly blended together into an holistic learning concept."
          image={google}
          leftSize="7"
          rightSize="5"
        />
        <RightImageSectionHeading
          heading="Our Mission"
          subheading="A learning platform for young people of all disciplines"
          text="Our mission is to enable as many people as possible to acquire state-of-the-art tech skills to solve today’s problems in a digital way by providing a unique program that combines online learning, project work, and local community events. To bring digital education to the next level, we aim for three distinctive goals."
          image={mission}
          leftSize="5"
          rightSize="7"
        />
        <ThreeCard
          headingOne="Effective Learning"
          textOne="We show you the most effective way to build domain expertise in tech. We achieve this through a revolutionary combination of blended and accelerated learning techniques."
          headingTwo="Learning at scale"
          textTwo="We bring our offering to as many ambitious people as possible. In particular, to those who need it the most and/or create the most impact."
          headingThree="Connecting People"
          textThree="We believe learning requires diversity and is best embraced within a vibrant community. Hence, we aim to connect people across different disciplines and cultural backgrounds along their personal journey."
        />
        <Quote
          heading="Helping Others"
          subheading="Make a difference"
          showHeading={false}
          text="Helping others to develop the skills they need in order to make a difference and seeing them succeed is one of the most rewarding experiences. That’s why we are not asking for anything in return and work on a voluntary basis."
          name="Lina Oechsner"
          job="Head of Marketing @TechLabs"
          photo={Lina}
        />
        <CoreValues />
        <LeftImageSectionHeading
          heading="Who we are"
          subheading="Find out more about the people behind the mission"
          text="What started 2017 as an idea of our seven founding members in the working area of the local library in Münster has become a growing team with more than seventy team members. The inspiring work that everybody contributes on a voluntary basis helps TechLabs to keep flourishing. TechLabs consist of seventy individuals from all kinds of different backgrounds who bonded over the same idea and driven reach the TechLabs Mission."
          image={teamStairs}
          leftSize="7"
          rightSize="5"
        />
        <RightImageSectionHeading
          heading="Join the Team"
          subheading="Want to become part of TechLabs?"
          text="You are dreaming of a world with no digital illiterates and are passionate about tech? As a TechLabs Management-Team member you will work voluntarily to support others in learning tech. Reach out and join the TechLabs family."
          image={join}
          hasButton={true}
          buttonText="Apply now"
          buttonLink="https://www.notion.so/techlabs/Work-at-TechLabs-16fa32d54d2d41a48ece59c6d28ed403"
          leftSize="5"
          rightSize="7"
        />
        <CheckoutLocations />
        <RightImageSection
          heading="Your city is not on the map?"
          text="If you are willing to shape the future of tech education and want to create your own TechLabs location, reach out! Let's work together and build something great!"
          image={MAP}
          hasButton={true}
          buttonText="More Information"
          buttonLink="/foundYourOwn"
          float={false}
          leftPartSize="8"
          rightPartSize="4"
        />
        <Footer />
      </>
    )
  }
}

export default about
