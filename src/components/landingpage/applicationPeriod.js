import React, { useState } from "react"

// plugins & external
import localeData from "../../intl"
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
  const [cityOptions, setCityOptions] = useState([])
  const [country, setCountry] = useState("Germany")
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

  const formatDate = date => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = "0" + month
    if (day.length < 2) day = "0" + day

    return [year, month, day].join(".")
  }

  const updateDate = cityData => {
    const now = dayjs(Date.now())

    if (!cityData || cityData[0].node.applicationStart === null) {
      setAvailable(false)
    } else {
      setOpen(now.isAfter(dayjs(cityData[0].node.applicationStart)))
      if (open) {
        // setDate(cityData[0].node.applicationEnd)
        if (now.isAfter(dayjs(cityData[0].node.applicationEnd))) {
          setAvailable(false)
        }
      } else {
        setDate(cityData[0].node.applicationEnd)
        setAvailable(true)
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
                  onSelect={country => {
                    setCountry(country)
                    updateAvailableCities(country)
                  }}
                />
                <Dropdown
                  options={cityOptions}
                  style={dropdown_style}
                  onSelect={city => {
                    console.log(city)
                    setCity(city)
                    updateCityData(city)
                  }}
                />
                <button className="btn btn-primary d-inline">
                  <FormattedMessage
                    id={"app.landingpage.applicationperiod.check"}
                  />
                </button>
              </div>
              <div className="p-2 col-sm-8 mt-5 ">
                <div className="card h-100 center no-padding">
                  <h1 className="card-title-black">{city}</h1>
                  <br />
                  {available ? (
                    <>
                      {" "}
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
                        {/* {open ? (
                          <a
                            className="btn btn-primary d-inline apply-button"
                            type="submit"
                            href={cityValues.applicationLink}
                          >
                            <FormattedMessage
                              id={
                                "app.landingpage.applicationperiod.deadline.apply"
                              }
                            />
                          </a>
                        ) : (
                          <> </>
                        )} */}
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

// handleCountryChange = country => {
//   this.setState({ country: country })
//   this.setCity(country)
// }
// handleCityChange = city => {
//   this.setState({ city: city })
// }

// setCity = country => {
//   const values = []
//   const cities = getCity(country)
//   if (cities) {
//     cities.forEach(value => {
//       values.push({ value: value.value, label: this.messages[value.value] })
//     })
//   }
//   this.setState({ cityOptions: values, city: values[0].value })
// }

export default ApplicationPeriod
