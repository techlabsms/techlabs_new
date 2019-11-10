import React, { useState } from "react"
import Container from "./smallComponents/Container"
import Heading from "./smallComponents/Heading"
import dayjs from "dayjs"

const DatesCalendar = ({ eventsPage, city }) => {
  const month = getNextFiveMonth()
  return (
    <Container>
      <Heading
        heading="Important Dates"
        subheading={`Get an overview all Events and Deadlines in ${city}`}
      />
      <div className="card">
        <div className="row">
          {month.map(date => (
            <div className="col datesCalendar--dates" key={date.month()}>
              <h3>{date.format("MMMM")}</h3>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div>
                <p className="datesCalendar--day">16</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

const getNextFiveMonth = () => {
  const dates = "01234".split("").map(day => {
    console.log(dayjs().add(day, "month"))
    return dayjs().add(day, "month")
  })
  return dates
}

const getEventsFromMonth = month => {}

export default DatesCalendar
