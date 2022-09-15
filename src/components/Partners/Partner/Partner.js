import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./partner.css"

const Partner = ({ title, image }) => {
  return (
    <article className="partner">
      <div className="partner__image">
        <GatsbyImage image={getImage(image?.node.localFile)} alt={title} />
      </div>
      <h5 className="partner__title">{title}</h5>
    </article>
  )
}
export default Partner
