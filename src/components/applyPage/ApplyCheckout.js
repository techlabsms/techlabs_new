/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import arrowDown from "../../assets/arrowDown.svg"

const ApplyCheckout = ({
  currentStep,
  setCurrentStep,
  city,
  stepOne,
  stepTwo,
  stepThree,
  isMobile,
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
          className={`c-tracker__num ${getCurrentStep(3)}`}
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
          onClick={() => {
            if (city !== "") setCurrentStep(3)
          }}
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
      {isMobile && currentStep === 1 ? (
        <div className="container mt-5 text-center">
          <button
            onClick={() => {
              if (city !== "" || currentStep !== 2)
                handleClick(currentStep, "DOWN")
            }}
            className="btn btn-primary"
          >
            Next Step
          </button>
        </div>
      ) : (
        <>
          {currentStep === 1 && (
            <div className="container mt-5">
              <button
                onClick={() => {
                  if (city !== "" || currentStep === 1) {
                    handleClick(currentStep, "DOWN")
                  }
                }}
                className="c-tracker__btn c-tracker__btn--right"
              >
                <span>Next Step</span>
                <img src={arrowDown} alt="arrow-down" />
              </button>
            </div>
          )}
          {currentStep === 2 && (
            <div className="container mt-5">
              <button
                onClick={() => handleClick(currentStep, "UP")}
                className="c-tracker__btn c-tracker__btn--right"
              >
                <span>Step back</span>
                <img
                  src={arrowDown}
                  alt="arrow-down"
                  className="c-tracker__img"
                />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default ApplyCheckout
