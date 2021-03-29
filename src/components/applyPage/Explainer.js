import React, { useState, useRef } from "react"
import Checkmark from "../../assets/apply/checkmark.svg"
import Application from "../../assets/apply/Icon-Application.svg"
import Feedback from "../../assets/apply/Icon-Feedback.svg"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Link } from "gatsby"
import { useSwipeable } from "react-swipeable"

const steps = [
  {
    icon: Checkmark,
    title: "applypage.steps.first.heading",
    text: [
      <p>
        <FormattedMessage id={"applypage.steps.first.text"} />
        <br />
        <Link to="/program">
          <FormattedMessage id={"applypage.steps.first.link"} />
        </Link>
      </p>,
    ],
  },
  {
    icon: Application,
    title: "applypage.steps.second.heading",
    text: [
      <p>
        <FormattedMessage id={"applypage.steps.second.text"} />
      </p>,
    ],
  },
  {
    icon: Feedback,
    title: "applypage.steps.third.heading",
    text: [
      <p>
        <FormattedMessage id={"applypage.steps.third.text"} />
      </p>,
    ],
  },
]

const Explainer = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const frame = useRef(null)

  const handleNextStep = direction => {
    if (direction === "LEFT") {
      frame.current.className =
        frame.current.className + " c-explainer-mobile__step--left"
      setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1)
        }
        frame.current.className = "c-explainer-mobile__step"
      }, 400)
    } else {
      frame.current.className =
        frame.current.className + " c-explainer-mobile__step--right"
      setTimeout(() => {
        if (currentStep !== 0) {
          setCurrentStep(currentStep - 1)
        }
        frame.current.className = "c-explainer-mobile__step"
      }, 400)
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNextStep("LEFT"),
    onSwipedRight: () => handleNextStep("RIGHT"),
  })

  return (
    <>
      <section className="c-explainer container d-none d-md-block">
        <div className="c-explainer__layout">
          <div className="c-explainer__number c-explainer__number--one">
            <div className="c-explainer__circle">1</div>
            <div className="c-explainer__circle--background"></div>
          </div>
          <div className="c-explainer__line">
            <div className="c-explainer__line--connector "></div>
          </div>
          <div className="c-explainer__number c-explainer__number--two">
            <div className="c-explainer__circle">2</div>
            <div className="c-explainer__circle--background"></div>
          </div>
          <div className="c-explainer__line">
            <div className="c-explainer__line--connector"></div>
          </div>
          <div className="c-explainer__number c-explainer__number--three">
            <div className="c-explainer__circle">3</div>
            <div className="c-explainer__circle--background"></div>
          </div>
        </div>
        <div className="c-explainer__layout">
          <div className="c-explainer__text c-explainer__text--one">
            <h5>
              <FormattedMessage id={"applypage.steps.first.heading"} />
            </h5>
            <p>
              <FormattedMessage id={"applypage.steps.first.text"} />
              <br />
              <Link to="/program">
                <FormattedMessage id={"applypage.steps.first.link"} />
              </Link>
            </p>
          </div>
          <div className="c-explainer__text c-explainer__text--two">
            <h5>
              <FormattedMessage id={"applypage.steps.second.heading"} />
            </h5>
            <p>
              <FormattedMessage id={"applypage.steps.second.text"} />
            </p>
          </div>
          <div className="c-explainer__text c-explainer__text--three">
            <h5>
              <FormattedMessage id={"applypage.steps.third.heading"} />
            </h5>
            <p>
              <FormattedMessage id={"applypage.steps.third.heading"} />
            </p>
          </div>
        </div>
      </section>
      <section
        className="c-explainer-mobile container d-md-none"
        {...swipeHandlers}
      >
        <div className="c-explainer-mobile__step" ref={frame}>
          <img src={steps[currentStep].icon} alt="" />
          <h3>
            {currentStep + 1}.{" "}
            <FormattedMessage id={steps[currentStep].title} />
          </h3>
          {steps[currentStep].text}
        </div>
        <div className="c-explainer-mobile__progress">
          {steps.map((step, i) => (
            <div
              className={
                currentStep === i
                  ? "c-explainer-mobile__circle c-explainer-mobile__circle--active"
                  : "c-explainer-mobile__circle"
              }
            ></div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Explainer
