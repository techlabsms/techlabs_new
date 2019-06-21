import React, { Component } from "react"
import get from "lodash/get"
import Navbar from "../components/Navbar"

class location extends Component {
  render() {
    const location = get(this.props, "data.contentfulLocationPage")
    return (
      <div>
        <Navbar />
        <section className="container-fluid">
          <section>
            <div className="location-hero-ms location-hero" style={{ backgroundImage: `url(${location.image.file.url})`}}>
              <div>
                <div className="col-md-9 col-lg-5 border-0 my-5 p-5 location-card">
                  <h1 className="location-title">
                    <img src={location.icon.file.url} alt="" /> {location.heading}
                  </h1>
                  {location.isOpen ? (
                    <div>
                      <p className="text-muted batch-text">
                        Next Batch {location.nextBatchDate}
                      </p>

                      <a className="btn btn-primary mt-3 d-inline" href="/">
                        Apply now
                      </a>
                      <a className="btn btn-secondary mt-3 d-inline" href="/">
                        Contact us
                      </a>
                    </div>
                  ) : (
                    <a className="btn btn-secondary mt-3 d-inline" href="/">
                      Contact us
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default location

export const pageQuery = graphql`
  query LocationByHeading($heading: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulLocationPage(heading: { eq: $heading }) {
      heading
      icon {
        file {
          url
        }
      }
      image{
        file{
          url
        }
      }
      isOpen
      nextBatchDate
    }
  }
`
