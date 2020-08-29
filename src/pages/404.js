import React, { Component } from "react"
import Layout from "../components/Layout/Layout"
import { FormattedMessage, Link } from "gatsby-plugin-intl"
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
              <p><FormattedMessage id="404.subheading"/></p>
            </div>
          </div>
          <div className="notFound--definition">
            <div className="row mt-5">
              <div className="col">
                <h3>
                  <span role="img" aria-label="emoji">
                    🤓{" "}
                  </span>
                  <FormattedMessage id="404.definition"/>
                </h3>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col notFound--definition">
              <FormattedMessage id="404.text.1"/><span className="hashtag">
                <FormattedMessage id="404.text.2"/>
              </span><FormattedMessage id="404.text.3"/>{" "}
                <span className="hashtag"><FormattedMessage id="404.text.4"/></span><FormattedMessage id="404.text.5"/>{" "}
                <span className="hashtag">
                  <FormattedMessage id="404.text.6"/>
                </span>{" "}
                  <FormattedMessage id="404.text.7"/>
              </div>
            </div>
            <div className="row">
              <div className="col mt-5">
                <Link className="btn btn-primary" to="/">
                  <FormattedMessage id="404.learnTech"/>
                </Link>
                <Link className="btn btn-secondary" to="/">
                  <FormattedMessage id="404.home"/>
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
