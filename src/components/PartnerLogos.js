import React from "react"
import Container from "./smallComponents/Container"

const PartnerLogos = ({
  logoOne,
  linkPartnerOne,
  logoTwo,
  linkPartnerTwo,
  logoThree,
  linkPartnerThree,
  logoFour,
  linkPartnerFour,
}) => {
  return (
    <Container>
      <div className="row my-5 d-flex h-100 partnerLogos">
        <div className="col-md-3 col-12 text-center text-md-left justify-content-center align-self-center">
          <p className="partnerLogos--text my-5">
            Some Partners - <br />
            we worked with
          </p>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <a href={linkPartnerOne}>
            <img
              src={logoOne}
              alt="partner logo"
              className="partnerLogos--img img-fluid"
            />
          </a>
        </div>
        <div className="col-md-2 col-6 my-5   text-center justify-content-center align-self-center">
          <a href={linkPartnerThree}>
            <img
              src={logoTwo}
              alt="partner logo"
              className="partnerLogos--img img-fluid"
            />
          </a>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <a href={linkPartnerThree}>
            <img
              src={logoThree}
              alt="partner logo"
              className="partnerLogos--img img-fluid"
            />
          </a>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <a href={linkPartnerFour}>
            <img
              src={logoFour}
              alt="partner logo"
              className="partnerLogos--img img-fluid"
            />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default PartnerLogos
