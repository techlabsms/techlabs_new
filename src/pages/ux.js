import React, { Component } from "react"

// plugins & external
import { FormattedMessage, Link } from "gatsby-plugin-react-intl"

// components
import ProgrammHero from "../components/program/ProgrammHero"
import Faq from "../components/shared/Faq"
import WhatYouWillLearn from "../components/program/WhatYouWillLearn"
import RightImageSection from "../components/shared/RightImageSection"
import LeftImageSection from "../components/shared/LeftImageSection"
import Projects from "../components/program/Projects"
import CallToAction from "../components/shared/CallToAction"
import FaqQuestion from "../components/shared/FaqQuestion"
import Layout from "../components/Layout/Layout"

// assets
import UX from "../assets/ux-icon.png"
import UX2 from "../assets/ux-image.png"
import david from "../assets/david.png"
import background from "../assets/ds_background.png"
import backgroundMobil from "../assets/courseMobil.png"
import Seo from "../components/Layout/Seo"

class ux extends Component {
  render() {
    return (
      <Layout>
        <Seo
          title="User Experience Design"
          description="Inform yourself here about our UX Design track. Start your six months learning journey as a part of the next batch in the city of your choice. Acquire state-of-the-art tech skills by using one of our individualized tracks"
          image={UX2}
        />

        <div className="container-fluid">
          <ProgrammHero
            headingFirst={
              <FormattedMessage id={"ux.headline.ProgrammHero.headingFirst"} />
            }
            headingSecond={
              <FormattedMessage id={"ux.headline.ProgrammHero.headingSecond"} />
            }
            showCard={true}
            background={background}
            intro={<FormattedMessage id={"ux.headline.ProgrammHero.intro"} />}
            backgroundMobil={backgroundMobil}
          />
        </div>
        <div className="container">
          <RightImageSection
            heading={
              <FormattedMessage id={"ux.what.RightImageSection.heading"} />
            }
            subheading={
              <FormattedMessage id={"ux.what.RightImageSection.subheading"} />
            }
            text={<FormattedMessage id={"ux.what.RightImageSection.text"} />}
            image={UX2}
          />
          <RightImageSection
            heading={
              <FormattedMessage id={"ux.why.RightImageSection.heading"} />
            }
            subheading={
              <FormattedMessage id={"ux.why.RightImageSection.subheading"} />
            }
            text={<FormattedMessage id={"ux.why.RightImageSection.text"} />}
            image={UX}
          />
          <WhatYouWillLearn
            intro={<FormattedMessage id={"ux.learn.WhatYouWillLearn.intro"} />}
            first={<FormattedMessage id={"ux.learn.WhatYouWillLearn.first"} />}
            second={
              <FormattedMessage id={"ux.learn.WhatYouWillLearn.second"} />
            }
            third={<FormattedMessage id={"ux.learn.WhatYouWillLearn.third"} />}
            fourth={
              <FormattedMessage id={"ux.learn.WhatYouWillLearn.fourth"} />
            }
          />
          <LeftImageSection
            heading={
              <FormattedMessage id={"ux.more.LeftImageSection.heading"} />
            }
            subheading={
              <FormattedMessage id={"ux.more.LeftImageSection.subheading"} />
            }
            text={<FormattedMessage id={"ux.more.LeftImageSection.text"} />}
            image={david}
          />
          <Projects />
          <CallToAction />
          <Faq>
            <FaqQuestion question="faq_1.question" answer="faq_1.answer" />
            <FaqQuestion question="faq_2.question" answer="faq_2.answer" />
            <FaqQuestion question="faq_3.question" answer="faq_3.answer" />
          </Faq>
          <div className="container pb-5">
            <div className="row">
              <div className="col text-center">
                <Link to="/faq" className="btn btn-primary">
                  <FormattedMessage id={"faq.button"} />
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
