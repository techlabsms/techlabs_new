import React, { useState, useEffect } from "react"

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
}) => {
  let width = 0

  if (typeof window !== `undefined`) {
    width = window.innerWidth
  }

  const [countryOptions, setCountryOptions] = useState([])
  const [choosenCountry, setChoosenCountry] = useState("Brazil")
  const [windowWidth, setWindowWidth] = useState(width)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

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
    width: windowWidth < 768 ? "100%" : "25%",
  }

  const filteredCountries = countries.filter(locations => {
    return locations.node.country.toLowerCase() === choosenCountry.toLowerCase()
  })

  return (
    <div className="container pt-5 mt-3">
      <Heading heading={heading} subheading={subheading} />
      <Dropdown
        options={countryOptions}
        style={dropdown_style}
        onSelect={option => setChoosenCountry(option)}
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
