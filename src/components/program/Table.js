import React from "react"
import Heading from "../smallComponents/Heading"
import Container from "../smallComponents/Container"
import { Link } from "gatsby"

const Table = ({
  heading,
  subheading,
  activeProgram,
  hasButton,
  buttonLink,
  codeathome
}) => {
  console.log(codeathome)
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
              <strong>Time</strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
              <p>
                {codeathome.whatIsIncluded[0].time.month}
                <br />{codeathome.whatIsIncluded[0].time.hours}
              </p>
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
              <p>
                5 Month Program
                <br />
                3-5 hours/week
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Who is eligable to apply?</strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
              {codeathome.whatIsIncluded[1].who}
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
              Everybody who is living next to one of our locations and is able
              to participate at local events.
            </td>
          </tr>
          <tr>
            <td>
              <strong>What is included?</strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
              <ul>
                <li className="tableComponent--checkmark">
                  {codeathome.whatIsIncluded[2].what._1}
                </li>
                <li className="tableComponent--checkmark">
                  {codeathome.whatIsIncluded[2].what._2}
                </li>
                <li className="tableComponent--checkmark">
                  {codeathome.whatIsIncluded[2].what._3}
                </li>
                <li className="tableComponent--checkmark">
                  {codeathome.whatIsIncluded[2].what._4}
                </li>
              </ul>
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
              <ul>
                <li className="tableComponent--checkmark">
                  Free Learning Program
                </li>
                <li className="tableComponent--checkmark">
                  Mentorship on campus
                </li>
                <li className="tableComponent--checkmark">
                  Local Events
                </li>
                <li className="tableComponent--checkmark">
                  Digital Shaper Certificate
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Which tracks are open?</strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
              <ul>
                <li>{codeathome.whatIsIncluded[3].tracks._1}</li>
                <li>{codeathome.whatIsIncluded[3].tracks._2}</li>
                <li>{codeathome.whatIsIncluded[3].tracks._3}</li>
                <li>{codeathome.whatIsIncluded[3].tracks._4}</li>
              </ul>
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
              <ul>
                <li>Premium Web Development</li>
                <li>Premium Data Science <br/>(Python & R)</li>
                <li>Premium AI</li>
                <li>Premium UX Design</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>What is main difference?</strong>
            </td>
            <td className={activeProgram === "remote" ? "active" : ""}>
              <ul>
                <li>{codeathome.whatIsIncluded[4].difference._1}</li>
                <li>{codeathome.whatIsIncluded[4].difference._2}</li>
                <li>{codeathome.whatIsIncluded[4].difference._3}</li>
              </ul>
            </td>
            <td className={activeProgram === "local" ? "active-right" : ""}>
              <ul>
                <li>Local Community</li>
                <li>Access to local Mentors</li>
                <li>Complete a Team Project</li>
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
