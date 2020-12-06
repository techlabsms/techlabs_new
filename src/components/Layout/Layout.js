import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Promo from "./Promo"

const Layout = ({ children }) => {
  const [hasAnnouncement, setAnnouncement] = useState(false)

  const hideAnnoucement = () => {
    setAnnouncement(false)
  }
  return (
    <>
      {hasAnnouncement ? (
        <Promo
          text="Esse ullamco fugiat mollit ad. Reprehenderit proident occaecat non pariatur quis anim enim nulla deserunt aliqua nisi. In labore ad amet excepteur consequat Lorem ea non ex amet deserunt deserunt. Elit sit mollit ut consectetur."
          hideAnnoucement={() => hideAnnoucement()}
        />
      ) : null}
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
