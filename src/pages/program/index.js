import React from "react"
import Navbar from "../../components/Navbar"
import ProgrammHero from "../../components/ProgrammHero"
import Academy from "../../components/Academy"
import ThreeComponents from "../../components/ThreeComponents"
import LearnMore from "../../components/LearnMore"
import background from "../../assets/p_background.png"
import Faq from "../../components/Faq"
import FaqQuestion from "../../components/FaqQuestion"
import DataScience from "../../assets/dashboard.png"
import web from "../../assets/webdevpro.png"
import Footer from "../../components/Footer"
import ProgrammMobil from "../../assets/programmMobil.png"
import Button from "../../components/smallComponents/Button"
import Table from "../../components/program/Table"

import { FormattedMessage } from "gatsby-plugin-intl"

const index = () => {
  return (
    <>
      <div>
        <Navbar />
        <ProgrammHero
          headingFirst="Our Learning"
          headingSecond="Programs"
          intro="Our program provides you with the most effective way to build domain knowledge in the tech sphere. Our blended-learning concept combines Online Learning, Project Work, and TechLabs Community Events. Discover our program now."
          background={background}
          backgroundMobil={ProgrammMobil}
        />
        <div className="container">
          <Academy />
          <Table
            heading={<FormattedMessage id={"program.index.table.heading"} />}
            subheading={
              <FormattedMessage id={"program.index.table.subheading"} />
            }
            activeProgram="remote"
          />
          <LearnMore
            heading="Learn More"
            subheading="Get more information about the programs!"
            firstProjectHeading="Local Digital Shaper Program"
            firstProjectImage={web}
            firstLink="/program/local"
            secondProjectHeading="#codeathome Bootcamp"
            secondProjectImage={DataScience}
            secondLink="/program/remote"
          />
          <Faq>
            <FaqQuestion
              question="How do I apply for the Digital Shaper Program?"
              answer="This can be done directly on our application page. Make sure to look up the application deadline for your location."
            />
            <FaqQuestion
              question="What should I write in my application to be accepted?"
              answer="At TechLabs we want to understand why you are motivated to join our program. We are building a vibrant and interdisciplinary team, so don’t hesitate to apply independent of your study background and previous knowledge. There is no such thing as the right answer to our questions."
            />
            <FaqQuestion
              question="How can I imagine the time required?"
              answer="In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum. Our learning materials have a total duration of 50+ hours. Please also bear in mind that the project phase is usually linked to increased coordination effort with your project team. In any case, the invested time will be worth it!"
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Button text="More Questions?" link="/faq" primary={true} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default index
