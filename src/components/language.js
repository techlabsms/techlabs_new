import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  de: "Deutsch",
}

const Language = () => (
  <div id="language-switcher">
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <IntlContextConsumer>
        {({languages, language: currentLocale}) => 
        languages.map(language => (
            <a  className="dropdown-item" 
                key={language}
                onClick={() => changeLocale(language)}
            >
                {languageName[language]}
            </a>
        ))}
        </IntlContextConsumer>
        </div>
    </div>
  </div>
)

export default Language

    
