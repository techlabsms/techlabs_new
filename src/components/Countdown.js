import React, { Component } from "react"
import dayjs from "dayjs"

class Countdown extends Component {
  state = {
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnd: true,
    isOpen: this.props.isOpen,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = dayjs()
      if (dayjs(this.props.date).isBefore(now)) {
        this.setState({
          isEnd: false,
        })
        clearInterval(this.interval)
      }
      const countdown = dayjs(this.props.date).subtract(now)
      const months = countdown.$M
      const days = countdown.$D
      const hours = countdown.$H
      const minutes = countdown.$m
      const seconds = countdown.$s

      this.setState({ months, days, hours, minutes, seconds })
    }, 1000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    const { months, days, hours, minutes, seconds, isEnd, isOpen } = this.state
    return (
      <>
        <div className="chooseCity--start">
          <h2 className="chooseCity--start_text">
            {isEnd ? "Application ends:" : "Application is"}
          </h2>
          {isEnd ? (
            <>
              <div className="row">
                <div className="col text-center">
                  <span className="chooseCity--countdown-numbers">
                    {months === 0
                      ? `${days} : ${hours} : ${minutes} : ${seconds}`
                      : `${months} : ${days} : ${hours} : ${minutes}`}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  {months === 0 ? (
                    <p className="chooseCity--countdown-text">
                      days : hours : minutes : seconds
                    </p>
                  ) : (
                    <p className="chooseCity--countdown-text">
                      months : days : hours : minutes
                    </p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="row">
              <div className="col text-center  my-2">
                <span className="chooseCity--countdown-numbers">
                  {!isEnd && isOpen ? (
                    <>
                      <div className="row">
                        <div className="col text-center">
                          <span className="chooseCity--countdown-numbers">
                            {months === 0
                              ? `${days} : ${hours} : ${minutes} : ${seconds}`
                              : `${months} : ${days} : ${hours} : ${minutes}`}
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col text-center">
                          {months === 0 ? (
                            <p className="chooseCity--countdown-text">
                              days : hours : minutes : seconds
                            </p>
                          ) : (
                            <p className="chooseCity--countdown-text">
                              months : days : hours : minutes
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="py-2">Closed</div>
                  )}
                </span>
              </div>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default Countdown
