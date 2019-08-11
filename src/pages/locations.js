import React, { Component } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import locationsImg from "../assets/locations.png"
import "../styles/_main.scss"
import LocationCard from "../components/LocationCard"
import { graphql, Link } from "gatsby"
import get from "lodash/get"
import MAPLOC from "../assets/mapLoc.png"

class Locations extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
    }
  }
  render() {
    const { search } = this.state

    const locations = get(this, "props.data.allContentfulLocationPage.edges")

    //Filtering the locations for a fake search
    const filteredLocations = locations.filter(location => {
      return location.node.heading.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <div className="locations">
        <Navbar />
        <div className="container-fluid">
          <section className="section-picture">
            <div className="container py-5">
              <div className="row margin-top-bot padding-location">
                <div className="col-md-5 col-lg-5 border-0 text-left">
                  <h1 className="mt-3 display-4">
                    Discover our <br />{" "}
                    <span className="highlighted">locations</span>
                  </h1>
                  <p className="pr-5 text-justify mt-5">
                    TechLabs is the community that enables you to become a
                    digital shaper. Exciting meetups, hackathons, socials and
                    workshops await you. Discover the TechLabs world here.
                  </p>
                </div>
                <div className="col-md-7 col-lg-7 text-center">
                  <img
                    src={locationsImg}
                    alt="locations"
                    className="locations--hero-img"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="locations-list py-5">
            <div className="container" id="locations-techlabs">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="section-title">TechLabs locations</h1>
                  <div className="section-divider" />
                  <p className="basicSection--sub">
                    Check out our offline communities!
                  </p>
                </div>
                <div className="col-md-4">
                  <input
                    type="search"
                    className="locations--search mt-2"
                    placeholder="Search location"
                    onChange={e => {
                      this.setState({
                        search: e.target.value,
                      })
                    }}
                  />
                </div>
              </div>

              <div className="row">
                {filteredLocations.map(location => (
                  <LocationCard
                    imgTop={location.node.image.file.url}
                    city={location.node.heading}
                    icon={location.node.icon.file.url}
                  />
                ))}
              </div>
            </div>
          </section>
          <section>
            <div className="container py-5">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div class="row no-gutters">
                      <div class="col-md-6 order-2 order-md-1">
                        <div class="card-body">
                          <h2>
                            <span className="highlighted mt-5">Your city</span>{" "}
                            is not on the map?
                          </h2>
                          <p class="locations--card-text mt-5 mr-3 mt-2">
                            If you are looking to bring TechLabs to your local
                            community and want to shape the future of education,
                            reach out! Let’s work together and{" "}
                            <span className="highlighted">
                              build something great!
                            </span>
                          </p>
                          <Link
                            to="/foundYourOwn"
                            className="btn btn-primary mt-5"
                          >
                            More information
                          </Link>
                        </div>
                      </div>
                      <div class="col-md-6 text-center align-middle order-1 order-md-2">
                        <img
                          src={MAPLOC}
                          class="card-img pt-4 pr-2 pb-5"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Locations

export const pageQuery = graphql`
  query LocationPageQuery {
    allContentfulLocationPage {
      edges {
        node {
          heading
          image {
            file {
              url
            }
          }
          icon {
            file {
              url
            }
          }
        }
      }
    }
  }
`
