import React, {Component} from "react"
import dayjs from "dayjs"

class ApplicationCountdown extends Component {
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
            const now = dayjs();
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

            this.setState({months, days, hours, minutes, seconds})
        }, 1000)
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    render() {
        const {months, days, hours, minutes, seconds} = this.state;
        const {isSmall} = this.props; 
        return (
            <div>
                <div className="row">
                    <div className="col text-center">
                        {months === 0 ? (
                            <div className={`chooseCity--countdown-${isSmall ? 'textBlackSmall': 'textBlackLarge'}`}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3 no-padding">
                                            days
                                            <div className={`chooseCity--countdown-${isSmall ? 'numbersSmall': 'numbersLarge'}`}>{days}</div>
                                        </div>
                                        <div className="col-3 no-padding">
                                            hours
                                            <div className={`chooseCity--countdown-${isSmall ? 'numbersSmall': 'numbersLarge'}`}>{hours}</div>
                                        </div>
                                        <div className="col-3 no-padding">
                                            minutes
                                            <div className={`chooseCity--countdown-${isSmall ? 'numbersSmall': 'numbersLarge'}`}>{minutes}</div>
                                        </div>
                                        <div className="col-3 no-padding">
                                            seconds
                                            <div className={`chooseCity--countdown-${isSmall ? 'numbersSmall': 'numbersLarge'}`}>{seconds}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={`chooseCity--countdown-${isSmall ? 'textBlackSmall': 'textBlackLarge'}`}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3 no-padding">
                                            months
                                            <span className={`chooseCity--countdown-${isSmall ? 'numbersSmall': 'numbersLarge'}`}>{months}</span>
                                        </div>
                                        <div className="col-3 no-padding">
                                            days
                                            <span className={`chooseCity--countdown-${isSmall ? 'numbersSmall': 'numbersLarge'}`}>{days}</span>
                                        </div>
                                        <div className="col-3 no-padding">
                                            hours
                                            <span className={`chooseCity--countdown-${isSmall ? 'numbersSmall': 'numbersLarge'}`}>{hours}</span>
                                        </div>
                                        <div className="col-3 no-padding">
                                            minutes
                                            <span className={`chooseCity--countdown-${isSmall ? 'numbersSmall': 'numbersLarge'}`}>{minutes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default ApplicationCountdown
