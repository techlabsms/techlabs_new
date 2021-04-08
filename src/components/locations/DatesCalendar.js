import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

// plugins
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Container from "../smallComponents/Container"
import Heading from "../smallComponents/Heading"
import Date from "./Date"
import dayjs from "dayjs"
import Arrow from "../../assets/arrow.svg"

const DatesCalendar = ({ eventsPage, city, mail }) => {
  const month = getNextFiveMonth()
  const [currentMonth, setCurrentMonth] = useState(
    month[0].format("MMMM").toLowerCase()
  )
  const [index, setIndex] = useState(0)

  const data = useStaticQuery(graphql`
    query($locale: String) {
      allContentfulDates(filter: { node_locale: { eq: $locale } }) {
        edges {
          node {
            location {
              heading
            }
            january {
              id
              date
              name
              description
            }
            february {
              id
              date
              name
              description
            }
            march {
              id
              date
              name
              description
            }
            april {
              id
              date
              name
              description
            }
            may {
              id
              date
              name
              description
            }
            june {
              id
              date
              name
              description
            }
            july {
              id
              date
              name
              description
            }
            august {
              id
              date
              name
              description
            }
            september {
              id
              date
              name
              description
            }
            october {
              id
              date
              name
              description
            }
            november {
              id
              date
              name
              description
            }
            december {
              id
              date
              name
              description
            }
          }
        }
      }
    }
  `)

  // filtering the dates for the location
  const locationDates = data.allContentfulDates.edges.filter(data => {
    return data.node.location.heading === city
  })

  const dates = locationDates[0].node

  const getMonthClassNames = (date, index) => {
    let classNames = "col "
    console.log(index)
    if (currentMonth === date.format("MMMM").toLowerCase()) {
      classNames += "datesCalendar--dates_active"
    } else if (index > 2) {
      classNames += "datesCalendar--dates d-none d-md-block"
    } else {
      classNames += "datesCalendar--dates"
    }
    return classNames
  }

  return (
    <Container className="datesCalendar">
      <Heading
        heading={<FormattedMessage id="datesCalendar.heading" />}
        subheading={
          <FormattedMessage
            id="datesCalendar.subheading"
            values={{ city: city }}
          />
        }
      />
      <div className="datesCalendar--card">
        <div className="row">
          {month.map((date, index) => (
            <div
              className={getMonthClassNames(date, index)}
              key={date.month()}
              onClick={() => setCurrentMonth(date.format("MMMM").toLowerCase())}
              onKeyDown={() => null}
              role="button"
              tabIndex={0}
            >
              <h3>{date.format("MMMM")}</h3>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">
            <div className="row justify-content-center mt-3">
              {dates[currentMonth] !== null ? (
                <>
                  {Object.keys(dates[currentMonth]).length > 5 ? (
                    <>
                      <div
                        className="col-md-1 d-flex justify-content-center"
                        onKeyDown={() => null}
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          index.length >= index
                            ? setIndex(index - 1)
                            : setIndex(0)
                        }}
                      >
                        <img
                          src={Arrow}
                          className="w-50 mb-4 datesCalendar--arrow-left"
                          alt="arrow left"
                        />
                      </div>
                      <Date
                        month={currentMonth}
                        event={
                          dates[currentMonth] !== null
                            ? dates[currentMonth][index]
                            : []
                        }
                        mail={mail}
                      />
                      <Date
                        month={currentMonth}
                        event={
                          dates[currentMonth] !== null
                            ? dates[currentMonth][index + 1]
                            : []
                        }
                        mail={mail}
                      />
                      <Date
                        month={currentMonth}
                        event={
                          dates[currentMonth] !== null
                            ? dates[currentMonth][index + 2]
                            : []
                        }
                        mail={mail}
                      />
                      <Date
                        month={currentMonth}
                        event={
                          dates[currentMonth] !== null
                            ? dates[currentMonth][index + 3]
                            : []
                        }
                        mail={mail}
                      />
                      <Date
                        month={currentMonth}
                        event={
                          dates[currentMonth] !== null
                            ? dates[currentMonth][index + 4]
                            : []
                        }
                        mail={mail}
                      />
                      <div
                        className="col-md-1 d-flex justify-content-center"
                        onClick={() => {
                          index.length <= index
                            ? setIndex(index + 1)
                            : setIndex(0)
                        }}
                        onKeyDown={() => null}
                        role="button"
                        tabIndex={0}
                      >
                        <img
                          src={Arrow}
                          className="w-50 mb-4 datesCalendar--arrow-right"
                          alt="arrow right"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {Object.keys(dates[currentMonth]).length === 0 ? (
                        <div className="col-md-12 text-center mt-4">
                          <h4>
                            <FormattedMessage id="datesCalendar.noEvents" />
                          </h4>
                        </div>
                      ) : (
                        <>
                          <div className="col-md-1" />
                          {dates[currentMonth].map(event => (
                            <Date
                              month={currentMonth}
                              event={event}
                              mail={mail}
                              key={event.id}
                            />
                          ))}
                          <div className="col-md-1" />
                        </>
                      )}
                    </>
                  )}
                </>
              ) : (
                <div className="col-md-12 text-center mt-4">
                  <h4>
                    <FormattedMessage id="datesCalendar.noEvents" />
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const getNextFiveMonth = () => {
  const dates = "01234".split("").map(day => {
    return dayjs().add(day, "month")
  })
  return dates
}

export default DatesCalendar
