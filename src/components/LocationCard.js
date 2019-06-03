import React from "react"
import pin from "../assets/pin.png"

const LocationCard = ({ imgTop, city, icon }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <img className="card-img-top" src={imgTop} alt="" />
        <div className="card-body">
          <div className="row">
            <div className="col-8 mt-4">
              <img src={pin} alt="pin" />
              <h5 className="text-center w-75 d-inline-block mt-2">{city}</h5>
            </div>
            <div className="col-4">
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
