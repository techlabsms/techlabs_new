import { CityEnum } from "./CountryEnum"

export const ApplicationLinkEnum = {
  COPENHAGEN: "https://techlabsorg.typeform.com/to/DRVtUy",
  MUENSTER: "https://techlabsorg.typeform.com/to/nP8sGW",
  MEDELLIN: "https://techlabsorg.typeform.com/to/nQEp0v",
  BARCELONA: "https://www.techlabs.org/",
  BERLIN: "https://techlabsberlin.typeform.com/to/OlQaRy",
  CURITIBA: "https://www.techlabs.org/",
  DORTMUND: "https://techlabsorg.typeform.com/to/q8nFhq",
  REMOTE: " https://techlabsorg.typeform.com/to/o08v5Y",
}

export function getLink(city) {
  switch (city) {
    case CityEnum.BARCELONA:
      return ApplicationLinkEnum.BARCELONA

    case CityEnum.BERLIN:
      return ApplicationLinkEnum.BERLIN

    case CityEnum.AACHEN:
      return ApplicationLinkEnum.AACHEN

    case CityEnum.COPENHAGEN:
      return ApplicationLinkEnum.COPENHAGEN

    case CityEnum.CURITIBA:
      return ApplicationLinkEnum.CURITIBA

    case CityEnum.MUENSTER:
      return ApplicationLinkEnum.MUENSTER

    case CityEnum.MEDELLIN:
      return ApplicationLinkEnum.MEDELLIN
    case CityEnum.DORTMUND:
      return ApplicationLinkEnum.DORTMUND
    case CityEnum.REMOTE:
      return ApplicationLinkEnum.REMOTE
  }
}
