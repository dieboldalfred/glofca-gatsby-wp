import React from "react"
import { Posts, Seo } from "../components"
import Layout from "../components/Layout"

import { useGetAllPostsQuery } from "../hooks/useGetAllPosts"

const News = () => {
  const posts = useGetAllPostsQuery()

  return (
    <Layout>
      <Seo title="News" />
      <Posts title="News" posts={posts} />
    </Layout>
  )
}

export default News
