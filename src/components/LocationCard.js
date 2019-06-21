import React from "react"
import pin from "../assets/placemark.svg"
import { Link } from "gatsby"

const LocationCard = ({ imgTop, city, icon }) => {
  return (
    <div className="col-md-6 mt-3">
      <Link to={`/${city.toLowerCase()}`}>
        <div className="locations--card">
          <img className="card-img" src={imgTop} alt="location group" />
          <div className="row mt-3">
            <div className="col-sm-7 col-md-9">
              <img
                src={pin}
                alt="placemark"
                className="text-muted mt-3 pl-3 pr-3 ml-2 d-inline-block"
              />
              <h3 className="text-muted mt-4 ml-3 pl-3 pr-3 d-inline-block align-middle">
                {city}
              </h3>
            </div>
            <div className="col-sm-4 col-md-4 text-right">
              <img src={icon} alt="city" className="locations--icon mr-4 d-inline-block " />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default LocationCard
