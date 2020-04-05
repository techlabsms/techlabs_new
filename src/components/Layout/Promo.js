import React from "react"

const Promo = ({ text }) => {
  return (
    <>
      <section className="promo">
        <div className="container center">
          <p className="no-margin-block">{text}</p>
        </div>
      </section>
    </>
  )
}

export default Promo
