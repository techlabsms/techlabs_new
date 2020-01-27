import React from "react"
import pin from "../assets/placemark.svg"
import { Link } from "gatsby"

const LocationCard = ({ imgTop, city, icon }) => {
  return (
    <div className="col-md-6 mt-3">
      <Link to={`/location/${city}`}>
        <div className="locations--card">
          <div
            className="locations--card-img"
            style={{
              backgroundImage: `url(${imgTop})`,
            }}
          />
          <div className="row mt-3">
            <div className="col-8">
              <img
                src={pin}
                alt="placemark"
                className="text-muted mt-3 pl-3 pr-3 ml-2 d-inline-block"
              />
              <h3 className="text-muted mt-4 d-inline-block align-middle">
                {city}
              </h3>
            </div>
            <div className="col-4 text-right">
              <img
                src={icon}
                alt="city"
                className="locations--icon mr-4 d-inline-block w-50 h-75"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default LocationCard
