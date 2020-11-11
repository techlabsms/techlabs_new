import React, { useState } from "react"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

// components
import ApplyCard from "./ApplyCard"
import Dropdown from "../shared/dropdown"
import Heading from "../smallComponents/Heading"

// assets

const ChooseCity = ({
  heading,
  subheading,
  countries,
  handleClick,
  clickedCityValue,
  gaLabel
}) => {
  const [countryOptions, setCountryOptions] = useState([])
  const [choosenCountry, setChoosenCountry] = useState("Remote")

  countries.forEach(c => {
    const { country } = c.node
    if (countryOptions.includes(country)) {
      return
    } else {
      setCountryOptions([...countryOptions, country])
    }
  })
  const dropdown_style = {
    marginBottom: "1em",
    width: "25%",
  }

  const filteredCountries = countries.filter(locations => {
    return locations.node.country.toLowerCase() === choosenCountry.toLowerCase()
  })

  return (
    <div className="container">
      <Heading heading={heading} subheading={subheading} />
      <Dropdown
        onSelect={option => {
          trackCustomEvent({
          category: "Dropdown",
          action: "Select",
          label: gaLabel + '_' + option
          })
          setChoosenCountry(option)
        }}
        options={countryOptions}
        style={dropdown_style}
      />
      <div className="row">
        {filteredCountries.map(country => (
          <ApplyCard
            cityValues={country.node}
            key={country.node.heading}
            handleClick={(isClicked, value, available, link) => {
              handleClick(isClicked, value, available, link)
            }}
            clickedCityValue={clickedCityValue}
          />
        ))}
      </div>
    </div>
  )
}

export default ChooseCity
