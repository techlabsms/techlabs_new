import React, { Component } from "react"
import { Helmet } from "react-helmet"
import favicon16 from "../assets/tl-favicon16.png"
import favicon32 from "../assets/tl-favicon32.png"
import favicon64 from "../assets/tl-favicon64.png"

class Head extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>TechLabs - We Build. Digital. Shapers.</title>
          <link rel="canonical" href="https://techlabs.org" />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="64x64"
            href={favicon64}
          />

          <meta name="title" content="TechLabs - We Build. Digital. Shapers." />
          <meta
            name="description"
            content="TechLabs is a platform for young people from all disciplines. We provide state-of-the-art Tech-Skills to solve the problems of our time digitally and entrepreneurially."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.techlabs.org" />
          <meta
            property="og:title"
            content="TechLabs - We Build. Digital. Shapers."
          />
          <meta
            property="og:description"
            content="TechLabs is a platform for young people from all disciplines. We provide state-of-the-art Tech-Skills to solve the problems of our time digitally and entrepreneurially."
          />
          <meta property="og:image" content={favicon64} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.techlabs.org" />
          <meta
            property="twitter:title"
            content="TechLabs - We Build. Digital. Shapers."
          />
          <meta
            property="twitter:description"
            content="TechLabs is a platform for young people from all disciplines. We provide state-of-the-art Tech-Skills to solve the problems of our time digitally and entrepreneurially"
          />
          <meta property="twitter:image" content={favicon64} />

          <script src="https://embed.small.chat/TG9SCN33JGHR17BPSR.js" async />
        </Helmet>
      </>
    )
  }
}

export default Head
