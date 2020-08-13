import React from "react"

// plugins
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Navbar from "../../components/Layout/Navbar"
import Footer from "../../components/Layout/Footer"
import Button from "../../components/smallComponents/Button"
import ProgrammHero from "../../components/program/ProgrammHero"
import Academy from "../../components/program/Academy"
import LearnMore from "../../components/program/LearnMore"
import Faq from "../../components/shared/Faq"
import FaqQuestion from "../../components/shared/FaqQuestion"


// assets
import DataScience from "../../assets/dashboard.png"
import background from "../../assets/p_background.png"
import ProgrammMobil from "../../assets/programmMobil.png"
import web from "../../assets/webdevpro.png"

const index = () => {
  return (
    <>
      <div>
        <Navbar />
        <ProgrammHero
          headingFirst={<FormattedMessage id={"programs.heading.1"} />}
          headingSecond={<FormattedMessage id={"programs.heading.2"} />}
          intro={
            <FormattedMessage id={"programs.subheading"} />
          }
          background={background}
          backgroundMobil={ProgrammMobil}
        />
        <div className="container">
          <Academy
            firstTrack={
              <FormattedMessage id={"program.local.academy.first.name"} />
            }
            firstTrackText={
              <FormattedMessage id={"program.local.academy.first.text"} />
            }
            secondTrack={
              <FormattedMessage id={"program.local.academy.second.name"} />
            }
            secondTrackText={
              <FormattedMessage id={"program.local.academy.second.text"} />
            }
            thirdTrack={
              <FormattedMessage id={"program.local.academy.third.name"} />
            }
            thirdTrackText={
              <FormattedMessage id={"program.local.academy.third.text"} />
            }
            fourthTrack={
              <FormattedMessage id={"program.local.academy.fourth.name"} />
            }
            fourthTrackText={
              <FormattedMessage id={"program.local.academy.fourth.text"} />
            }
          />
          <LearnMore
            heading={
              <FormattedMessage id={"landingpage.learn_more.heading"} />
            } 
            subheading={
              <FormattedMessage id={"programs.learn_more.subheading"} />
            } 
            firstProjectHeading="Local Digital Shaper Program"
            firstProjectImage={web}
            firstLink="/program/local"
            firstButtonText={
              <FormattedMessage id={"programs.learn_more.button"}/>
            }
            secondProjectHeading="#codeathome Bootcamp"
            secondProjectImage={DataScience}
            secondLink="/program/remote"
            secondButtonText={
              <FormattedMessage id={"programs.learn_more.button"}/>
            }
          />
          <Faq>
            <FaqQuestion
              question="faq_1.question"
              answer="faq_1.answer"
            />
            <FaqQuestion
              question="faq_2.question"
              answer="faq_2.answer"
            />
            <FaqQuestion
              question="faq_3.question"
              answer="faq_3.answer"
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Button 
                text={
                  <FormattedMessage id={"faq.button"}/>
                }
                link="/faq" 
                primary={true} />
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
