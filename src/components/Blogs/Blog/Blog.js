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
        <GatsbyImage image={getImage(image)} alt={title} />
      </div>
      <div className="blog-info">
        <h4 className="blog-info__h4">{cutString(title, 50)}</h4>

        <p className="blog-info__p">{cutString(content, 250)}</p>
        <Link to={`/blog/${title}`}>
          <button className="btn">Read More</button>
        </Link>
      </div>
    </article>
  )
}

export default Blog
