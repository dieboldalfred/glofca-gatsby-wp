import React from "react"
import { Blogs, BreadCrumb, SectionContent } from "../components"
import Layout from "../components/Layout"

import { useGetAllPostsQuery } from "../hooks/useGetAllPosts"

const Blog = () => {
  const posts = useGetAllPostsQuery()

  return (
    <Layout>
      <SectionContent>
        <BreadCrumb />
      </SectionContent>
      <Blogs title="All Posts" posts={posts} />
    </Layout>
  )
}

export default Blog
