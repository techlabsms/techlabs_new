import React, { useState } from "react"
import Modal from "react-modal"

const Date = ({ event, month, mail }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="col-md-2 col-sm-4" key={event.id}>
        <div
          className="datesCalendar--day"
          onClick={() => setOpen(true)}
          onKeyDown={() => null}
          role="button"
          tabIndex={0}
        >
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
        <h6 className="ml-3 mt-2">{event.name}</h6>
      </div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="Modal-Date"
        overlayClassName="Modal--overlay"
      >
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
