import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./card.css"

const Card = ({ id, title, image, to }) => {
  return (
    <article className="card" key={id}>
      <Link to={to}>
        <div className="card__container">
          <GatsbyImage
            image={getImage(image?.node.localFile)}
            alt={title}
            className="card__img"
          />
          <div className="card__info">
            <div className="card__info--title">{title}</div>
          </div>
        </div>
      </Link>
    </article>
  )
}
export default Card
