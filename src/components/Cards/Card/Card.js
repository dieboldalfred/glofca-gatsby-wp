import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./card.css"

const Card = ({ id, title, image, to }) => {
  return (
    <article className="card" key={id}>
      <Link to={to}>
        <div className="card-container">
          <GatsbyImage
            image={getImage(image?.node.localFile)}
            alt={title}
            className="card-img"
          />
          <div className="card-info">
            <h3 className="card-info--title">{title}</h3>
          </div>
        </div>
      </Link>
    </article>
  )
}
export default Card
