import React, { Component } from "react"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby-plugin-intl"
import "../styles/_404.scss"

class NotFound extends Component {
  render() {
    return (
      <Layout>
        <div className="container notFound">
          <div className="row mt-5">
            <div className="col text-center">
              <h1 className="notFound--number">
                404<span className="notFound--dot">.</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <p>As a techie you know what it means…</p>
            </div>
          </div>
          <div className="notFound--definition">
            <div className="row mt-5">
              <div className="col">
                <h3>
                  <span role="img" aria-label="emoji">
                    🤓{" "}
                  </span>
                  Definiton:
                </h3>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col notFound--definition">
                The <span className="hashtag">HTTP 404</span>, 404 Not Found,
                404, Page Not Found, or Server{" "}
                <span className="hashtag">Not Found error message</span> is a
                Hypertext Transfer Protocol (HTTP) standard response code, in
                computer network communications, to indicate that the browser
                was able to communicate with a given server, but the server{" "}
                <span className="hashtag">
                  could not find what was requested.
                </span>{" "}
                The website hosting server will typically generate a "404 Not
                Found" web page when a user attempts to follow a broken or dead
                link; hence the 404 error is one of the most recognizable errors
                encountered on the World Wide Web.
              </div>
            </div>
            <div className="row">
              <div className="col mt-5">
                <Link className="btn btn-primary" to="/">
                  Learn tech
                </Link>
                <Link className="btn btn-secondary" to="/">
                  Return home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFound
