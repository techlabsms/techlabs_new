import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Promo from "./Promo"

const STATE_KEY = "TL-PROMO"

if (typeof window !== "undefined") {
  sessionStorage.setItem(STATE_KEY, false)
}

const Layout = ({ children }) => {
  const getValue = () => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(STATE_KEY) === "true"
    }
  }
  const [hasAnnouncement, setAnnouncement] = useState(getValue())

  const hideAnnoucement = () => {
    setAnnouncement(false)
    sessionStorage.setItem(STATE_KEY, false)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STATE_KEY, hasAnnouncement)
    }
  }, [hasAnnouncement])

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
