import { navigate } from "gatsby-link"
import { useEffect } from "react"

const Remote = () => {
  useEffect(() => {
    navigate("https://www.codeathome.techlabs.org/")
  })
  return null
}

export default Remote
