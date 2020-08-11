import React from "react"
import { Link } from "gatsby"

// plugins
import { FormattedMessage } from "gatsby-plugin-intl"

// components
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"

const Table = ({
  heading,
  subheading,
  activeProgram,
  hasButton,
  buttonLink,
}) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="row tableComponent py-5">
        <table className="table">
          <tr>
            <th></th>
            <th className={activeProgram === "remote" ? "active" : ""}>
              <h3 className={activeProgram === "remote" ? "" : "color-red"}>
                #codeathome Bootcamp
              </h3>
            </th>
            <th className={activeProgram === "local" ? "active-right" : ""}>
              <h3 className={activeProgram === "local" ? "" : "color-red"}>
                Local Digital Shaper Program
              </h3>
            </th>
          </tr>
          <tr>
            <td>
              <strong>
                <FormattedMessage
                id={"program.local.table.row1.col1"}/>
              </strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
              <p>
              <FormattedMessage
                id={"program.local.table.row1.col2"}/>
              </p>
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
              <p>
              <FormattedMessage
                id={"program.local.table.row1.col3"}/>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
              <FormattedMessage
                id={"program.local.table.row2.col1"}/>
              </strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
            <FormattedMessage
                id={"program.local.table.row2.col2"}/>
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
            <FormattedMessage
                id={"program.local.table.row2.col3"}/>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
              <FormattedMessage
                id={"program.local.table.row3.col1"}/>
              </strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
              <ul>
                <li className="tableComponent--checkmark">
                  <FormattedMessage
                  id={"program.local.table.row3.col2.1"}/>
                </li>
                <li className="tableComponent--checkmark">
                  <FormattedMessage
                  id={"program.local.table.row3.col2.2"}/>
                </li>
                <li className="tableComponent--checkmark">
                  <FormattedMessage
                  id={"program.local.table.row3.col2.3"}/>
                </li>
              </ul>
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
              <ul>
                <li className="tableComponent--checkmark">
                  <FormattedMessage
                    id={"program.local.table.row3.col3.1"}/>
                </li>
                <li className="tableComponent--checkmark">
                  <FormattedMessage
                    id={"program.local.table.row3.col3.2"}/>
                </li>
                <li className="tableComponent--checkmark">
                  <FormattedMessage
                    id={"program.local.table.row3.col3.3"}/>
                </li>
                <li className="tableComponent--checkmark">
                  <FormattedMessage
                    id={"program.local.table.row3.col3.4"}/>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                <FormattedMessage
                  id={"program.local.table.row4.col1"}/>
              </strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
              <ul>
                <li><FormattedMessage id={"program.local.table.row4.col2.1"}/></li>
                <li><FormattedMessage id={"program.local.table.row4.col2.2"}/></li>
                <li><FormattedMessage id={"program.local.table.row4.col2.3"}/></li>
                <li><FormattedMessage id={"program.local.table.row4.col2.4"}/></li>
              </ul>
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
              <ul>
                <li><FormattedMessage id={"program.local.table.row4.col3.1"}/></li>
                <li><FormattedMessage id={"program.local.table.row4.col3.2"}/></li>
                <li><FormattedMessage id={"program.local.table.row4.col3.3"}/></li>
                <li><FormattedMessage id={"program.local.table.row4.col3.4"}/></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
              <FormattedMessage
                  id={"program.local.table.row5.col1"}/>
              </strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
              <ul>
                <li><FormattedMessage id={"program.local.table.row5.col2.1"}/></li>
                <li><FormattedMessage id={"program.local.table.row5.col2.2"}/></li>
              </ul>
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
              <ul>
                <li><FormattedMessage id={"program.local.table.row5.col3.1"}/></li>
                <li><FormattedMessage id={"program.local.table.row5.col3.2"}/></li>
              </ul>
            </td>
          </tr>
          {hasButton && (
            <tr>
              <td></td>
              <td
                className={
                  activeProgram === "remote"
                    ? "active text-center"
                    : "text-center"
                }
              >
                {buttonLink ? (
                  <a
                    href={buttonLink}
                    className={
                      activeProgram === "remote"
                        ? "btn btn-secondary"
                        : "btn btn-primary"
                    }
                  >
                    Apply
                  </a>
                ) : (
                  <Link
                    className={
                      activeProgram === "remote"
                        ? "btn btn-secondary"
                        : "btn btn-primary"
                    }
                    to="/program/remote"
                  >
                    Learn more
                  </Link>
                )}
              </td>
              <td
                className={
                  activeProgram === "local"
                    ? "active-right text-center"
                    : "text-center"
                }
              >
                <Link
                  className={
                    activeProgram === "local"
                      ? "btn btn-secondary"
                      : "btn btn-primary"
                  }
                  to={activeProgram === "local" ? buttonLink : "/program/local"}
                >
                  {activeProgram === "local" ? "Apply" : "Learn more"}
                </Link>
              </td>
            </tr>
          )}
        </table>
      </div>
    </Container>
  )
}

export default Table
