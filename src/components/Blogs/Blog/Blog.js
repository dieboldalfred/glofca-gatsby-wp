import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// styles
import "./blog.css"

const Blog = ({ title, content }) => {
  return (
    <article className="blog">
      {/* <StaticImage src={src} className="card-image" alt="logo" /> */}
      <div className="blog-info">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </article>
  )
}

export default Blog
