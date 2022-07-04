import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LinkTranslated from "../../LinkTranslated/LinkTranslated"

// styles
import "./card.css"

const Card = ({ id, title, image, to, lang }) => {
  // image = { node: { localFile: { childImageSharp: { ... }}}}
  // { childImageSharp: {...}}
  return (
    <LinkTranslated to={to} lang={lang}>
      <article className="card-article" key={id}>
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
      </article>
    </LinkTranslated>
  )
}
export default Card
