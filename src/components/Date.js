import React, { useState } from "react"
import ReactDOM from "react-dom"
import Modal from "react-responsive-modal"

const Date = ({ event, month }) => {
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
        <h4 className="ml-3 mt-2">{event.name}</h4>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h1>{event.name}</h1>
        <p>
          Amet laborum cupidatat veniam non est excepteur dolor reprehenderit
          aliquip cupidatat consectetur veniam eu consectetur. Laborum laborum
          dolor sunt amet consequat dolore voluptate dolore. Ad esse pariatur
          cillum ut fugiat ut commodo amet veniam quis elit. Qui aute ipsum do
          Lorem amet aliqua cillum laboris sunt cillum. Proident ad aliquip aute
          aute ipsum anim qui proident deserunt minim dolor.
        </p>
        <div className="row mt-5">
          <div className="col-md-3">
            <h5>Datum:</h5>
            <p>
              {event.date}. {month.toUpperCase()}
            </p>
          </div>
          {generateInfo("Location", event.location)}
          {generateInfo("Organizer", event.organizer)}
        </div>
        <div className="row text-light">
          <a className="btn btn-primary mt-3 ml-3">Contact us</a>
        </div>
      </Modal>
    </>
  )
}

export default Date

function generateInfo(key, data) {
  if (data != "" || data != null) {
    return (
      <>
        <div className="col-md-3">
          <h5>{key}</h5>
          <p>{data}</p>
        </div>
      </>
    )
  }
}
