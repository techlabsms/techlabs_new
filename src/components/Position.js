import React, { Component } from "react"
import arrowDown from "../assets/arrowDown.svg"
import PropTypes from 'prop-types';

class Position extends Component {
  state = {
    isShown: false,
  }

  toggleVisibilty() {
    this.setState({
      isShown: !this.state.isShown,
    })
  }
  render() {
    const { emoji, jobTitle, jobDescription } = this.props
    return (
      <>
        <div className="row mt-3">
          <div className="col-8">
            <h3>
              <span role="img">{emoji}</span> - {jobTitle}
            </h3>
          </div>
          <div className="col-4 text-right">
            <a
              className="locations--hero-btn"
              onClick={() => this.toggleVisibilty()}
            >
              <img src={arrowDown} alt="locations" />
            </a>
          </div>
        </div>
        {this.state.isShown && (
          <div className="row">
            <div className="col-12 mt-3">
              <p>{jobDescription}</p>
              <a className="btn btn-primary mt-3" href="/">
                Apply now
              </a>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12">
            <hr />
          </div>
        </div>
      </>
    )
  }
}

Position.propTypes = {
  emoji: PropTypes.string,
  jobTitle: PropTypes.string,
  jobDescription: PropTypes.string,
} 

Position.defaultProps = {
  emoji: '🔥',
  jobTitle: 'Digital Shaper',
  jobDescription: 'Wir suchen dich als digital Shaper für unser Team. Du willst die digitale Bildung in deutschland untertsützen? Hilf uns dabei!',
}

export default Position
