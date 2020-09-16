import React, { useState, useEffect } from "react"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"
import dayjs from "dayjs"
import Img from "gatsby-image"

// components
import Heading from "../smallComponents/Heading"
import Dropdown from "../shared/dropdown"
import ApplicationCountdown from "../applyPage/ApplicationCountdown"

// style
import "../../styles/landingpage/_applicationPeriod.scss"

const ApplicationPeriod = ({ locationData, wave }) => {
  // state
  const [countryOptions, setCountryOptions] = useState([])
  const [cityOptions, setCityOptions] = useState(["Bitte wählen"])
  const [country, setCountry] = useState()
  const [city, setCity] = useState()
  const [cityData, setCityData] = useState()
  const [available, setAvailable] = useState()
  const [open, setOpen] = useState()
  const [date, setDate] = useState("")

  // styling
  const wave_style = {
    width: "100%",
    zIndex: "-1",
  }

  const dropdown_style = {
    marginBottom: "1em",
    width: "70%",
  }

  // locale functions
  const updateAvailableCities = country => {
    const cities = locationData.filter(
      c => c.node.country.toLowerCase() === country.toLowerCase()
    )
    let cityValues = []

    cities.forEach(c => {
      cityValues = [...cityValues, c.node.heading]
    })
    setCityOptions(cityValues)
    setCity(cityValues[0])
    updateCityData(cityValues[0])
  }

  const updateCityData = city => {
    const choosenCityData = locationData.filter(
      c => c.node.heading.toLowerCase() === city.toLowerCase()
    )
    setCityData(choosenCityData)
    updateDate(choosenCityData)
  }

  const updateDate = cityData => {
    const now = dayjs(Date.now())

    if (!cityData || cityData[0].node.applicationStart === null) {
      setAvailable(false)
    } else {
      // is the start date after today?
      if (now.isAfter(dayjs(cityData[0].node.applicationStart))) {
        // is the end date after today?
        if (now.isAfter(dayjs(cityData[0].node.applicationEnd))) {
          setAvailable(false)
          setOpen(false)
        } else {
          setAvailable(true)
          setOpen(true)
          setDate(cityData[0].node.applicationEnd)
        }
      } else {
        setAvailable(true)
        setOpen(false)
        setDate(cityData[0].node.applicationStart)
      }
    }
  }

  locationData.forEach(c => {
    const { country } = c.node
    if (countryOptions.includes(country)) {
      return
    } else {
      setCountryOptions([...countryOptions, country])
    }
  })

  // useEffect - mount
  useEffect(() => {
    updateAvailableCities(countryOptions[0])
  }, [])

  return (
    <section className="py-5 my-5">
      <div className="container">
        <Heading
          heading={
            <FormattedMessage id={"app.landingpage.applicationperiod.header"} />
          }
          subheading={
            <FormattedMessage
              id={"app.landingpage.applicationperiod.subheader"}
            />
          }
        />
        <div className="wave-box">
          <div className="row">
            <div className="d-flex col-lg-9 flex-wrap">
              <div className="p-2 col-sm-4 mt-5">
                <Dropdown
                  options={countryOptions}
                  style={dropdown_style}
                  onSelect={(country, e) => {
                    e.preventDefault()
                    trackCustomEvent({
                    category: "Dropdown",
                    action: "Select",
                    label: `lp_deadline_${country}`
                  })
                    setCountry(country)
                    updateAvailableCities(country)
                  }}
                />                                     
                <Dropdown
                  options={cityOptions}
                  style={dropdown_style}
                  onSelect={city => {
                    setCity(city)
                    updateCityData(city)
                  }}
                />
              </div>
              <div className="p-2 col-sm-8 mt-5 ">
                <div className="card h-100 center no-padding">
                  <h1 className="card-title-black">{city} </h1>
                  <br />
                  {available ? (
                    <>
                      {open ? (
                        <p className="card-subtitle-grey">
                          <FormattedMessage
                            id={
                              "app.landingpage.applicationperiod.deadline.end"
                            }
                          />
                        </p>
                      ) : (
                        <p className="card-subtitle-grey">
                          <FormattedMessage
                            id={
                              "app.landingpage.applicationperiod.deadline.start"
                            }
                          />
                        </p>
                      )}
                      <div className="text-muted">
                        <ApplicationCountdown date={date} />
                      </div>
                      <span className="card-discover">
                        {open ? (
                          <a
                            className="btn btn-primary d-inline apply-button"
                            type="submit"
                            href={cityData.node[0].applicationLink}
                          >
                            <FormattedMessage
                              id={
                                "app.landingpage.applicationperiod.deadline.apply"
                              }
                            />
                          </a>
                        ) : (
                          <> </>
                        )}
                      </span>
                    </>
                  ) : (
                    <div className="card-padding">
                      <p className="card-subtitle-grey">
                        <FormattedMessage
                          id={"app.landingpage.applicationperiod.no.deadline"}
                        />
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="images">
        <Img fluid={wave} style={wave_style} alt="wave" />
      </div>
    </section>
  )
}

export default ApplicationPeriod
