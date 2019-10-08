import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import WhatYouWillLearn from "../components/WhatYouWillLearn"
import RightImageSection from "../components/RightImageSection"
import LeftImageSection from "../components/LeftImageSection"
import Projects from "../components/Projects"
import CallToAction from "../components/CallToAction"
import FirstImpression from "../components/FirstImpression"
import FaqQuestion from "../components/FaqQuestion"
import ai_cover from "../assets/ai_cover.png"
import david from "../assets/david.png"
import Faq from "../components/Faq"
import { Link } from "gatsby"
import robot from "../assets/ai-robot.png"
import background from "../assets/ds_background.png"
import backgroundMobil from '../assets/courseMobil.png';

class ai extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst="Artificial"
            headingSecond=" Intelligence"
            showCard={true}
            background={background}
            intro="Inform yourself here about our AI track. Start your six months learning journey as a part of the next batch in the city of your choice. Acquire state-of-the-art tech skills by using one of our individualized tracks, local events, and professional mentoring. Within six months you will finish a tech project and be rewarded with our Digital Shaper certificate."
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading="What is Artificial Intelligence?"
            subheading="See what hides behind the buzzword “AI”!"
            text="AI is an expandable definition, which involves learning structures that are able to detect patterns and apply the learned patterns to predict or transform something. When we talk about AI, we talk about deep neural networks or reinforcement learning systems that are capable of solving large, complex problems like object detection, object classification, or autonomous driving. These applications are ruled by deep neural networks with millions of parameters."
            image={robot}
          />
          <RightImageSection
            heading="Why Artificial Intelligence"
            subheading="Learn more about the various applications of Artificial Intelligence!"
            text="Data is the new Oil, but „AI ist the new electricity“ - Andrew Ng. Artificial Intelligence helps to mine valuable knowledge from data. Deep neural networks got a boost in popularity in 2011 when the neural network AlexNet solved the ImageNet Competition (Detection of 1000 classes of objects in images) with an error rate of 16%. Before deep neural networks ruled this competition the average error rate was way over 25%. Since then the error rate has been decreasing to less than 5%. The success of Deep Neural Networks relies on the huge amount of data that is necessary to train the millions of parameters. Since the amount of data is continuously increasing, the range of applications for AI becomes wider and deeper. While AI has been a long time an instrument to solve a single very specific task, AI is more and more developing into a generalized approach for problem solving."
            image={ai_cover}
          />
          <WhatYouWillLearn
            intro="See here what different learnings our AI track offers!"
            first="Acquire knowledge about deep learning algorithms"
            second="Learn how to build image recognition system"
            third="Get to know what mathematical foundation behind the training of neural networks"
            fourth="Acquire general python programming knowledge with emphasis on deep learning libraries"
          />
          <LeftImageSection
            heading="More About the Track"
            subheading="Get to know neural networks and work with the background data in our individualized tracks!"
            text="The AI track comes in several versions. You can combine the deep learning part with some refreshment of your Python and machine learning knowledge. Despite this refreshment, you should already have some knowledge in Python and machine learning. You will acquire theoretical knowledge as well as practical experience. The primary applications are image classification, object detection and text mining. Furthermore, you will apply neural networks to detect objects in an image and classify those as well as find interesting patterns in text data (for example amazon reviews). Aside from the application, the track contains information about the most important mathematical foundation of neural networks. This includes back-propagation, gradient descent, and vectorizing of word."
            image={david}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading="Get a First Impression"
            subheading="Check out our curriculum that is open for everybody!"
            firstHeading="Introduction to Artificial Intelligence"
            firstImage={robot}
            firstText="Start with our free Track and learn the fundamentals of AI now and see if you want to join the Digital Shaper Program!"
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

export default ai
