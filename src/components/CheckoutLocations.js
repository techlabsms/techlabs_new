import React from "react"
import Container from "./smallComponents/Container"
import Heading from "./smallComponents/Heading"
import Frame from "../assets/Frame.png"
import { Link } from "gatsby"

const CheckoutLocations = () => {
  return (
    <Container>
      <Heading
        heading="Check out our locations"
        subheading="Discover the TechLabs world"
      />
      <div className="row">
        <div className="col-12 col-lg-6 mb-auto mt-auto order-2 order-lg-1 pr-5">
          <Link to="/location/Barcelona" className="noDec color-black">
            <div className="learn--card mb-4">
              <div className="row">
                <div className="col-1">
                  <div className="learn--color" />
                </div>
                <div className="col-11 mt-3">
                  <p>Barcelona</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/location/Copenhagen" className="noDec color-black">
            <div className="learn--card mb-4">
              <div className="row">
                <div className="col-1">
                  <div className="learn--color" />
                </div>
                <div className="col-11 mt-3">
                  <p>Copenhagen</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/location/Muenster" className="noDec color-black">
            <div className="learn--card mb-4">
              <div className="row">
                <div className="col-1">
                  <div className="learn--color" />
                </div>
                <div className="col-11 mt-3">
                  <p>Muenster</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/location/Medellín" className="noDec color-black">
            <div className="learn--card mb-4">
              <div className="row">
                <div className="col-1">
                  <div className="learn--color" />
                </div>
                <div className="col-11 mt-3">
                  <p>Medellín</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/location/Berlin" className="noDec color-black">
            <div className="learn--card mb-4">
              <div className="row">
                <div className="col-1">
                  <div className="learn--color" />
                </div>
                <div className="col-11 mt-3">
                  <p>Berlin</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/location/Curitiba" className="noDec color-black">
            <div className="learn--card mb-4">
              <div className="row">
                <div className="col-1">
                  <div className="learn--color" />
                </div>
                <div className="col-11 mt-3">
                  <p>Curitiba</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2 mb-5">
          <div className="card d-flex justify-content-center no-cursor">
            <img
              src={Frame}
              alt=""
              className="img-fluid align-self-center py-2"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CheckoutLocations
