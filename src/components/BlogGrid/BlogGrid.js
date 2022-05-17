import React from "react"
import Title from "../Title/Title"
import { Link } from "gatsby"

import blogs from "../../constants/blogs"

// styles
import "./bloggrid.css"

const BlogGrid = ({ title, page }) => {
  return (
    <section className="section blog">
      <Title title={title} />
      <div className="section-center blog-center">
        {blogs.map(blog => {
          const { id, title, image, excerpt } = blog
          return (
            <article key={id} className="card">
              {/* <img src={image} alt={blog.title} /> */}
              <div className="card-info">
                <h4>{title}</h4>
                <p>{excerpt}</p>
              </div>
            </article>
          )
        })}
      </div>

      {!page && (
        <Link to="/blog" className="btn btn-more-posts">
          more posts
        </Link>
      )}
    </section>
  )
}

export default BlogGrid
