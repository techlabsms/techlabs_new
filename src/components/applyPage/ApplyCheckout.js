/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react"
import arrowDown from "../../assets/arrowDown.svg"

const ApplyCheckout = ({
  currentStep,
  setCurrentStep,
  city,
  stepOne,
  stepTwo,
  stepThree,
}) => {
  const getCurrentStep = num => {
    if (num === currentStep) {
      return "c-tracker__num--centered"
    } else if (num > currentStep) {
      return "c-tracker__num--bottom"
    } else {
      return "c-tracker__num--top"
    }
  }

  const handleClick = (num, direction) => {
    document.getElementById(num).classList = "c-tracker__animation"
    setTimeout(() => {
      if (direction === "UP" && currentStep > 0) {
        setCurrentStep(currentStep - 1)
      } else {
        setCurrentStep(currentStep + 1)
      }
    }, 500)
  }
  return (
    <section className="c-checkout">
      <div className="c-tracker d-md-block d-none">
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
          className={`c-tracker__num c-tracker__num--top`}
          onClick={() => setCurrentStep(3)}
        >
          3
        </h5>
      </div>
      <div className="c-tracker__mobile  d-md-none">
        <h5
          className={
            currentStep === 1
              ? `c-tracker__mobile-num c-tracker__mobile-num--active`
              : `c-tracker__mobile-num`
          }
          onClick={() => setCurrentStep(1)}
        >
          1
        </h5>

        <h5
          className={
            currentStep === 2
              ? `c-tracker__mobile-num c-tracker__mobile-num--active`
              : `c-tracker__mobile-num`
          }
          onClick={() => setCurrentStep(2)}
        >
          2
        </h5>
        <h5
          className={
            currentStep === 3
              ? `c-tracker__mobile-num c-tracker__mobile-num--active`
              : `c-tracker__mobile-num`
          }
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
      {currentStep !== 3 ? (
        <div className="container mt-5">
          <button
            onClick={() => handleClick(currentStep, "UP")}
            className={
              currentStep === 1 ? "c-tracker__btn--disabled" : "c-tracker__btn"
            }
          >
            <img src={arrowDown} alt="arrow-down" className="c-tracker__img" />
          </button>
          <button
            onClick={() => {
              if (city !== "" || currentStep === 1) {
                handleClick(currentStep, "DOWN")
              }
            }}
            className={
              city !== "" || currentStep !== 1
                ? "c-tracker__btn--disabled--right c-tracker__btn--right"
                : "c-tracker__btn c-tracker__btn--right"
            }
          >
            <img src={arrowDown} alt="arrow-down" />
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default ApplyCheckout
