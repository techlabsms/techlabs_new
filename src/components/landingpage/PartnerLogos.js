import React from "react"

// plugin & external
import { FormattedMessage } from "gatsby-plugin-react-intl"

// components
import Container from "../smallComponents/Container"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

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
  const imageOne = getImage(logoOne)
  const imageTwo = getImage(logoTwo)
  const imageThree = getImage(logoThree)
  const imageFour = getImage(logoFour)

  return (
    <Container>
      <div className="row my-5 d-flex h-100 partnerLogos">
        <div className="col-md-3 col-12 text-center text-md-left justify-content-center align-self-center">
          <p className="partnerLogos--text my-5">
            {<FormattedMessage id={"landingpage.partnerlogos.text"} />}
          </p>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <a href={linkPartnerOne}>
            <GatsbyImage
              alt="partner logo"
              src={imageOne}
              imgStyle={{
                width: "90%",
                objectFit: "contain",
                margin: "0px 5px",
                alignSelf: "center",
              }}
              className="partnerLogos--img img-fluid"
            />
          </a>
        </div>
        <div className="col-md-2 col-6 my-5   text-center justify-content-center align-self-center">
          <a href={linkPartnerTwo}>
            <GatsbyImage
              src={imageTwo}
              alt="partner logo"
              className="partnerLogos--img img-fluid"
            />
          </a>
        </div>
        <div className="col-md-2 col-6 my-5 text-center  justify-content-center align-self-center">
          <a href={linkPartnerThree}>
            <GatsbyImage
              src={imageThree}
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
            <GatsbyImage
              src={imageFour}
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
