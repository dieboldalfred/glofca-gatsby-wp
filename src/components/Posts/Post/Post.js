import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// utils
import { clearHtml, cutString } from "../../../utils/typography"

// styles
import "./post.css"

const Post = ({ title, excerpt, image, slug }) => {
  return (
    <article className="post">
      <div className="post__img">
        <Link to={`/news/${slug}`}>
          <GatsbyImage image={getImage(image?.node.localFile)} alt={title} />
        </Link>
      </div>
      <div className="post__info">
        <Link to={`/news/${slug}`}>
          <h4 className="post__title">{title}</h4>
        </Link>
        <p className="post__description">
          {cutString(clearHtml(excerpt), 100)}
        </p>
        <Link to={`/news/${slug}`}>
          <button className="btn">Read More</button>
        </Link>
      </div>
    </article>
  )
}

export default Post
