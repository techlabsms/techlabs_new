import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import Faq from "../components/Faq"
import WhatYouWillLearn from "../components/WhatYouWillLearn"
import RightImageSection from "../components/RightImageSection"
import LeftImageSection from "../components/LeftImageSection"
import Projects from "../components/Projects"
import CallToAction from "../components/CallToAction"
import FirstImpression from "../components/FirstImpression"
import FaqQuestion from "../components/FaqQuestion"
import UX from "../assets/UX.png"
import UX2 from "../assets/UX2.png"
import david from "../assets/david.png"
import { Link } from "gatsby"
import background from "../assets/ds_background.png"
import backgroundMobil from "../assets/courseMobil.png"

class ux extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst="UX"
            headingSecond=" Design"
            showCard={true}
            background={background}
            intro="Inform yourself here about our UX Design track. Start your six months learning journey as a part of the next batch in the city of your choice. Acquire state-of-the-art tech skills by using one of our individualized tracks, local events, and professional mentoring. Within six months you will finish a tech project and be rewarded with our Digital Shaper certificate."
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading="What is User Experience Design?"
            subheading="A UX designer’s tasks often include user research, designing interactive prototypes, and testing designs."
            text="The User Experience is made up of a person’s perception and response resulting from the use or even just the anticipated use of a product, system, or service. Therefore, UX Design is the process of understanding the user to iteratively improve the usability, accessibility and pleasure while interacting with the product. In short: Your job is it to make a user enjoy your product."
            image={UX2}
          />
          <RightImageSection
            heading="Why User Experience Design?"
            subheading="Every product has an user experience. Learn how to perfect it!"
            text="Since companies started anticipating the value of creating a good user experience products in all life areas have become more and more user friendly. As a result the the demand for good usability and positive experiences grew over time. In addition to that there are new products entering the market every day, all of which have different demands to fulfill the needs of the people that use or even depend on them.
                    UX Design is not only necessary to successfully establish a product it is also essential to keep the product on the market and develop it further.
                    As a lot of products and informations are turning digital you will be the key to making them accessible for the people that depend on them and with that have the chance to make their lives easier. "
            image={UX}
          />
          <WhatYouWillLearn
            intro="Define and scope the design problem you will try to address!"
            first="Learn UX Design with practical examples and use the opportunity to build a personal portfolio."
            second="Find out what the key values are for designing an enjoyable user experience"
            third="Get experience in communicating in a multidisciplinary team and create your own design portfolio."
            fourth="Get to know tools to prototype and implement your ideas."
          />
          <LeftImageSection
            heading="More about the Track"
            subheading="Great design is born, nurtured, and grown – all through a systematic, learnable process!"
            text="Within the track, you will explore the process of taking a basic concept, grounded in user needs, and developing it into a design that will address those needs. You will gain hands-on experience with techniques such as prototyping, scenario and persona development as well as wireframing that will help you transform your understanding of what your users need into a compelling user experience. Additionally, you turn your ideas into interactive prototypes that can be tested with prospective users and iteratively turned into a high quality design."
            image={david}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading="Get a first Impression"
            subheading="Check out our curriculum that is open for everybody!"
            firstHeading="Introduction to User Experience Design"
            firstImage={UX2}
            firstText="Start with our free Track and learn the fundamentals now and see if it’s right for you"
            firstLink="https://app.edyoucated.org/login"
          />
          <Faq>
            <FaqQuestion
              question="How do I apply for the Digital Shaper Program?"
              answer="This can be done directly on our application page. Make sure to look up the application deadline for your location."
            />
            <FaqQuestion
              question="What do you look for in an applicant?"
              answer="At TechLabs we want to understand why you are motivated to join our program. We are building a vibrant and interdisciplinary team, so don’t hesitate to apply independent of your study background and previous knowledge. There is no such thing as the right answer to our questions."
            />
            <FaqQuestion
              question="How much time is required to become Digital Shaper?"
              answer="In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum. Our learning materials have a total duration of 50+ hours. Please also bear in mind that the project phase is usually linked to increased coordination effort with your project team. In any case, the invested time will be worth it!"
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Link to="/faq" className="btn btn-primary">
                  More Questions?
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default ux
