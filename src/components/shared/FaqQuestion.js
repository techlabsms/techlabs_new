import React, { Component } from "react"

// plugins & external
import { FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

// styles
import "../../styles/_faqQuestion.scss"

const Link = styled.a`
  font-weight: 900 !important;
  font-size: 1.2rem;
  cursor: pointer;
`

class FaqQuestion extends Component {
  state = {
    isOpen: false,
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <>
        <div className="faqQuestion--card w-100 mb-4">
          <div className="py-3">
            <Link className="faq--a" onClick={() => this.handleClick()}>
              <div className="row h-100">
                <div className="col-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={
                      "faqQuestion--icon mr-5 mt-3 ml-4 " +
                      (this.state.isOpen ? "faqQuestion--rotate" : null)
                    }
                  />
                </div>
                <div className="col-9 py-2">
                  <h3><FormattedMessage id={this.props.question}/></h3>
                </div>
              </div>
            </Link>
            {this.state.isOpen && (
              <div className="row justify-content-end">
                <div className="col-10">
                  <p className="pr-5 text-justify"><FormattedMessage id={this.props.answer}/></p>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default FaqQuestion
