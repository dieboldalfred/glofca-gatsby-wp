import React from "react"
import { Link } from "gatsby"

// hooks
import { useGetBlogsQuery } from "../../hooks/useGetBlogs"

// components
import Blog from "./Blog/Blog"
import { Section, SectionContent } from "../../components"

// styles
import "./blogs.css"

const Blogs = ({ title, showLink }) => {
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
      <SectionContent>
        {showLink && (
          <Link to="/blog" className="btn center-btn">
            more posts
          </Link>
        )}
      </SectionContent>
    </Section>
  )
}

export default Blogs
