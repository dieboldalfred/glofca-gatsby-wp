import React from "react"
import { Banner } from "../components"
import Layout from "../components/Layout"

const ThemeTemplate = ({ pageContext: { theme } }) => {
  return (
    <Layout>
      <Banner title={theme.title} />
    </Layout>
  )
}

export default ThemeTemplate
