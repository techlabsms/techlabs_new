import React from "react"

const Faq = (props) => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col">
              {props.children}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
