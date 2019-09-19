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
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import webDevCover from "../assets/wd_cover.png"
import background from "../assets/ds_background.png"
import Faq from "../components/Faq"
import { Link } from "gatsby"

class web extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero
            headingFirst="Web"
            headingSecond=" Development"
            showCard={true}
            background={background}
            intro="Inform yourself here about our Web Development track. Start your six months learning journey as a part of the next batch in the city of your choice. Acquire state-of-the-art tech skills by using one of our individualized tracks, local events, and professional mentoring. Within six months you will finish a tech project and be rewarded with our Digital Shaper certificate."
          />
        </div>
        <div className="container">
          <WhatYouWillLearn
            intro="Learn more about the technologies behind the web and how to build modern web applications!"
            first="Create responsive and interactive web pages using cutting edge technologies including HTML, CSS, and JavaScript"
            second="Acquire practical experience with open source tools and development frameworks, such as React"
            third="Learn how to program web-based application programming interfaces with Node.js"
            fourth="Bring data to life and build interactive visualizations and graphs for any type of data"
          />
          <RightImageSection
            heading="What is Web Development"
            subheading="Our track is all about the software development of web pages and applications."
            text="Web Development is a software engineering discipline that involves the development of websites and web services. The variety of work in Web Development is huge, it can range from creating a basic static web page to complex interactive web apps, including enterprise-scale applications and application programming interfaces. However, there is much more that is relevant when developing for the web. For example, the design and content of a web page, web servers and networking as well as security aspects have to be considered."
            image={dashboard}
          />
          <RightImageSection
            heading="Why Web Development"
            subheading="Without Web Developers no content or web application would exist on the internet!"
            text="The internet has disrupted our economy and society. The technologies we use on a daily basis will keep evolving, thus in the future Web Development will be even more important than it is today. Browsers are getting more powerful day by day, today they can even be used as whole operating systems (e.g. ChromeOS). Recent Web Development toolkits already allow you to create native apps on any device. Learning how Web Development works will provide you with powerful and versatile programming skills. These enable you to design websites, build applications, and to visualize data and make it accessible for users. Machine Learning, Artificial Intelligence, Robotics, and other domains often require modern web-based interfaces to connect with the user to provide value. Therefore, having knowledge of Web Development will  be an asset for you!"
            image={webDevCover}
          />
          <LeftImageSection
            heading="More about the Track"
            subheading="Get to know the technologies and frameworks than can be used for Web Development."
            text="Our Web Development track is suited for novices and advanced beginners. As a beginner you will be introduced to the basic principles of computer science. You will also learn more about the tools and technologies that are required for creating web pages and applications. To be more specific, you will acquire skills in HTML5, Cascading Style Sheets (CSS), and JavaScript. Additionally, you will also learn more about popular frameworks and get familiar the differences between the terms frontend and backend. At the end, you are able to develop full-stack, both frontend and backend, applications! As an advanced beginner you will improve your Web Development techniques, your programming skills in JavaScript and you will learn to use Node.JS to program blazingly fast applications. If you previously gained some experience in Data Science you will also learn how to efficiently display that data using D3.js."
            image={david}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading="Get a first Impression"
            subheading="Check out our curriculum that is open for everybody!"
            firstHeading="Introduction to Web Development"
            firstImage={dashboard}
            firstText="Start with our free Track and learn the fundamentals of Web Development now and see if it’s right for you"
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

export default web
