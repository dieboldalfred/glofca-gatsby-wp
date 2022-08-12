import React from "react"
import { Blogs, Seo } from "../components"
import Layout from "../components/Layout"

import { useGetAllPostsQuery } from "../hooks/useGetAllPosts"

const Blog = () => {
  const posts = useGetAllPostsQuery()

  return (
    <Layout>
      <Seo title="News" />
      <Blogs title="News" posts={posts} />
    </Layout>
  )
}

export default Blog
