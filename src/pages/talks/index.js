import { navigate } from "gatsby-link"
import React, { useEffect } from "react"
import Layout from "../../components/Layout/Layout"

const Index = ({ data }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      navigate("neuroscience")
    }
  })
  return <Layout></Layout>
}

export default Index
