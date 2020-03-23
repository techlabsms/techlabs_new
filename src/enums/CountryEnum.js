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
  REMOTE: "location.remote",
}

export const CityCountryEnum = {
  CITY: [{ value: "location.city" }],
  GERMANY: [
    {
      value: "location.muenster",
      applicationStart: "20200315",
      applicationEnd: "20200412",
      availableTracks: {
        ai: true,
        web: true,
        dataScience: true,
        ux: true,
      },
    },
    {
      value: "location.berlin",
      applicationStart: "20200301",
      applicationEnd: "20200328",
      availableTracks: {
        ai: true,
        web: true,
        dataScience: true,
        ux: false,
      },
    },
    {
      value: "location.aachen",
      applicationStart: null,
      applicationEnd: null,
      availableTracks: {
        ai: true,
        web: true,
        dataScience: true,
        ux: false,
      },
    },
    {
      value: "location.dortmund",
      applicationStart: "20200323",
      applicationEnd: "20200402",
      availableTracks: {
        ai: true,
        web: true,
        dataScience: true,
        ux: false,
      },
    },
  ],
  SPAIN: [
    {
      value: "location.barcelona",
      applicationStart: null,
      applicationEnd: null,
      availableTracks: {
        ai: true,
        web: true,
        dataScience: true,
        ux: false,
      },
    },
  ],
  DENMARK: [
    {
      value: "location.copenhagen",
      applicationStart: null,
      applicationEnd: null,
      availableTracks: {
        ai: true,
        web: true,
        dataScience: true,
        ux: false,
      },
    },
  ],
  BRAZIL: [
    {
      value: "location.curitiba",
      applicationStart: "20200815",
      applicationEnd: "20200826",
      availableTracks: {
        ai: true,
        web: true,
        dataScience: true,
        ux: false,
      },
    },
  ],
  COLOMBIA: [
    {
      value: "location.medellin",
      applicationStart: null,
      applicationEnd: null,
      availableTracks: {
        ai: true,
        web: true,
        dataScience: true,
        ux: false,
      },
    },
  ],
  REMOTE: [
    {
      value: "location.remote",
      applicationStart: "20200323",
      applicationEnd: "20200329",
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

    case CityEnum.REMOTE:
      return CityCountryEnum.REMOTE[0]
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
  }
}
