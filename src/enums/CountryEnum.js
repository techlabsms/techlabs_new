export const CountryEnum = {
  COUNTRY: "location.country",
  GERMANY: "location.country.germany",
  SPAIN: "location.country.spain",
  DENMARK: "location.country.denmark",
  BRAZIL: "location.country.brazil",
  COLOMBIA: "location.country.colombia",
  REMOTE: "location.country.remote",
}

export const CityEnum = {
  MUENSTER: "location.muenster",
  BERLIN: "location.berlin",
  COPENHAGEN: "location.copenhagen",
  MEDELLIN: "location.medellin",
  CURITIBA: "location.curitiba",
  BARCELONA: "location.barcelona",
  AACHEN: "location.aachen",
  DORTMUND: "location.dortmund",
  MUNICH: "location.munich",
  REMOTE: "location.remote",
}

export const CityCountryEnum = {
  CITY: [{ value: "location.city" }],
  GERMANY: [
    {
      value: "location.muenster",
    },
    {
      value: "location.berlin",
    },
    {
      value: "location.aachen",
    },
    {
      value: "location.dortmund",
    },
    {
      value: "location.munich",
    },
  ],
  SPAIN: [
    {
      value: "location.barcelona",
    },
  ],
  DENMARK: [
    {
      value: "location.copenhagen",
    },
  ],
  BRAZIL: [
    {
      value: "location.curitiba",
    },
  ],
  COLOMBIA: [
    {
      value: "location.medellin",
    },
  ],
  REMOTE: [
    {
      value: "location.remote",
      applicationStart: null,
      applicationEnd: null,
      availableTracks: {
        ai: true,
        web: true,
        dataScience: true,
        ux: true,
      },
    },
  ],
}

export function getCityValues(city) {
  switch (city) {
    case null:
      return

    case CityEnum.BARCELONA:
      return CityCountryEnum.SPAIN[0]

    case CityEnum.BERLIN:
      return CityCountryEnum.GERMANY[1]

    case CityEnum.AACHEN:
      return CityCountryEnum.GERMANY[2]

    case CityEnum.COPENHAGEN:
      return CityCountryEnum.DENMARK[0]

    case CityEnum.CURITIBA:
      return CityCountryEnum.BRAZIL[0]

    case CityEnum.MUENSTER:
      return CityCountryEnum.GERMANY[0]

    case CityEnum.MEDELLIN:
      return CityCountryEnum.COLOMBIA[0]

    case CityEnum.DORTMUND:
      return CityCountryEnum.GERMANY[3]

    case CityEnum.MUNICH:
      return CityCountryEnum.GERMANY[4]

    case CityEnum.REMOTE:
      return CityCountryEnum.REMOTE[0]
    default:
      return
  }
}

export function getCity(country) {
  switch (country) {
    case CountryEnum.COUNTRY:
      return CityCountryEnum.CITY

    case CountryEnum.GERMANY:
      return CityCountryEnum.GERMANY

    case CountryEnum.BRAZIL:
      return CityCountryEnum.BRAZIL

    case CountryEnum.DENMARK:
      return CityCountryEnum.DENMARK

    case CountryEnum.COLOMBIA:
      return CityCountryEnum.COLOMBIA

    case CountryEnum.SPAIN:
      return CityCountryEnum.SPAIN

    case CountryEnum.REMOTE:
      return CityCountryEnum.REMOTE
    case CountryEnum.MUNICH:
      return CityCountryEnum.MUNICH
    default:
      return
  }
}
