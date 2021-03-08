import React, { Component } from "react"
import { graphql } from "gatsby"

// plugins & external
import get from "lodash/get"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import LocationCard from "../components/locations/LocationCard"
import Heading from "../components/smallComponents/Heading"
import Container from "../components/smallComponents/Container"
import ArrowButton from "../components/smallComponents/ArrowButton"
import Button from "../components/smallComponents/Button"
import Layout from "../components/Layout/Layout"

// assets
import locationsImg from "../assets/locations.png"
import MAPLOC from "../assets/mapLoc.png"

// style
import "../styles/_main.scss"

class Locations extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
    }
  }
  render() {
    const { search } = this.state
    const { intl } = this.props
    const placeholder = intl.formatMessage({ id: "allLocations.placeholder" })
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
                      <FormattedMessage id="allLocations.heading.1" /> <br />{" "}
                      <span className="highlighted lh-90">
                        <FormattedMessage id="allLocations.heading.2" />
                      </span>
                    </h1>
                    <p className="programmHero--intro">
                      <FormattedMessage id="allLocations.intro" />
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
                      heading={
                        <FormattedMessage id="allLocations.locations.heading" />
                      }
                      subheading={
                        <FormattedMessage id="allLocations.locations.subheading" />
                      }
                    />
                  </div>

                  <div className="col-md-4 d-flex">
                    <input
                      type="search"
                      aria-label="Search location"
                      className="locations--search mt-2 w-100 mb-4 align-self-center"
                      placeholder={placeholder}
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
                      slug={location.node.slug}
                      icon={location.node.icon.file.url}
                      key={location.node.heading}
                    />
                  ))}
                </div>
              </div>
            </section>
            {/* your city is not on the map? */}
            <Container>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div class="row no-gutters">
                      <div class="col-md-6 order-2 order-md-1">
                        <div class="card-body">
                          <h2>
                            <span className="highlighted mt-5">
                              <FormattedMessage id="allLocations.city.heading.1" />
                            </span>{" "}
                            <FormattedMessage id="allLocations.city.heading.2" />
                          </h2>
                          <p className="locations--card-text mt-5 mr-3 mt-2">
                            <FormattedMessage id="allLocations.city.text.1" />{" "}
                            <span className="highlighted">
                              <FormattedMessage id="allLocations.city.text.2" />
                            </span>
                          </p>
                          <div className="mt-5">
                            <Button
                              text={
                                <FormattedMessage id="allLocations.city.btn" />
                              }
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

export default injectIntl(Locations)

export const pageQuery = graphql`
  query LocationPageQuery($locale: String) {
    allContentfulLocationPage(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          slug
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
