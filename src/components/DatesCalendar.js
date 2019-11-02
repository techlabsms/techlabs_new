import React from "react"
import Container from "./smallComponents/Container"
import Heading from "./smallComponents/Heading"
import Button from "./smallComponents/Button"

const DatesCalendar = ({ eventsPage, city }) => {
  return (
    <Container>
      <Heading
        heading="Important Dates"
        subheading={`Get an overview of all Events and Deadlines in ${city}`}
      />
      <Button
        text="See now"
        link={eventsPage}
        primary={true}
        isExternal={true}
      />
    </Container>
  )
}

export default DatesCalendar
