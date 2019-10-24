import React from "react"
import Container from "./smallComponents/Container"
import Heading from "./smallComponents/Heading"

const DatesCalendar = ({ eventsPage, city}) => {
  return (
    <Container>
        <Heading
            heading="Important Dates"
            subheading={`Get an overview all Events and Deadlines in ${city}`}
        />
        <a href={eventsPage} className="btn btn-primary noDec text-light">
            See now 
        </a>
    </Container>
  )
}

export default DatesCalendar
