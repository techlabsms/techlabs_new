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
            intro="Inform yourself here about our UX Design track. Start your six months learning journey with the next batch in the city of your choice. Acquire state-of-the-art tech skills by making use of our individualised tracks,  offline events and professional mentoring. Within six months you will finish a tech project and be rewarded with  a valuable digital shaper certificate."
          />
        </div>
        <div className="container">
          <WhatYouWillLearn
            intro="Define and scope the design problem you will try to address!"
            first="Learn UX Design with practical examples and use the opportunity to build a personal portfolio."
            second="Find out what the key values are for designing an enjoyable user experience"
            third="Get experience in communicating in a multidisciplinary team and create your own design portfolio."
            fourth="Get to know tools to prototype and implement your ideas."
          />
          <RightImageSection
            heading="Why User Experience Design?"
            subheading="Every product has an user experience. Learn how to perfect it!"
            text="Since companies started anticipating the value of creating a good user experience products in all life areas have become more and more user friendly. As a result the the demand for good usability and positive experiences grew over time. In addition to that there are new products entering the market every day, all of which have different demands to fulfill the needs of the people that use or even depend on them.
                    UX Design is not only necessary to successfully establish a product it is also essential to keep the product on the market and develop it further.
                    As a lot of products and informations are turning digital you will be the key to making them accessible for the people that depend on them and with that have the chance to make their lives easier. "
            image={UX}
          />
          <LeftImageSection
            heading="More about the Track"
            subheading="Great design doesn’t come out of nowhere; it is born, nurtured, and grown--all through a systematic, learnable process!"
            text="You will explore the process of taking a basic concept, grounded in user needs, and developing it into a design that will address those needs. You will gain hands-on experience with techniques such as prototyping, scenario and persona development as well as wireframing that will help you transform your understanding of what your users need into a compelling user experience. You will learn how to turn ideas into interactive prototypes that can be tested with prospective users and iteratively turned into a high quality design."
            image={david}
          />
          <RightImageSection
            heading="What is User Experience Design?"
            subheading="A UX designer’s typical tasks vary, but often include user research, creating personas, designing wireframes and interactive prototypes as well as testing designs."
            text="The User Experience is made up of a person’s perceptions and responses resulting from the use or even just the anticipated use of a product, system or service. Therefore UX Design is the process of understanding the user, to iteratively improve the usability, accessibility and pleasure he has while interacting with the product.
In short: Your job is it to make a user enjoy using a product."
            image={UX2}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading="Get a first Impression"
            subheading="Check out our curriculum that is open for everybody!"
            firstHeading="Introduction to User Expercience Design"
            firstImage={UX2}
            firstText="Start with our free Track and learn the fundamentals now and see if it’s right for you"
            firstLink="https://app.edyoucated.org/login"
          />
          <Faq>
            <FaqQuestion
              question="How do I apply for the Digital Shaper Program?"
              answer="This can be done directly via our application form for the respective location."
            />
            <FaqQuestion
              question="What should I write in my application to be accepted?"
              answer="At TechLabs we want to get to know you and your motivation better. Thats why its generally true that there is no right or wrong answer to the questions. Please only make sure that your answer really refers to the question. Unfortunately, we cannot evaluate important aspects that do not relate to the question."
            />
            <FaqQuestion
              question="How can I imagine the time required?"
              answer="In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum and allow for about 5 hours per week. Please also bear in mind that the project phase can mean increased coordination effort with your project team. In any case, the invested time will be worth it."
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
