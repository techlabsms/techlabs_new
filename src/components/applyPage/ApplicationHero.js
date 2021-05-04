import React from "react"

const ApplicationHero = ({ heading, subheading, text }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="c-applicationHero__heading">
              <span className="highlighted">{heading}</span>
            </h2>
            <h5 className="c-applicationHero__subheading">{subheading}</h5>
            <div className="section-divider" />
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApplicationHero
