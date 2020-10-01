import React, { Component } from "react"

// plugins & external
import { FormattedMessage, Link } from "gatsby-plugin-intl"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

// components
import Layout from "../components/Layout/Layout"
import ProgrammHero from "../components/program/ProgrammHero"
import WhatYouWillLearn from "../components/program/WhatYouWillLearn"
import RightImageSection from "../components/shared/RightImageSection"
import LeftImageSection from "../components/shared/LeftImageSection"
import Projects from "../components/program/Projects"
import CallToAction from "../components/shared/CallToAction"
import FirstImpression from "../components/foundYourOwn/FirstImpression"
import Faq from "../components/shared/Faq"
import FaqQuestion from "../components/shared/FaqQuestion"

// assets
import david from "../assets/david.png"
import dashboard from "../assets/dashboard.png"
import webDevCover from "../assets/wd_cover.png"
import background from "../assets/ds_background.png"
import backgroundMobil from "../assets/courseMobil.png"

class web extends Component {
  render() {
    return (
      <Layout gaLabel="wd">
        <div className="container-fluid">
        <ProgrammHero
            headingFirst={<FormattedMessage id={"web.headline.ProgrammHero.headingFirst"}/>}
            headingSecond={<FormattedMessage id={"web.headline.ProgrammHero.headingSecond"}/>}
            showCard={true}
            background={background}
            intro={<FormattedMessage id={"web.headline.ProgrammHero.intro"}/>}
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
        <RightImageSection
            heading={<FormattedMessage id={"web.what.RightImageSection.heading"}/>}
            subheading={<FormattedMessage id={"web.what.RightImageSection.subheading"}/>}
            text={<FormattedMessage id={"web.what.RightImageSection.text"}/>}
            image={dashboard}
          />
          <RightImageSection
            heading={<FormattedMessage id={"web.why.RightImageSection.heading"}/>}
            subheading={<FormattedMessage id={"web.why.RightImageSection.subheading"}/>}
            text={<FormattedMessage id={"web.why.RightImageSection.text"}/>}
            image={webDevCover}
          />
          <WhatYouWillLearn
            intro={<FormattedMessage id={"web.learn.WhatYouWillLearn.intro"}/>}
            first={<FormattedMessage id={"web.learn.WhatYouWillLearn.first"}/>}
            second={<FormattedMessage id={"web.learn.WhatYouWillLearn.second"}/>}
            third={<FormattedMessage id={"web.learn.WhatYouWillLearn.third"}/>}
            fourth={<FormattedMessage id={"web.learn.WhatYouWillLearn.fourth"}/>}
          />
          <LeftImageSection
            heading={<FormattedMessage id={"web.more.LeftImageSection.heading"}/>} 
            subheading={<FormattedMessage id={"web.more.LeftImageSection.subheading"}/>}
            text={<FormattedMessage id={"web.more.LeftImageSection.text"}/>}
            image={david}
          />
          <Projects gaLocation="wd"/>
          <CallToAction gaLocation="wd"/>
          <FirstImpression
            heading={<FormattedMessage id={"web.first_impression.FirstImpression.heading"}/>}
            subheading={<FormattedMessage id={"web.first_impression.FirstImpression.subheading"}/>}
            firstHeading={<FormattedMessage id={"web.first_impression.FirstImpression.firstHeading"}/>}
            firstImage={dashboard}
            firstText={<FormattedMessage id={"web.first_impression.FirstImpression.firstText"}/>}
            firstLink="https://app.edyoucated.org/invitation/team/c6a5346d-035c-4a98-bf1b-13c36fe25eb3"
            gaLabel="wd_ft_start"
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
                <Link 
                onClick={e => {
                  trackCustomEvent({
                    category: "Button",
                    action: "Click",
                    label: 'wd_faq_mq'
                  })
                }}
                to="/faq" 
                className="btn btn-primary">
                  <FormattedMessage id={"faq.button"}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default web
