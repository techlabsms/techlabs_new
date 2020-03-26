import React, { Component } from "react"
import localeData from "../intl"
import Heading from "./smallComponents/Heading"
import { CityCountryEnum, CountryEnum, getCity } from "../enums/CountryEnum"
import { getCityValues } from "../enums/CountryEnum"
import ApplyCard from "./applyPage/ApplyCard"
import Dropdown from "../templates/dropdown"

class ChooseCity extends Component {
  defaultLocale = "en"
  messages = localeData[this.defaultLocale]

  state = {
    atEnd: false,
    country: null,
    city: null,
    cityOptions: [
      {
        label: this.messages[CityCountryEnum.GERMANY[0].value],
        value: CityCountryEnum.GERMANY[0].value,
      },
      {
        label: this.messages[CityCountryEnum.GERMANY[1].value],
        value: CityCountryEnum.GERMANY[1].value,
      },
      {
        label: this.messages[CityCountryEnum.GERMANY[2].value],
        value: CityCountryEnum.GERMANY[2].value,
      },
      {
        label: this.messages[CityCountryEnum.GERMANY[3].value],
        value: CityCountryEnum.GERMANY[3].value,
      },
    ],
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

    const { cityOptions } = this.state
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
          {cityOptions.map(country => (
            <ApplyCard
              cityValues={getCityValues(country.value)}
              key={country.label}
              handleClick={(isClicked, value, open) => {
                this.props.handleClick(isClicked, value, open)
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
