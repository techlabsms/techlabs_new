import React, { useState } from "react"

const Dropdown = ({ options, style, onSelect }) => {
  const [choosenOption, setChoosenOption] = useState()
  return (
    <div style={style}>
      <select
        style={{ width: "100%" }}
        className="dropdown-select"
        onBlur={e => {
          setChoosenOption(e.target.value)
          onSelect(e.target.value)
        }}
        onChange={e => {
          setChoosenOption(e.target.value)
          onSelect(e.target.value)
        }}
        value={choosenOption}
      >
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
