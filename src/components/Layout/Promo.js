import { Link } from "gatsby"
import React from "react"

const Promo = ({ text, target }) => {
  return (
    <>
      <section className="promo">
        <div className="container d-flex justify-content-between">
          <div className="col-md-10">{text}</div>
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <Link to={target} classNamen="promo-close">
              More Information
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Promo
