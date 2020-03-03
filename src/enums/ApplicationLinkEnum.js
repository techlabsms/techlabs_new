import {CityEnum} from "./CountryEnum";

export const ApplicationLinkEnum = {
    COPENHAGEN: 'https://techlabsorg.typeform.com/to/DRVtUy',
    MUENSTER: 'https://techlabsorg.typeform.com/to/sD79sQ',
    MEDELLIN: 'https://techlabsorg.typeform.com/to/nQEp0v',
    BARCELONA: 'https://www.techlabs.org/',
    BERLIN: 'https://www.techlabs.org/',
    CURITIBA: 'https://www.techlabs.org/'
}

export function getLink(city) {
    switch (city) {
        case CityEnum.BARCELONA:
            return ApplicationLinkEnum.BARCELONA;

        case CityEnum.BERLIN:
            return ApplicationLinkEnum.BERLIN;

        case CityEnum.COPENHAGEN:
            return ApplicationLinkEnum.COPENHAGEN;

        case CityEnum.CURITIBA:
            return ApplicationLinkEnum.CURITIBA;

        case CityEnum.MUENSTER:
            return ApplicationLinkEnum.MUENSTER;

        case CityEnum.MEDELLIN:
            return ApplicationLinkEnum.MEDELLIN;
    }
}