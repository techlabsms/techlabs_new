import React, { useState } from "react"
import Container from "./smallComponents/Container"
import Heading from "./smallComponents/Heading"
import dayjs from "dayjs"
import { graphql, useStaticQuery } from "gatsby"

const DatesCalendar = ({ eventsPage, city }) => {
  const month = getNextFiveMonth()
  const [dates] = useState(getDatesForLocation(city))
  const [currentMonth, setCurrentMonth] = useState(
    month[0].format("MMMM").toLowerCase()
  )

  return (
    <Container>
      <Heading
        heading="Important Dates"
        subheading={`Get an overview all Events and Deadlines in ${city}`}
      />
      <div className="card">
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
              {dates[currentMonth].map(event => (
                <div className="col" key={event}>
                  <div className="datesCalendar--day">
                    <div className="row">
                      <div className="col">
                        <h6 className="datesCalendar--threeLetterDate">
                          {currentMonth.substring(0, 3).toUpperCase()}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">{event.date}</div>
                    </div>
                  </div>
                  <h4 className="ml-3 mt-2">{event.name}</h4>
                </div>
              ))}
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
              date
              name
              description
            }
            february {
              date
              name
              description
            }
            march {
              date
              name
              description
            }
            april {
              date
              name
              description
            }
            may {
              date
              name
              description
            }
            june {
              date
              name
              description
            }
            july {
              date
              name
              description
            }
            august {
              date
              name
              description
            }
            september {
              date
              name
              description
            }
            november {
              date
              name
              description
            }
            december {
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

  return locationDates[0].node
}

export default DatesCalendar
