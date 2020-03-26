import React from "react"
import Navbar from "../../components/Navbar"
import ProgrammHero from "../../components/ProgrammHero"
import ProgrammMobil from "../../assets/programmMobil.png"
import background from "../../assets/p_background.png"
import Academy from "../../components/Academy"
import RightImageSectionHeading from "../../components/RightImageSectionHeading"
import Remote from "../../assets/program/remote.png"
import ThreeComponents from "../../components/ThreeComponents"
import KeyBenefits from "../../components/KeyBenefits"
import DataScience from "../../assets/dashboard.png"
import web from "../../assets/webdevpro.png"
import AI from "../../assets/ai-robot.png"
import UX from "../../assets/UX.png"
import LearnMore from "../../components/LearnMore"
import Footer from "../../components/Footer"

import { FormattedMessage } from "gatsby-plugin-intl"
import Table from "../../components/program/Table"
import { Component } from "react"
import Faq from "../../components/Faq"
import FaqQuestion from "../../components/FaqQuestion"

class remote extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="pb-5"></div>
        <div className="container">
          <RightImageSectionHeading
            topText={
              <FormattedMessage
                id={"program.remote.rightImageSection.topText"}
              />
            }
            heading={
              <FormattedMessage
                id={"program.remote.rightImageSection.heading"}
              />
            }
            text={
              <FormattedMessage id={"program.remote.rightImageSection.text"} />
            }
            hasButton={true}
            // TODO: Add correct link and import from enum
            buttonText="Apply now"
            buttonLink="https://techlabsorg.typeform.com/to/o08v5Y"
            image={Remote}
          />
          <Academy
            firstTrack={
              <FormattedMessage id={"program.remote.academy.first.name"} />
            }
            firstTrackText={
              <FormattedMessage id={"program.remote.academy.first.text"} />
            }
            secondTrack={
              <FormattedMessage id={"program.remote.academy.second.name"} />
            }
            secondTrackText={
              <FormattedMessage id={"program.remote.academy.second.text"} />
            }
            thirdTrack={
              <FormattedMessage id={"program.remote.academy.third.name"} />
            }
            thirdTrackText={
              <FormattedMessage id={"program.remote.academy.third.text"} />
            }
            fourthTrack={
              <FormattedMessage id={"program.remote.academy.fourth.name"} />
            }
            fourthTrackText={
              <FormattedMessage id={"program.remote.academy.fourth.text"} />
            }
          />
          <Table
            heading={<FormattedMessage id={"program.remote.table.heading"} />}
            subheading={
              <FormattedMessage id={"program.remote.table.subheading"} />
            }
            activeProgram="remote"
            hasButton={true}
            buttonLink="https://techlabsorg.typeform.com/to/o08v5Y"
          />
          <ThreeComponents
            heading={
              <FormattedMessage id={"program.remote.threeComponents.heading"} />
            }
            subheading={
              <FormattedMessage
                id={"program.remote.threeComponents.subheading"}
              />
            }
            firstHeading={
              <FormattedMessage
                id={"program.remote.threeComponents.first.heading"}
              />
            }
            firstText={
              <FormattedMessage
                id={"program.remote.threeComponents.first.text"}
              />
            }
            secondHeading={
              <FormattedMessage
                id={"program.remote.threeComponents.second.heading"}
              />
            }
            secondText={
              <FormattedMessage
                id={"program.remote.threeComponents.second.text"}
              />
            }
            thirdHeading={
              <FormattedMessage
                id={"program.remote.threeComponents.third.heading"}
              />
            }
            thirdText={
              <FormattedMessage
                id={"program.remote.threeComponents.third.text"}
              />
            }
          />
          <KeyBenefits
            heading={
              <FormattedMessage id={"program.remote.keyBenefits.heading"} />
            }
            subheading={
              <FormattedMessage id={"program.remote.keyBenefits.subheading"} />
            }
            firstHeading={
              <FormattedMessage
                id={"program.remote.keyBenefits.first.heading"}
              />
            }
            firstText={
              <FormattedMessage id={"program.remote.keyBenefits.first.text"} />
            }
            secondHeading={
              <FormattedMessage
                id={"program.remote.keyBenefits.second.heading"}
              />
            }
            secondText={
              <FormattedMessage id={"program.remote.keyBenefits.second.text"} />
            }
            thirdHeading={
              <FormattedMessage
                id={"program.remote.keyBenefits.third.heading"}
              />
            }
            thirdText={
              <FormattedMessage id={"program.remote.keyBenefits.third.text"} />
            }
            fourthHeading={
              <FormattedMessage
                id={"program.remote.keyBenefits.fourth.heading"}
              />
            }
            fourthText={
              <FormattedMessage id={"program.remote.keyBenefits.fourth.text"} />
            }
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
            <FaqQuestion
              question="I don't have any tech skills. Is that bad?"
              answer="TechLabs' goal is to make all people digital shapers, regardless of their level of knowledge. That's why we welcome your application! We also take your previous knowledge into account with our individualized learning paths."
            />
            <FaqQuestion
              question="What is the main difference between the #codeathome Bootcamp and the Local Digital Shaper Program?"
              answer="Besides the differences stated on our website, the local Digital Shaper Program is a 5 Month Program, which will go much more in depth into your chosen study field. You will have local events with experienced mentors, Premium Online Courses and will complete a whole project with other participants from from your location. The participants have also the option to individualize their track through a questionnaire. This would remove some of the materials you are already skilled in. For example: if you already have Python skills, the curriculum we would assign you, wouldn’t have any introduction to Python materials. The #codeathome Bootcamp is only a comprehensive 2 month program, which participant can do completely online from anywhere in the world. In this Bootcamp we basic track with all materials. This means, if you apply for the Data Science Program and already have some Python skills, you can skip the introduction to Python materials on your own."
            />
            <FaqQuestion
              question="Is there a limitation on the number of people who get accepted to participate in the #codeathome Bootcamp?"
              answer="We dream of a world full of Digital Shapers so no, there is no limitation!"
            />
            <FaqQuestion
              question="Who is eligible to apply for the #codeathome Bootcamp?"
              answer="Everyone from anywhere in the world who has time to complete a 2 month part-time bootcamp."
            />
            <FaqQuestion
              question="Can you apply for the #codeathome and the Local Digital Shaper Program at the same time?"
             answer="No. You can only apply for one Program at the same time. If you are locally based at one of our TechLabs locations, we recommend to apply for the Local Digital Shaper Program. If not the #codeathome Bootcamp is the best program to acquire some tech skills."
            />
            <FaqQuestion
             question="What kind of materials will be covered? Do you have a curriculum of some kind?"
             answer="Yes, we have a curriculum and the curriculum/bootcamp will cover an introduction into your chosen study field as well as intermediate skills. Depending on your skills you already have you can also skip some materials."
            />
            <FaqQuestion
              question="What will be the source of the material?"
              answer="The bootcamp links to different materials, which our curriculum team selected, from Udemy, Coursera, Udacity, YouTube, and different articles. Additionally, we also provide TechLabs Coding Challenges, which you can use to apply your learned skills."
            />
            <FaqQuestion
              question="What is the average length of the online learning tracks for the #codeathome Bootcamp?"
              answer="The average length of the online learning tracks is 25-35 hours."
            />
            <FaqQuestion
              question="Is the Tech for Good Challenge mandatory? What is meant by 'Tech for Good'? Can I just do the online courses without being involved in the online community?"
              answer="To complete the #codeathome Bootcamp successfully and to receive our Digital Shaper Certificate you need to solve the Tech for Good Challenge. But don't worry. We will support you, if you have any questions."
            />
            <FaqQuestion
              question="What is meant by 'online community'? Can I just do the online courses without being involved in the online community?"
              answer="We truly believe that online learning does not unfold its full potential in isolation. We need a social context in which people can share what they have learned and help each other. Therefore we provide social activities like a study-buddy systems or host online live events. These social activities are voluntary."
            />
            <FaqQuestion
              question="Do I get a certificate after the completion of the #codeathome Bootcamp? What are the prerequisites for that?"
              answer="After you completed your learning track successfully and solved a coding challenge you will be rewarded with our Digital Shaper Certificate."
            />
            <FaqQuestion
              question="How much time will I have to invest in general?"
              answer="In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum and suggest about  6 hours per week."
            />
         </Faq>
        <Footer />
      </div>
    )
  }
}

export default remote
