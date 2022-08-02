import React from "react"
import { Blogs } from "../components"
import Layout from "../components/Layout"

import { useGetAllPostsQuery } from "../hooks/useGetAllPosts"

const Blog = () => {
  const posts = useGetAllPostsQuery()

  return (
    <Layout>
      <Blogs title="News" posts={posts} />
    </Layout>
  )
}

export default Blog
