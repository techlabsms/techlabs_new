import React, { Component } from "react"
import { Link } from "gatsby"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import ProgrammHero from "../components/program/ProgrammHero"
import Faq from "../components/shared/Faq"
import WhatYouWillLearn from "../components/program/WhatYouWillLearn"
import RightImageSection from "../components/shared/RightImageSection"
import LeftImageSection from "../components/shared/LeftImageSection"
import Projects from "../components/program/Projects"
import CallToAction from "../components/shared/CallToAction"
import FirstImpression from "../components/foundYourOwn/FirstImpression"
import FaqQuestion from "../components/shared/FaqQuestion"
import Layout from "../components/Layout/Layout"

// assets
import UX from "../assets/UX.png"
import UX2 from "../assets/UX2.png"
import david from "../assets/david.png"
import background from "../assets/ds_background.png"
import backgroundMobil from "../assets/courseMobil.png"

class ux extends Component {
  render() {
    return (
      <Layout>
        <div className="container-fluid">
          <ProgrammHero
            headingFirst={<FormattedMessage id={"ux.headline.ProgrammHero.headingFirst"}/>}
            headingSecond={<FormattedMessage id={"ux.headline.ProgrammHero.headingSecond"}/>}
            showCard={true}
            background={background}
            intro={<FormattedMessage id={"ux.headline.ProgrammHero.intro"}/>}
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading={<FormattedMessage id={"ux.what.RightImageSection.heading"}/>}
            subheading={<FormattedMessage id={"ux.what.RightImageSection.subheading"}/>}
            text={<FormattedMessage id={"ux.what.RightImageSection.text"}/>}
            image={UX2}
          />
          <RightImageSection
            heading={<FormattedMessage id={"ux.why.RightImageSection.heading"}/>}
            subheading={<FormattedMessage id={"ux.why.RightImageSection.subheading"}/>}
            text={<FormattedMessage id={"ux.why.RightImageSection.text"}/>}
            image={UX}
          />
          <WhatYouWillLearn
            intro={<FormattedMessage id={"ux.learn.WhatYouWillLearn.intro"}/>}
            first={<FormattedMessage id={"ux.learn.WhatYouWillLearn.first"}/>}
            second={<FormattedMessage id={"ux.learn.WhatYouWillLearn.second"}/>}
            third={<FormattedMessage id={"ux.learn.WhatYouWillLearn.third"}/>}
            fourth={<FormattedMessage id={"ux.learn.WhatYouWillLearn.fourth"}/>}
          />
          <LeftImageSection
            heading={<FormattedMessage id={"ux.more.LeftImageSection.heading"}/>} 
            subheading={<FormattedMessage id={"ux.more.LeftImageSection.subheading"}/>}
            text={<FormattedMessage id={"ux.more.LeftImageSection.text"}/>}
            image={david}
          />
          <Projects />
          <CallToAction />
          <FirstImpression
            heading={<FormattedMessage id={"ux.first_impression.FirstImpression.heading"}/>}
            subheading={<FormattedMessage id={"ux.first_impression.FirstImpression.subheading"}/>}
            firstHeading={<FormattedMessage id={"ux.first_impression.FirstImpression.firstHeading"}/>}
            firstImage={UX2}
            firstText={<FormattedMessage id={"ux.first_impression.FirstImpression.firstText"}/>}
            firstLink="https://app.edyoucated.org/invitation/team/c6a5346d-035c-4a98-bf1b-13c36fe25eb3"
          />
           <Faq>
            <FaqQuestion
              question={<FormattedMessage id={"faq_1.question"}/>}
              answer={<FormattedMessage id={"faq_1.answer"}/>}
            />
            <FaqQuestion
              question={<FormattedMessage id={"faq_2.question"}/>}
              answer={<FormattedMessage id={"faq_2.answer"}/>}
            />
            <FaqQuestion
              question={<FormattedMessage id={"faq_3.question"}/>}
              answer={<FormattedMessage id={"faq_3.answer"}/>}
            />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Link to="/faq" className="btn btn-primary">
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

export default ux
