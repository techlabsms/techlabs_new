import React, { Component } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import '../styles/_faqQuestion.scss'

const Link = styled.a`
  font-weight: 900 !important;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 5px;
`

const Answer = styled.p`
  color: #303030;
  margin-left: 10px;
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
        <div className="card w-100 mb-4">
          <div className="py-3">
            <Link className="faq--a" onClick={() => this.handleClick()}>
              <div className="row">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={"faqQuestion--icon mr-3 mt-1 ml-4 " + (this.state.isOpen ? 'faqQuestion--rotate' : null)}
                />
                <h3>{this.props.question}</h3>
              </div>
            </Link>
            {this.state.isOpen && (
              <div>
                <Answer>{this.props.answer}</Answer>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default FaqQuestion
