import React from "react"

const Faq = props => {
  return (
    <>
      <section className="py-5 my-5">
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <h2>FAQ´s</h2>
              <div className="section-divider" />
              <p className="basicSection--sub">Do you have more questions?</p>
            </div>
          </div>
          <div className="row">
            <div className="col">{props.children}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
