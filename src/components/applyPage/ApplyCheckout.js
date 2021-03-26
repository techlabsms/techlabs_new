/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react"

const ApplyCheckout = ({ stepOne, stepTwo, stepThree }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const getCurrentStep = num => {
    if (num === currentStep) {
      return "c-tracker__num--centered"
    } else if (num > currentStep) {
      return "c-tracker__num--bottom"
    } else {
      return "c-tracker__num--top"
    }
  }

  const handleClick = num => {
    document.getElementById(num).classList = "c-tracker__animation"
    setTimeout(() => {
      setCurrentStep(currentStep + 1)
    }, 500)
  }
  return (
    <section className="c-checkout">
      <div className="c-tracker">
        <h5
          className={`c-tracker__num ${getCurrentStep(1)}`}
          onClick={() => setCurrentStep(1)}
        >
          1
        </h5>

        <h5
          className={`c-tracker__num ${getCurrentStep(2)}`}
          onClick={() => setCurrentStep(2)}
        >
          2
        </h5>
        <h5
          className={`c-tracker__num ${getCurrentStep(3)}`}
          onClick={() => setCurrentStep(3)}
        >
          3
        </h5>
      </div>
      {currentStep === 1 ? <div id="1">{stepOne}</div> : null}
      {currentStep === 2 ? (
        <div id="2" className="c-tracker__animation--up">
          {stepTwo}
        </div>
      ) : null}
      {currentStep === 3 ? (
        <div id="3" className="c-tracker__animation--up">
          {stepThree}
        </div>
      ) : null}
      <div className="container mt-5">
        <button onClick={() => handleClick(currentStep)}>Next</button>
      </div>
    </section>
  )
}

export default ApplyCheckout
