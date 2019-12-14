import React, { useState } from "react"
import Container from "./smallComponents/Container"
import Heading from "./smallComponents/Heading"
import Date from "./Date"
import dayjs from "dayjs"
import Arrow from "../assets/arrow.svg"
import { graphql, useStaticQuery } from "gatsby"

const DatesCalendar = ({ eventsPage, city }) => {
  const month = getNextFiveMonth()
  const [dates] = useState(getDatesForLocation(city))
  const [currentMonth, setCurrentMonth] = useState(
    month[0].format("MMMM").toLowerCase()
  )
  const [index, setIndex] = useState(0)

  return (
    <Container className="datesCalendar">
      <Heading
        heading="Important Dates"
        subheading={`Get an overview all Events and Deadlines in ${city}`}
      />
      <div className="datesCalendar--card">
        <div className="row">
          {month.map(date => (
            <div
              className={
                currentMonth === date.format("MMMM").toLowerCase()
                  ? "col datesCalendar--dates_active"
                  : "col datesCalendar--dates"
              }
              key={date.month()}
            >
              <h3
                onClick={() =>
                  setCurrentMonth(date.format("MMMM").toLowerCase())
                }
              >
                {date.format("MMMM")}
              </h3>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              {Object.keys(dates[currentMonth]).length > 5 ? (
                <>
                  <div className="col-md-1 d-flex justify-content-center">
                    <img
                      src={Arrow}
                      className="w-50 mb-4 datesCalendar--arrow-left"
                      onClick={() => {
                        index.length >= index
                          ? setIndex(index - 1)
                          : setIndex(0)
                      }}
                    />
                  </div>
                  <Date
                    month={currentMonth}
                    event={dates[currentMonth][index]}
                  />
                  <Date
                    month={currentMonth}
                    event={dates[currentMonth][index + 1]}
                  />
                  <Date
                    month={currentMonth}
                    event={dates[currentMonth][index + 2]}
                  />
                  <Date
                    month={currentMonth}
                    event={dates[currentMonth][index + 3]}
                  />
                  <Date
                    month={currentMonth}
                    event={dates[currentMonth][index + 4]}
                  />
                  <div className="col-md-1 d-flex justify-content-center">
                    <img
                      src={Arrow}
                      className="w-50 mb-4 datesCalendar--arrow-right"
                      onClick={() => {
                        index.length <= index
                          ? setIndex(index + 1)
                          : setIndex(0)
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-1" />
                  {dates[currentMonth].map(event => (
                    <>
                      <Date month={currentMonth} event={event} />
                    </>
                  ))}
                  <div className="col-md-1" />
                </>
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

const getDatesForLocation = city => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDates {
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
              location
              organizer
            }
            february {
              id
              date
              name
              description
              location
              organizer
            }
            march {
              id
              date
              name
              description
              location
              organizer
            }
            april {
              id
              date
              name
              description
              location
              organizer
            }
            may {
              id
              date
              name
              description
              location
              organizer
            }
            june {
              id
              date
              name
              description
              location
              organizer
            }
            july {
              id
              date
              name
              description
              location
              organizer
            }
            august {
              id
              date
              name
              description
              location
              organizer
            }
            september {
              id
              date
              name
              description
              location
              organizer
            }
            november {
              id
              date
              name
              description
              location
              organizer
            }
            december {
              id
              date
              name
              description
              location
              organizer
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

  return locationDates[0].node
}

export default DatesCalendar
