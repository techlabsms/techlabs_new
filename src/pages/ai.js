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
            intro="Inform yourself here about our Artificial Intelligence  track. Start your six months learning journey with the next batch in the city of your choice. Acquire state-of-the-art tech skills by making use of our individualised tracks,  offline events and professional mentoring. Within six months you will finish a tech project and be rewarded with  a valuable digital shaper certificate."
          />
        </div>
        <div className="container">
          <WhatYouWillLearn
            intro="See here what different learnings our AI track offers!"
            first="Acquire knowledge about the state-of-the-art deep learning algorithms"
            second="Learn how to build image recognition systems"
            third="Get to know what mathematical foundation hides behind the training of neural networks"
            fourth="Acquire general python programming knowledge with emphasis on deep learning libraries"
          />
          <RightImageSection
            heading="Why Artificial Intelligence"
            subheading="Learn more about the various applications of Artificial Intelligence! "
            text="Data is the new Oil, but „AI ist the new electricity“ - Andrew Ng. Artificial Intelligence helps to mine valuable knowledge from data. Deep Neural Networks got a boost in popularity in 2011 when the Neural Network AlexNet solved the ImageNet Competition (Detection of 1000 classes of objects in images) with an error rate of 16%. Before deep neural networks ruled this competition the average error rate was way over 25%. Since then the error rate has been decreasing to less than 5%.
                  The success of Deep Neural Networks relies on the huge amount of data that is necessary to train the millions of parameters. Since the amount of data is continuously increasing, the range of applications for AI becomes wider and deeper. While AI has been a long time an instrument to solve a single very specific task, AI is more and more developing into a generalized approach for problem solving."
            image={ai_cover}
          />
          <LeftImageSection
            heading="More abou the track"
            subheading="Get to know neural networks and work with the background data in our individualised tracks!"
            text="The AI track comes in several versions. You can combine the deep learning part with some refreshment of you python and/or machine learning knowledge. Despite this refreshment you should already have good knowledge in python and machine learning and/or done the data science track.
            You´ll acquire theoretical knowledge as well as practical experience during the AI track. The primary applications are Image Classification, Object Detection and Text Mining. You`ll apply neural networks to detect objects in an image and classify those as well as find interesting patterns in text data (for example amazon reviews). Aside from the application the track contains information about the most important mathematical foundation of neural networks. This includes back-propagation, gradient descent and vectorizing of word."
            image={david}
          />
          <RightImageSection
            heading="What is Artificial Intelligence"
            subheading="Check out what hides behind the buzzword “AI”!"
            text="AI is an expandable definition, which sometimes involves all learner structure that are able to detect patterns and apply the learned pattern to predict or transform something. When we are talking about AI, we talk about Deep Neural Networks or Reinforcement Learning Systems that are capable of solving large, complex problems like object detection, object classification or autonomous driving. These applications are ruled by deep neural networks with millions of parameters. "
            image={robot}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading="Get a first Impression"
            subheading="Check out our curriculum that is open for everybody!"
            firstHeading="Introduction to Artificial Intelligence"
            firstImage={robot}
            firstText="Start with our free Track and learn the fundamentals of AI now and see if it’s right for you"
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

export default ai
