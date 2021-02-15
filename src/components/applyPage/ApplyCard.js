import React, { useState } from "react"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"
import dayjs from "dayjs"

// components
import ApplicationCountdown from "./ApplicationCountdown"

// assets
import ds from "../../assets/ds.png"
import ai from "../../assets/ai.png"
import web from "../../assets/web.png"
import ux from "../../assets/UX.svg"
import dswhite from "../../assets/ds_white.png"
import aiwhite from "../../assets/ai_white.png"
import webwhite from "../../assets/web_white.png"

const ApplyCard = ({ cityValues, handleClick, clickedCityValue }) => {
  const [isClicked, setIsClicked] = useState(false)
  let open
  let date
  let available = true
  let now = dayjs(Date.now())

  if (!cityValues || cityValues.applicationStart === null) {
    available = false
  } else {
    open = now.isAfter(dayjs(cityValues.applicationStart))
    if (open) {
      date = cityValues.applicationEnd
      if (now.isAfter(dayjs(cityValues.applicationEnd))) {
        available = false
      }
    } else {
      date = cityValues.applicationStart
      available = true
    }
  }

  return (
    <>
      <div className="col-md-4 mt-4">
        <a href="#requirements" className="noDec aNone w-100">
          <div
            className={
              isClicked && clickedCityValue === cityValues.heading.toLowerCase()
                ? "chooseCity--clickedCard h-100"
                : "chooseCity--card h-100"
            }
            onClick={() => {
              setIsClicked(!isClicked)
              handleClick(
                !isClicked,
                cityValues.heading.toLowerCase(),
                available,
                cityValues.applicationLink
              )
            }}
            onKeyPress={null}
            role="link"
            tabIndex="-1"
          >
            <div className="row">
              <div className="col-md-6">
                <h4 className="chooseCity--heading">{cityValues.heading}</h4>
                <div
                  className={
                    isClicked &&
                    clickedCityValue === cityValues.heading.toLowerCase()
                      ? "section-divider-white"
                      : "section-divider"
                  }
                />
              </div>
              <div className="col-md-12 col-xl-6">
                {available ? (
                  <>
                    {open ? (
                      <p className="card-subtitle">
                        <FormattedMessage
                          id={
                            "app.landingpage.applicationperiod.deadline.end.short"
                          }
                        />
                      </p>
                    ) : (
                      <p className="card-subtitle">
                        <FormattedMessage
                          id={
                            "app.landingpage.applicationperiod.deadline.start.short"
                          }
                        />
                      </p>
                    )}
                    <div className="pb-4">
                      <ApplicationCountdown date={date} isSmall={true} />
                    </div>
                  </>
                ) : (
                  <p className="card-subtitle pb-4">
                    <FormattedMessage
                      id={"app.landingpage.applicationperiod.no.deadline"}
                    />
                  </p>
                )}
              </div>
            </div>
            <p>
              <FormattedMessage id="applypage.applyCard.availableTracks" />
            </p>
            <div className="row px-2 my-2">
              <div className="col">
                {cityValues.avaiableTracks.ai && (
                  <div className="row">
                    <img
                      src={
                        isClicked &&
                        clickedCityValue === cityValues.heading.toLowerCase()
                          ? aiwhite
                          : ai
                      }
                      alt="Artificial Intelligence"
                      width="15"
                      height="15"
                      className="mr-2"
                    />
                    <p className="chooseCity--subject">
                      <FormattedMessage id="projects.tech.ai" />
                    </p>
                  </div>
                )}
                {cityValues.avaiableTracks.data && (
                  <div className="row">
                    <img
                      src={
                        isClicked &&
                        clickedCityValue === cityValues.heading.toLowerCase()
                          ? dswhite
                          : ds
                      }
                      alt="Data Science"
                      width="15"
                      height="15"
                      className="mr-2"
                    />
                    <p className="chooseCity--subject">
                      <FormattedMessage id="projects.tech.ds" />
                    </p>
                  </div>
                )}
              </div>
              <div className="col">
                {cityValues.avaiableTracks.web && (
                  <div className="row">
                    <img
                      src={
                        isClicked &&
                        clickedCityValue === cityValues.heading.toLowerCase()
                          ? webwhite
                          : web
                      }
                      alt="Web Development"
                      width="15"
                      height="15"
                      className="mr-2"
                    />
                    <p className="chooseCity--subject">
                      <FormattedMessage id="projects.tech.webdev" />
                    </p>
                  </div>
                )}
                {cityValues.avaiableTracks.ux && (
                  <div className="row">
                    <img
                      src={
                        isClicked &&
                        clickedCityValue === cityValues.heading.toLowerCase()
                          ? webwhite
                          : ux
                      }
                      alt="UX Design"
                      width="15"
                      height="15"
                      className="mr-2"
                    />
                    <p className="chooseCity--subject">
                      <FormattedMessage id="projects.tech.ux" />
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default ApplyCard
