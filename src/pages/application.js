import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ApplicationHero from "../components/ApplicationHero"
import ChooseCity from "../components/ChooseCity"
import Requirements from "../components/Requirements"
import applicationHero from "../assets/application.png"
import ApplicationProcess from "../components/ApplicationProcess"
import CallToActionApplication from "../components/CallToActionApplication"
import Faq from "../components/Faq"
import FaqQuestion from "../components/FaqQuestion"
import Footer from "../components/Footer"
import Dates from "../components/Dates"

class application extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      city: "",
      cityData: [
        {
          name: "muenster",
          isOpen: true,
          link: "www.google.de",
          dates: [
            "16.04.2019",
            "17.09.2019",
            "16.04.2019",
            "17.09.2019",
            "16.04.2019",
            "17.09.2019",
            "16.04.2019",
            "17.09.2019",
          ],
        },
        {
          name: "copenhagen",
          link: "www.google.de",
          isOpen: false,
          dates: [
            "17.04.2019",
            "17.09.2019",
            "17.04.2019",
            "17.09.2019",
            "76.04.2019",
            "17.09.2019",
            "16.04.2019",
            "17.09.2019",
          ],
        },
      ],
      index: 0,
    }

    this.isClicked = this.isClicked.bind(this)
  }
  isClicked(city, cityIsClicked) {
    this.setState({
      isClicked: cityIsClicked,
      city,
    })

    this.state.cityData.forEach(data => {
      if (data.name === city) {
        this.setState({
          index: this.state.cityData.indexOf(data),
        })
      }
    })
  }
  render() {
    const { cityData, index} = this.state;
    return (
      <>
        <Navbar />
        <ApplicationHero
          background={applicationHero}
          headingFirst="Application"
          intro="Do you want to learn state-of-the-art tech? Do you want to dive into a thriving community? Apply now for the TechLabs Digital Shaper Program. "
        />
        <ChooseCity
          heading="Choose yoour city"
          subheading="Where do you want to study?"
          isClicked={this.isClicked}
        />
        <div className={this.state.isClicked ? "d-block" : "d-none"}>
          <Requirements
            heading="Application Requirements"
            subheading="What we are looking for in an applicant?"
            link={cityData[index].link}
            isOpen={cityData[index].isOpen}
          />
          <ApplicationProcess
            heading="Application Process"
            subheading="What are the steps for a successful application? "
          />
          <Dates
            heading="Important Dates"
            subheading="What is happening when?"
            dates={cityData[index].dates}
          />
          <div className="container">
            <CallToActionApplication 
              isOpen={cityData[index].isOpen}
              link={cityData[index].link}
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
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default application
