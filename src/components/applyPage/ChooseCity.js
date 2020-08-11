import React, { Component } from "react"

// plugins & external
import localeData from "../../intl"

// components
import ApplyCard from "./ApplyCard"
import Dropdown from "../shared/dropdown"
import { CountryEnum, getCity } from "../../enums/CountryEnum"
import Heading from "../smallComponents/Heading"

// assets


class ChooseCity extends Component {
  messages = localeData[this.props.locale]

  state = {
    atEnd: false,
    country: "location.country.germany",
    city: null,
  }

  handleCountryChange = country => {
    this.setState({ country: country })
    this.setCity(country)
    this.props.handleClick(false)
  }

  setCity = country => {
    const values = []
    const cities = getCity(country)
    if (cities) {
      cities.forEach(value => {
        values.push({ value: value.value, label: this.messages[value.value] })
      })
    }
    this.setState({ cityOptions: values, city: values[0].value })
  }

  componentDidMount() {
    window.onscroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        this.setState({
          atEnd: true,
        })
      }
    }
  }

  render() {
    const { heading, subheading } = this.props

    const dropdown_style = {
      marginBottom: "1em",
      width: "25%",
    }

    const countryOptions = [
      { value: CountryEnum.GERMANY, label: this.messages[CountryEnum.GERMANY] },
      { value: CountryEnum.SPAIN, label: this.messages[CountryEnum.SPAIN] },
      { value: CountryEnum.DENMARK, label: this.messages[CountryEnum.DENMARK] },
      {
        value: CountryEnum.COLOMBIA,
        label: this.messages[CountryEnum.COLOMBIA],
      },
      { value: CountryEnum.BRAZIL, label: this.messages[CountryEnum.BRAZIL] },
      { value: CountryEnum.REMOTE, label: this.messages[CountryEnum.REMOTE] },
    ]

    const countryKey = "germany"

    const filteredCountries = this.props.countries.filter(locations => {
      return (
        locations.node.country.toLowerCase() ===
        this.state.country.split(".")[2]
      )
    })
    return (
      <div className="container">
        <Heading heading={heading} subheading={subheading} />
        <Dropdown
          options={countryOptions}
          id={countryKey}
          style={dropdown_style}
          onSelect={this.handleCountryChange}
        />
        <div className="row">
          {filteredCountries.map(country => (
            <ApplyCard
              cityValues={country.node}
              key={country.node.heading}
              handleClick={(isClicked, value, available, link) => {
                this.props.handleClick(isClicked, value, available, link)
              }}
              clickedCityValue={this.props.clickedCityValue}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ChooseCity
