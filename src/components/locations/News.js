import React from "react"
import Tweet from "../../assets/tweet.png"
import Wn from "../../assets/wn.png"

const News = ({ heading, subheading }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h2>{heading}</h2>
          <div className="section-divider" />
          <p className="basicSection--sub">{subheading}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={Tweet} alt="" />
        </div>
        <div className="col-6">
          <img src={Wn} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img src={Wn} alt="" />
        </div>
        <div className="col-6">
          <img src={Tweet} alt="" className="news--img-last" />
        </div>
      </div>
    </>
  )
}

export default News
