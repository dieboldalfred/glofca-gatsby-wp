import React from "react"
import { BlogGrid, Projects, Banner } from "../components"
import Layout from "../components/Layout"

const HomePage = () => {
  return (
    <Layout>
      <BlogGrid title="Latest News" />
      <Banner />
      <Projects title="Projects" />
    </Layout>
  )
}

export default HomePage
