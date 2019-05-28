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
    url:
      "https://raw.githubusercontent.com/techlabsms/techlabs_new/master/src/assets/photos/IMG_4012-1.jpg?token=AI46U4UD7QLWBLOD57FDS2C46YRSU",
    header: {
      heading: "TechLabs",
      subheading: "@Google Hamburg",
      profileImage: "https://raw.githubusercontent.com/techlabsms/techlabs_new/master/src/assets/tl-icon-whitebg.jpg?token=AI46U4XH7CVZHPBDHLLA7OK46YRZY",
      // seeMore: "",
    },
  },
  {
    url:
      "https://raw.githubusercontent.com/techlabsms/techlabs_new/master/src/assets/photos/IMG_4014-1.jpg?token=AI46U4XBXY7TNPZL3ZWF5LC46YRTQ",
    header: {
      heading: "TechLabs",
      subheading: "TechLabs class trip",
      profileImage: "https://raw.githubusercontent.com/techlabsms/techlabs_new/master/src/assets/tl-icon-whitebg.jpg?token=AI46U4XH7CVZHPBDHLLA7OK46YRZY",
      // seeMore: "",
      // styles: {transform: 'scale(1.5)'}, //This is not working
    },
  },
  {
    url:
      "https://raw.githubusercontent.com/techlabsms/techlabs_new/master/src/assets/photos/IMG_4079-1.jpg?token=AI46U4R5COAORHHYGFD7A6S46YSG6",
    header: {
      heading: "TechLabs",
      subheading: "Prototyping Workshop",
      profileImage: "https://raw.githubusercontent.com/techlabsms/techlabs_new/master/src/assets/tl-icon-whitebg.jpg?token=AI46U4XH7CVZHPBDHLLA7OK46YRZY",
      // seeMore: "",
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
