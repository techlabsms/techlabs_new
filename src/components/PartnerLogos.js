import React from "react"
import Container from "./smallComponents/Container"
import Img from "gatsby-image"

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
            <Img alt="partner logo" fluid={logoOne} />
          </a>
        </div>
        <div className="col-md-2 col-6 my-5   text-center justify-content-center align-self-center">
          <a href={linkPartnerThree}>
            <Img
              fluid={logoTwo}
              alt="partner logo"
              className="partnerLogos--img img-fluid"
            />
          </a>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <a href={linkPartnerThree}>
            <Img
              fluid={logoThree}
              alt="partner logo"
              className="partnerLogos--img img-fluid"
              imgStyle={{
                width: "80%",
                objectFit: "contain",
                margin: "0px 10px",
                alignSelf: "center",
              }}
            />
          </a>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <a href={linkPartnerFour}>
            <Img
              fluid={logoFour}
              alt="partner logo"
              className="partnerLogos--img img-fluid  text-center"
              imgStyle={{ width: "40%", objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default PartnerLogos
