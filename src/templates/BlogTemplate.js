import React from "react"
import { Banner } from "../components"
import Layout from "../components/Layout"

const BlogTemplate = ({ pageContext: { blog } }) => {
  return (
    <Layout>
      <Banner title={blog.title} />
    </Layout>
  )
}

export default BlogTemplate
