import React from "react"

// styles
import "./card.css"

const Card = ({ id, title, image }) => {
  return (
    <article className="card-article" key={id}>
      {/* <img src={image} alt={title} /> */}
      {/* <StaticImage
                src="../../assets/images/tajikistan.jpg"
                className="card-img"
                alt={title}
              /> */}
      <div className="card-container">
        <div className="card-info">
          <h3>{title}</h3>
        </div>
      </div>
    </article>
  )
}
export default Card
