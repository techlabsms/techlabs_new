import React from "react"
import Container from './smallComponents/Container'

const PartnerLogos = ({ logoOne, logoTwo, logoThree, logoFour }) => {
  return (
    <Container>
      <div className="row my-5 d-flex h-100 partnerLogos">
        <div className="col-md-4 col-12 text-center text-md-left justify-content-center align-self-center">
          <p className="partnerLogos--text my-5">
            trusted by our <br /> renowned partners
          </p>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <img src={logoOne} alt="partner logo" className="partnerLogos--img"/>
        </div>
        <div className="col-md-2 col-6  my-5 text-center justify-content-center align-self-center">
          <img src={logoTwo} alt="partner logo" className="partnerLogos--img"/>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <img src={logoThree} alt="partner logo" className="partnerLogos--img"/>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <img src={logoFour} alt="partner logo" className="partnerLogos--img"/>
        </div>
      </div>
    </Container>
  )
}

export default PartnerLogos
