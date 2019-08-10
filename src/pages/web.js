import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgrammHero from "../components/ProgrammHero"
import WhatYouWillLearn from "../components/WhatYouWillLearn"
import RightImageSection from "../components/RightImageSection"
import LeftImageSection from "../components/LeftImageSection"
import Partners from "../components/Partners"
import Projects from "../components/Projects"
import CallToAction from "../components/CallToAction"
import FirstImpression from "../components/FirstImpression"
import FaqQuestion from "../components/FaqQuestion"
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import accenture from "../assets/accenture.png"
import webdev from "../assets/webdevpro.png"
import webDevCover from '../assets/wd_cover.png'
import background from '../assets/ds_background.png'

class web extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <ProgrammHero headingFirst="Web" headingSecond=" Development" showCard={true} background={background} intro="Inform yourself here about our Web Development track. Start your six months learning journey with the next batch in the city of your choice. Acquire state-of-the-art tech skills by making use of our individualised tracks,  offline events and professional mentoring. Within six months you will finish a tech project and be rewarded with  a valuable digital shaper certificate."/>
        </div>
        <div className="container">
          <WhatYouWillLearn
            intro="Learn more about the technologies behind the web and how you can build modern web applications"
            first="Create responsive and interactive web pages using cutting edge technologies including HTML, CSS and JavaScript"
            second="Acquire practical experience with open source tools and development frameworks, such as React"
            third="Learn how to program web-based application programming interfaces with node.JS "
            fourth="Bring data to life and build interactive visualizations and graphs for any type of data"
          />
          <RightImageSection
            heading="Why Web Development"
            subheading="The Internet has become an every day technology, learn how to create your own web pages and applications!"
            text="The  Internet has disrupted our economy and society and millions of people  use the Internet every day. Without Web Developers no content or web  application would exist on the Internet. Companies such as Google or  Amazon wouldn't even exist, as these were born during the era of the  Internet. In the future, web development will be even more important since  technologies have been and will be evolving. Browsers are getting more  powerful day by day or are even used as a whole operating system (e.g., ChromeOS), recent web development toolkits allow you to create native apps on any device.  Think about all those applications you can access on the web from any device anywhere in the world. They have all been created by well-paid web developers that have excellent career prospects. Learning how development for the web works will provide you with powerful and versatile programming skills. These  allow you to create websites, visualize and making data accessible for  users, or just to build an awesome app. Machine Learning, Artificial  Intelligence, Robotics and other domains do often require modern  web-based interfaces to connect with the user or other systems to  provide value. Therefore, having knowledge of web development will  always be an asset for you!"
            image={webDevCover}
          />
          <LeftImageSection
            heading="More about the Track"
            subheading="Learn what's behind the web and get to know the technologies and frameworks than can be used for web development."
            text="Our web development track is suited for web development novices and  advanced beginners. As a beginner you will be introduced to the basic  principles of computer science and learn how computers work. You will  also learn more about the tools and technologies that are required for  creating web pages and applications. You will get to know HTML5,  Cascading Style Sheets (CSS), and JavaScript. Additionally, you will  learn more about popular frameworks, which are toolsets that help developers to create awesome stuff, and the differences between the term frontend and backend. At the end you will be able to develop  full-stack, both frond- and backend, applications that not just look stunning but can actually help people to do something! 
            As  an advanced beginner you will get to know more advanced web development  techniques and also learn more about software development paradigms.  You will improve your programming skills in JavaScript and use Node.JS  to program blazingly fast applications. If you previously gained some experience in Data Science you will also learn how to efficiently display that data using D3.js."
            image={david}
          />
          <RightImageSection
            heading="What is Web Development"
            subheading="Learn more about software development of web pages and applications."
            text="Web development is a software engineering discipline that involves the development of web sites and web services. The variety of work in web development is huge, it can range from creating a basic static web page to a complex interactive web apps,  including enterprise-scale applications and application programming  interfaces. However, there is much more that is relevant when developing  for the web, such as the design and content of a web page, web servers and networking as well as security aspects. 
            TechLabs provides you with the basic theories behind the web but focuses on skills required for developing web applications and web pages."
            image={dashboard}
          />
          <Partners
            heading="What our partners say"
            subheading="Read here what our partners think about the skills you learn at TechLabs!"
            quoteText="To start with pogramming is hard when done by yourself, but TechLabs is able to accelerate your learning curve by multiples."
            quoteName="Hans Schneider"
            quoteRole="Web Developer"
            quoteCompanyLogo={accenture}
          />
          <Projects
            heading="Projects from our participants"
            subheading="Have a look at these projects, get inspired and apply now to finish your project!"
            firstProjectHeading="Project1"
            firstProjectText="The main goal was to identify customers that are likely to resign their mobile phone contracts. Aside from the resign-probabal, the team identified the impact of several variables."
            firstProjectImage={webdev}
            secondProjectHeading="Project1"
            secondProjectText="The main goal was to identify customers that are likely to resign their mobile phone contracts. Aside from the resign-probabal, the team identified the impact of several variables."
            secondProjectImage={webdev}
            thirdProjectHeading="Project1"
            thirdProjectText="The main goal was to identify customers that are likely to resign their mobile phone contracts. Aside from the resign-probabal, the team identified the impact of several variables."
            thirdProjectImage={webdev}
          />
          <CallToAction />
          <FirstImpression
            heading="Get a first Impression"
            subheading="Check out our Open Curriculum"
            firstHeading="Introduction to Web Development"
            firstImage={dashboard}
            firstText="Start with our free Track and learn the fundamentals of Web Development now and see if it’s right for you"
          />
          <div className="row mt-5">
            <div className="col">
              <h2>FAQ</h2>
              <div className="section-divider" />
              <p>Do you have more questions?</p>
              <FaqQuestion
                question="How can I apply for the Digital Shaper Program?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="What makes me a qualified Applicant?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="How does the application process look like?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="What are the costs for Participants?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="When is the next Application Deadline?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="How can I apply for the Digital Shaper Program?"
                answer="sdjhfasölfdh"
              />
              <FaqQuestion
                question="Who can I contact if I have any Questions?"
                answer="sdjhfasölfdh"
              />
              <div className="text-center mt-5">
                <button className="btn btn-primary">More questions?</button>
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
