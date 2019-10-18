import React from "react"
import SlackImg from "../assets/SlackImg.png"
import slackLogo from "../assets/slack.png"
import Heading from "./smallComponents/Heading"
import Container from "./smallComponents/Container"

const JoinCommunity = ({ heading, subheading, slackLink }) => {
  return (
    <Container>
      <Heading heading={heading} subheading={subheading} />
      <div className="row">
        <div className="col">
          <img src={SlackImg} alt="Group Foto" className="w-75" />
          <div className=" w-75 joinCommunity--card">
            <div className="row">
              <div className="col-3 col-md-3 ">
                <img
                  src={slackLogo}
                  alt="slack logo"
                  className="joinCommunity--slack"
                />
              </div>
              <div className="col-9 col-md-9 d-flex align-items-center justify-content-center">
                <a href={slackLink} className="noDec joinCommunity--link">
                  <h1 className="joinCommunity--heading">Join our Slack</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default JoinCommunity
