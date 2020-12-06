import React from "react"
import styled from "styled-components"

export const SectionDivider = styled.div`
  height: 0.3rem;
  width: 3.5rem;
  background-color: #fb1d5c;
  margin-bottom: 1rem;
`

const Sub = styled.p`
  font-size: 20px;
  line-height: 28px;
`

const Heading = ({ heading, subheading }) => {
  return (
    <div className="row mt-5">
      <div className="col">
        <h2>{heading}</h2>
        <SectionDivider />
        <Sub>{subheading}</Sub>
      </div>
    </div>
  )
}

export default Heading
