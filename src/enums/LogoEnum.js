import MS from "../assets/loc-ms.svg"
import CPH from "../assets/loc-cph.svg"
import BCN from "../assets/loc-bcn.svg"
import MED from "../assets/loc-med.svg"
import BER from "../assets/loc-ber.png"
import CUR from "../assets/loc-cu.svg"
import AAC from "../assets/loc-aac.png"
import DOR from "../assets/loc-do.svg"
import { CityEnum } from "./CountryEnum"

export function getLogo(city) {
  switch (city) {
    case CityEnum.BARCELONA:
      return BCN

    case CityEnum.BERLIN:
      return BER

    case CityEnum.COPENHAGEN:
      return CPH

    case CityEnum.CURITIBA:
      return CUR

    case CityEnum.MUENSTER:
      return MS

    case CityEnum.MEDELLIN:
      return MED

    case CityEnum.AACHEN:
      return AAC
    case CityEnum.DORTMUND:
      return DOR
    case CityEnum.REMOTE:
      return null
  }
}
