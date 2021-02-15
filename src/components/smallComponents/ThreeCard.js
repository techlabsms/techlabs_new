import React from "react"
import Container from "./Container"
import styled from "styled-components"

const Text = styled.p`
  font-size: 20px;
  line-height: 35px;
  color: #464646;
`

const ThreeCard = ({
  headingOne,
  textOne,
  headingTwo,
  textTwo,
  headingThree,
  textThree,
}) => {
  return (
    <Container>
      <div className="row">
        <div className="col-12 col-lg-4 my-4">
          <div className="card h-100">
            <h4 className="highlighted">{headingOne}</h4>
            <Text className="py-2">{textOne}</Text>
          </div>
        </div>
        <div className="col-12 col-lg-4 my-4">
          <div className="card h-100">
            <h4 className="highlighted">{headingTwo}</h4>
            <Text className="py-2">{textTwo}</Text>
          </div>
        </div>
        <div className="col-12 col-lg-4 my-4">
          <div className="card h-100">
            <h4 className="highlighted">{headingThree}</h4>
            <Text className="py-2">{textThree}</Text>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ThreeCard
