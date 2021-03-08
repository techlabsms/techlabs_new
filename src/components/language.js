import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { FormattedMessage } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  de: "Deutsch",
  pt: "Português"
}

const Language = () => (
  <div id="language-switcher">
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FormattedMessage id="language.button" />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map(language => (
              <button
                className="dropdown-item no-btn-style"
                key={language}
                onClick={() => changeLocale(language)}
              >
                {languageName[language]}
              </button>
            ))
          }
        </IntlContextConsumer>
      </div>
    </div>
  </div>
)

export default Language