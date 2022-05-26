import React from "react"

// hooks
import { useGetBlogsQuery } from "../../hooks/useGetBlogs"

// components
import Blog from "./Blog/Blog"
import { Section, SectionContent } from "../../components"

// styles
import "./blogs.css"

const Blogs = ({ title, page }) => {
  // blogs from graphql
  const blogs = useGetBlogsQuery()

  return (
    // <section className="section blogs">
    <Section customClass="blogs" title={title}>
      <SectionContent customClass="blogs-center">
        {blogs.map(blog => {
          const { id, image, title, content } = blog
          return <Blog key={id} image={image} title={title} content={content} />
        })}
      </SectionContent>

      {/* {!page && (
        <Link to="/blog" className="btn btn-more-posts">
          more posts
        </Link>
      )} */}
    </Section>
  )
}

export default Blogs
