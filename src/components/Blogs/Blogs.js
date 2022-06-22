import React from "react"
import { Link } from "gatsby"

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
          const { id, title, featuredImage, excerpt, slug } = post

          return (
            <Blog
              key={id}
              title={title}
              image={featuredImage}
              slug={slug}
              excerpt={excerpt}
            />
          )
        })}
      </SectionContent>
      <SectionContent>
        {showLink && (
          <Link to="/news" className="btn btn-center">
            more posts
          </Link>
        )}
      </SectionContent>
    </Section>
  )
}

export default Blogs
