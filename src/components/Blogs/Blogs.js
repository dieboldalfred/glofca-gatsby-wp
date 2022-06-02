import React from "react"
import { Link } from "gatsby"

// hooks
import { useGetBlogsQuery } from "../../hooks/useGetBlogs"

// components
import Blog from "./Blog/Blog"
import { Section, SectionContent } from "../../components"

// styles
import "./blogs.css"

const Blogs = ({ title, posts, showLink }) => {
  // blogs from graphql
  // const blogs = useGetBlogsQuery()

  return (
    // <section className="section blogs">
    <Section customClass="blogs" title={title}>
      <SectionContent customClass="blogs-center">
        {posts.map(post => {
          const { id, title, featuredImage, content, slug } = post
          const imageData = post.featuredImage.node.publicUrl

          return (
            <Blog
              key={id}
              title={title}
              content={content}
              image={imageData}
              slug={slug}
            />
          )
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
