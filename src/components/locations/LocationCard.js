import React from "react"

// plugins
import { Link } from "gatsby-plugin-intl"

// assets
import pin from "../../assets/placemark.svg"

const LocationCard = ({ imgTop, city, icon, slug }) => {
  return (
    <div className="col-md-6 mt-3">
      <Link to={`/location/${slug}`} className="locations--card__link">
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
                className="mt-3 pl-3 pr-3 ml-2 d-inline-block"
              />
              <h3 className="mt-4 d-inline-block align-middle">{city}</h3>
            </div>
            <div className="col-4 text-right d-flex justify-content-center align-items-center">
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
