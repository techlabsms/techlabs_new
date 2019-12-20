import React, { useState } from "react"
import Modal from "react-responsive-modal"

const Date = ({ event, month, mail }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="col-md-2" key={event.id}>
        <div className="datesCalendar--day" onClick={() => setOpen(true)}>
          <div className="row">
            <div className="col">
              <h6 className="datesCalendar--threeLetterDate">
                {month.substring(0, 3).toUpperCase()}
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>{event.date}</h1>
            </div>
          </div>
        </div>
        <h5 className="ml-3 mt-2">{event.name}</h5>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <div className="row mt-5">
          <div className="col-md-3">
            <h5>Datum:</h5>
            <p>
              {event.date}. {month.toUpperCase()}
            </p>
          </div>
        </div>
        <div className="row text-light">
          <a className="btn btn-primary mt-3 ml-3" href={`mailto:${mail}`}>
            Contact us
          </a>
        </div>
      </Modal>
    </>
  )
}

export default Date
