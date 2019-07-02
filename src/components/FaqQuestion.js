import React, { Component } from "react"
import styled  from 'styled-components';

const Link = styled.a`
    font-weight: 900 !important;  
    font-size: 1.2rem;  
    cursor: pointer;
    margin-left: 5px;
`;

const Answer = styled.p`
    color: #303030;
    margin-left: 10px;
`;

const Container = styled.div`
    border-bottom: .2px solid rgba(48, 48, 48, .8);
`;

class FaqQuestion extends Component {
  state = {
    isOpen: false,
  }

  handleClick() {
      this.setState({
          isOpen: !this.state.isOpen
      })
  }
  render() {
    return (
      <>
        <div>
          <Container className="py-3">
            <Link className="faq--a" onClick={() => this.handleClick()}>
              {this.props.question}
            </Link>
            {this.state.isOpen && (
              <div>
                <Answer>
                  {this.props.answer}
                </Answer>
              </div>
            )}
          </Container>
        </div>
      </>
    )
  }
}

export default FaqQuestion
