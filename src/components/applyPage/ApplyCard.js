import React, { useState, useEffect } from "react"
import ApplicationCountdown from "../ApplicationCountdown"

import ds from "../../assets/ds.png"
import ai from "../../assets/ai.png"
import web from "../../assets/web.png"
import dswhite from "../../assets/ds_white.png"
import aiwhite from "../../assets/ai_white.png"
import webwhite from "../../assets/web_white.png"
import { getCityValues, getCity } from "../../enums/CountryEnum"
import { FormattedMessage } from "gatsby-plugin-intl"
import dayjs from "dayjs"

const ApplyCard = ({ cityValues, handleClick, clickedCityValue }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isOpen, setIsOpen] = useState()

  const countryKey = "country"
  const cityKey = "city"
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
              isClicked && clickedCityValue === cityValues.value
                ? "chooseCity--clickedCard h-100"
                : "chooseCity--card h-100"
            }
            onClick={() => {
              setIsClicked(!isClicked)
              handleClick(!isClicked, cityValues.value, open)
            }}
          >
            <div className="row">
              <div className="col-md-6">
                <h4 className="chooseCity--heading">
                  <FormattedMessage id={cityValues.value} />
                </h4>
                <div
                  className={
                    isClicked && clickedCityValue === cityValues.value
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
                    <div className="text-muted pb-4">
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
            <p>Available Tracks</p>
            <div className="row px-2 my-2">
              <div className="col">
                {cityValues.availableTracks.ai && (
                  <div className="row">
                    <img
                      src={
                        isClicked && clickedCityValue === cityValues.value
                          ? aiwhite
                          : ai
                      }
                      alt="artificial intelligence"
                      width="15"
                      height="15"
                      className="mr-2"
                    />
                    <p className="chooseCity--subject">
                      Artifical Intelligence
                    </p>
                  </div>
                )}
                {cityValues.availableTracks.dataScience && (
                  <div className="row">
                    <img
                      src={
                        isClicked && clickedCityValue === cityValues.value
                          ? dswhite
                          : ds
                      }
                      alt="data science"
                      width="15"
                      height="15"
                      className="mr-2"
                    />
                    <p className="chooseCity--subject">Data Science</p>
                  </div>
                )}
              </div>
              <div className="col">
                {cityValues.availableTracks.web && (
                  <div className="row">
                    <img
                      src={
                        isClicked && clickedCityValue === cityValues.value
                          ? webwhite
                          : web
                      }
                      alt="artificial intelligence"
                      width="15"
                      height="15"
                      className="mr-2"
                    />
                    <p className="chooseCity--subject">Web Development</p>
                  </div>
                )}
                {cityValues.availableTracks.ux && (
                  <div className="row">
                    <img
                      src={
                        isClicked && clickedCityValue === cityValues.value
                          ? webwhite
                          : web
                      }
                      alt="data science"
                      width="15"
                      height="15"
                      className="mr-2"
                    />
                    <p className="chooseCity--subject">UX Design</p>
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
