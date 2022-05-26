import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./card.css"

const Card = ({ id, title, image }) => {
  return (
    <article className="card-article" key={id}>
      <div className="card-container">
        <GatsbyImage image={getImage(image)} alt={title} className="card-img" />
        <div className="card-info">
          <h3>{title}</h3>
        </div>
      </div>
    </article>
  )
}
export default Card
