import React from "react"
import Academy from "../../components/program/Academy"
import ThreeComponents from "../../components/program/ThreeComponents"
import KeyBenefits from "../../components/shared/KeyBenefits"
import DataScience from "../../assets/dashboard.png"
import web from "../../assets/webdevpro.png"
import AI from "../../assets/ai-robot.png"
import UX from "../../assets/UX.png"
import LearnMore from "../../components/program/LearnMore"
import Footer from "../../components/Layout/Footer"

import { FormattedMessage } from "gatsby-plugin-intl"
import Table from "../../components/program/Table"
import { Component } from "react"
import Faq from "../../components/shared/Faq"
import FaqQuestion from "../../components/shared/FaqQuestion"
import Newsletter from "../../components/program/newsletter"
import { graphql } from "gatsby"

import Layout from "../../components/Layout/Layout"
import Hero from "../../components/program/remote/Hero"
import KeyFacts from "../../components/program/remote/keyFacts"

class remote extends Component {
  startDateString = date => {
    const newDate = date.split("-")
    return `${newDate[2]}.${newDate[1]}.${newDate[0]}`
  }
  render() {
    const { data } = this.props
    const {
      heroHeading,
      intro,
      startDate,
      nextDate,
      newsletterVisible,
    } = data.page.edges[0].node
    console.log(data)
    return (
      <Layout>
        <Hero
          headingFirst="#codeathome"
          headingSecond="bootcamp"
          headingIntro={heroHeading}
          intro={intro.content[0].content[0].value}
          applicationStart={this.startDateString(startDate)}
          nextBootcampStart={this.startDateString(nextDate)}
          img={data.remote.childImageSharp.fluid}
          link="https://techlabsorg.typeform.com/to/tSKG8BBE"
        />
        <KeyFacts
          facts={[
            {
              heading: "remote",
              text:
                "The Bootcamp is fully remote so that you can participate independet from your location",
            },
            {
              heading: "8 weeks",
              text:
                "8 weeks of coding and group work is waiting for you to shape your career path",
            },
            {
              heading: "4 tracks",
              text:
                "You can choose out of 4 Tracks: Data Science, Web Development, User Experience Design and AI",
            },
            {
              heading: "for Free",
              text:
                "The #codeathome Bootcamp is completely free for you (thanks to our sponsors)",
            },
            {
              heading: "together",
              text:
                "You are going to learn to code within an motivating community and with the support of our mentors",
            },
          ]}
        />
        {newsletterVisible && (
          <Newsletter
            image={data.newsletterImage.childImageSharp.fluid}
            title="Want to know when the next application period starts?"
            subtitle="Subscribe to our email list to get notified!"
          />
        )}
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
          <Academy
            firstTrack={
              <FormattedMessage id={"program.remote.academy.first.name"} />
            }
            firstTrackText={
              <FormattedMessage id={"program.remote.academy.first.text"} />
            }
            firstTrackLink="/dataScience"
            secondTrack={
              <FormattedMessage id={"program.remote.academy.second.name"} />
            }
            secondTrackText={
              <FormattedMessage id={"program.remote.academy.second.text"} />
            }
            secondTrackLink="/web"
            thirdTrack={
              <FormattedMessage id={"program.remote.academy.third.name"} />
            }
            thirdTrackText={
              <FormattedMessage id={"program.remote.academy.third.text"} />
            }
            thirdTrackLink="/ai"
            fourthTrack={
              <FormattedMessage id={"program.remote.academy.fourth.name"} />
            }
            fourthTrackText={
              <FormattedMessage id={"program.remote.academy.fourth.text"} />
            }
            fourthTrackLink="/ux"
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
          <Table
            heading={<FormattedMessage id={"program.remote.table.heading"} />}
            subheading={
              <FormattedMessage id={"program.remote.table.subheading"} />
            }
            activeProgram="remote"
            hasButton={false}
            buttonLink="https://techlabsorg.typeform.com/to/o08v5Y"
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
      </Layout>
    )
  }
}

export default remote

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
  query {
    newsletterImage: file(relativePath: { eq: "Newsletter.png" }) {
      ...fluidImage
    }
    remote: file(relativePath: { eq: "remote.png" }) {
      ...fluidImage
    }
    page: allContentfulCodeAtHome {
      edges {
        node {
          heroHeading
          intro {
            content {
              content {
                value
              }
            }
          }
          nextDate
          startDate
          newsletterVisible
        }
      }
    }
  }
`
