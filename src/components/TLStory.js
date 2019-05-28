import React, { Component } from "react"
import Stories from "react-insta-stories"



class TLStory extends Component {
  render() {
    return (
      <Stories
        stories={stories}
        defaultInterval={5000}
        width={400}
        height={600}
        loop
      />
    )
  }
}

const stories = [
  {
    url: 'https://lh5.googleusercontent.com/ZKUuaru0vmTvQv6uOasA5AGR7XUSfi_3tXwgviTQGjrxbydwFFI68EQ4tMycVVahBJRP-a-ptr9dGoMVPko7=w1380-h945-rw',
    header: {
      heading: "TechLabs",
      subheading: "@Google Hamburg",
      profileImage: "https://lh3.google.com/u/1/d/1oY-ye1dVydnBvU6vMbC2rP-EaGwFEmmv=w1380-h681-iv1",
      seeMore: "",
    },
  },
  {
    url:
      "https://lh3.google.com/u/1/d/1JyZDWFa0sYPYiUWExAasJ9KwWeXejEsJ=w1380-h945-iv1",
    header: {
      heading: "TechLabs",
      subheading: "TechLabs Klassenfahrt",
      profileImage: "https://lh3.google.com/u/1/d/1oY-ye1dVydnBvU6vMbC2rP-EaGwFEmmv=w1380-h681-iv1",
      seeMore: "",
    },
  },


  // {
  //   url: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
  //   type: "video",
  //   duration: 1000,
  // },
  // {
  //   url:
  //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  //   type: "video",
  //   seeMore: "",
  // },
  // {
  //   url:
  //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  //   type: "video",
  // },
  // "https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",


]

export default TLStory