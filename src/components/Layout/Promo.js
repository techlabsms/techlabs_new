import { Link } from "gatsby"
import React from "react"

const Promo = ({ text, hideAnnoucement }) => {
  return (
    <>
      <section className="promo">
        <div className="container d-flex justify-content-between">
          <div className="col-md-11">{text}</div>
          <div className="col-md-1 d-flex align-items-center justify-content-between">
            <a classNamen="promo-close" onClick={() => hideAnnoucement()}>
              close
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Promo
