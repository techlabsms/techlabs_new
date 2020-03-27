import React, { Component } from "react"
import locationsImg from "../assets/locations.png"
import "../styles/_main.scss"
import LocationCard from "../components/LocationCard"
import { graphql } from "gatsby"
import get from "lodash/get"
import MAPLOC from "../assets/mapLoc.png"
import Heading from "../components/smallComponents/Heading"
import Container from "../components/smallComponents/Container"
import ArrowButton from "../components/smallComponents/ArrowButton"
import Button from "../components/smallComponents/Button"
import Layout from "../components/Layout"

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
      <Layout>
        <div className="locations">
          <div className="container-fluid">
            <section className="section-picture">
              <div className="container py-5">
                <div className="row margin-top-bot padding-location">
                  <div className="col-md-5 col-lg-5 border-0 text-left">
                    <h1 className="pb-5 display-4">
                      Discover our <br />{" "}
                      <span className="highlighted">Locations</span>
                    </h1>
                    <p className="programmHero--intro">
                      TechLabs is a set of enthusiastic, driven, and passionate
                      individuals who have joined forces to turn as many people
                      as possible into Digital Shapers. Exciting meetups,
                      hackathons, socials, and workshops await you. Discover the
                      TechLabs world here
                    </p>
                    <ArrowButton href="locations-list" />
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

            <section className="locations-list py-5" id="locations-list">
              <div className="container" id="locations-techlabs">
                <div className="row">
                  <div className="col-md-8">
                    <Heading
                      heading="TechLabs Locations"
                      subheading="Check out our current tech communities!"
                    />
                  </div>

                  <div className="col-md-4 d-flex">
                    <input
                      type="search"
                      className="locations--search mt-2 w-100 mb-4 align-self-center"
                      placeholder="Search location"
                      onChange={e => {
                        this.setState({
                          search: e.target.value,
                        })
                      }}
                    />
                  </div>
                </div>

                <div className="row my-5 py-5">
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
            <Container>
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
                            If you are willing to shape the future of tech
                            education and want to create your own TechLabs
                            location on a voluntary basis, reach out! Let’s work
                            together and{" "}
                            <span className="highlighted">
                              build something great!
                            </span>
                          </p>
                          <div className="mt-5">
                            <Button
                              text="More information"
                              link="/foundYourOwn"
                              primary={true}
                            />
                          </div>
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
            </Container>
          </div>
        </div>
      </Layout>
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
