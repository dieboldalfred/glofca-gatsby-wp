import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// utils
import { clearHtml, cutString } from "../../../utils/typography"

// styles
import "./blog.css"

const Blog = ({ title, excerpt, image, slug }) => {
  return (
    <article className="blog">
      <div className="blog-img">
        <Link to={`/blog/${slug}`}>
          <GatsbyImage image={getImage(image?.node.localFile)} alt={title} />
        </Link>
      </div>
      <div className="blog-info">
        <Link to={`/blog/${slug}`}>
          <h4 className="blog-info__title">{cutString(title, 50)}</h4>
        </Link>

        <p className="blog-info__description">
          {cutString(clearHtml(excerpt), 250)}
        </p>
        <Link to={`/blog/${slug}`}>
          <button className="btn">Read More</button>
        </Link>
      </div>
    </article>
  )
}

export default Blog
