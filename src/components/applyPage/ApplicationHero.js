import React from "react"

const ApplicationHero = ({ headingFirst, intro, background }) => {
  return (
    <>
      <section
        className="applicationHero--hero pb-5"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="container h-100" />
        <div className="row">
          <div className="col-0 col-md-7" />
          <div className="col-12 col-md-5 text-justify pr-5">
            <h2 className="applicationHero--heading applicationHero--highlighted">
              {headingFirst}
            </h2>
            <p className="applicationHero--intro">{intro}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ApplicationHero
