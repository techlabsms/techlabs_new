import React from "react"

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          Pied Piper
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigations-08"
          aria-controls="navigations-08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navigations-08">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Features<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Enterprise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                ICO
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Whitepaper
                </a>
                <a className="dropdown-item" href="#">
                  Token
                </a>
              </div>
            </li>
          </ul>
          <a className="btn btn-outline-primary mt-2 mt-md-0 ml-lg-3" href="#">
            Sign up
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
