import React from "react"

const FirstImpressionThree = ({
  heading,
  subheading,
  firstHeading,
  firstImage,
  firstText,
  firstLink,
  secondHeading,
  secondImage,
  secondText,
  secondLink,
  thirdHeading,
  thirdImage,
  thirdText,
  thirdLink,
}) => {
  return (
    <>
      <div className="row mt-5 firstImpression">
        <div className="col">
          <h2>{heading}</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 py-5">
          <div className="firstImpression--card ">
            <h3 className="firstImpression--card-heading text-center">
              {firstHeading}
            </h3>
            <div className="text-center mt-3">
              <img src={firstImage} alt="" className="w-50" />
            </div>
            <p className="firstImpression--card-text text-center">
              {firstText}
            </p>
            <div className="text-center">
              <a href={firstLink} className="noDec">
                <div className="firstImpression--card-btn">Start now</div>
              </a>
            </div>
          </div>
        </div>
        <>
          <div className="col-lg-1 d-none d-lg-flex">
            <div className="row m-auto h-100 align-items-center d-none d-md-flex">
              <div className="firstImpression--card-circle_three-1 firstImpression--card-circle_three" />
              <div className="firstImpression--card-circle_three-2 firstImpression--card-circle_three ml-2" />
              <div className="firstImpression--card-circle_three-3 firstImpression--card-circle_three ml-2" />
            </div>
          </div>
          <div className="col-12 col-md-3 py-5">
            <div className="firstImpression--card ">
              <h3 className="firstImpression--card-heading text-center">
                {secondHeading}
              </h3>
              <div className="text-center mt-3">
                <img src={secondImage} alt="" className="w-50" />
              </div>
              <p className="firstImpression--card-text text-center">
                {secondText}
              </p>
              <div className="text-center">
                <a href={secondLink} className="noDec">
                  <div className="firstImpression--card-btn">Start now</div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-1 d-none d-lg-flex">
            <div className="row m-auto h-100 align-items-center d-none d-md-flex">
              <div className="firstImpression--card-circle_three-1 firstImpression--card-circle_three" />
              <div className="firstImpression--card-circle_three-2 firstImpression--card-circle_three ml-2" />
              <div className="firstImpression--card-circle_three-3 firstImpression--card-circle_three ml-2" />
            </div>
          </div>
          <div className="col-12 col-md-3 py-5">
            <div className="firstImpression--card ">
              <h3 className="firstImpression--card-heading text-center">
                {thirdHeading}
              </h3>
              <div className="text-center mt-3">
                <img src={thirdImage} alt="" className="w-50" />
              </div>
              <p className="firstImpression--card-text text-center">
                {thirdText}
              </p>
              <div className="text-center">
                <a href={secondLink} className="noDec">
                  <div className="firstImpression--card-btn">Start now</div>
                </a>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  )
}

export default FirstImpressionThree
