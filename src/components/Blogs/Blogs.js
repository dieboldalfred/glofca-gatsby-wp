import React from "react"
import { Link } from "gatsby"

// hooks
import { useGetBlogsQuery } from "../../hooks/useGetBlogs"

// components
import Title from "../Title/Title"
import Blog from "./Blog/Blog"

// styles
import "./blogs.css"

const Blogs = ({ title, page }) => {
  // blogs from graphql
  const blogs = useGetBlogsQuery()

  return (
    <section className="section blogs">
      <Title title={title} />

      <div className="section-center blogs-center">
        {blogs.map(blog => {
          const { id, image, title, content } = blog
          return (
            <Link to={`/blog/${title}`}>
              <Blog
                key={id}
                imageName={image}
                title={title}
                content={content}
              />
            </Link>
          )
        })}
      </div>

      {/* {!page && (
        <Link to="/blog" className="btn btn-more-posts">
          more posts
        </Link>
      )} */}
    </section>
  )
}

export default Blogs
