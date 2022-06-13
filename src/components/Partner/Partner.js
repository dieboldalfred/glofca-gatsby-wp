import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./partner.css"

const Partner = ({ title, image }) => {
  return (
    <article className="partner">
      <div className="partner--image">
        <GatsbyImage image={getImage(image?.node.localFile)} alt={title} />
      </div>
      <article className="partner--info">
        <h5 className="partner--info-title">{title}</h5>
      </article>
    </article>
  )
}
export default Partner
