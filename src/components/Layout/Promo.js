import React from "react"

const Promo = ({ text, hideAnnoucement }) => {
  return (
    <>
      <section className="promo">
        <div className="container d-flex justify-content-between">
          <p className="no-margin-block">{text}</p>
          <a classNamen="promo-close" onClick={() => hideAnnoucement()}>
            close
          </a>
        </div>
      </section>
    </>
  )
}

export default Promo
