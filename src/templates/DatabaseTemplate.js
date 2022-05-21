import React from "react"
import { Banner } from "../components"
import Layout from "../components/Layout"

const DatabaseTemplate = ({ pageContext: { database } }) => {
  return (
    <Layout>
      <Banner title={database.title} />
    </Layout>
  )
}

export default DatabaseTemplate
