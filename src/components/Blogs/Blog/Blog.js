import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// utils
import { cutString } from "../../../utils/typography"
// styles
import "./blog.css"

const Blog = ({ title, content, image }) => {
  return (
    <article className="blog">
      <div className="blog-img">
        <Link to={`/blog/${title}`}>
          <GatsbyImage image={getImage(image)} alt={title} />
        </Link>
      </div>
      <div className="blog-info">
        <Link to={`/blog/${title}`}>
          <h4 className="blog-info__h4">{cutString(title, 50)}</h4>
        </Link>

        <p className="blog-info__p">{cutString(content, 250)}</p>
        <Link to={`/blog/${title}`}>
          <button className="btn">Read More</button>
        </Link>
      </div>
    </article>
  )
}

export default Blog
