import React from "react"

const KeyFacts = ({ facts }) => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between flex-column flex-md-row">
        {facts.map((fact, i) => (
          <div className="text-center py-2 px-4">
            <h4 className="key-facts-highlighted">{fact.heading}</h4>
            <p className="key-facts-text">{fact.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KeyFacts
