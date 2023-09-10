import React, { Component } from "react"
import { Redirect } from "@reach/router"

class Dortmund extends Component {
  render() {
    return <Redirect noThrow to="/location/ruhr" />
  }
}

export default Dortmund
