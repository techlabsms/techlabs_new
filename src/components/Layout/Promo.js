import { Link } from "gatsby"
import React from "react"

const Promo = ({ text, target }) => {
  return (
    <>
      <section className="promo">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              {text}{" "}
              <Link to={target} className="promo-btn" target="__blank">
                More Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Promo
