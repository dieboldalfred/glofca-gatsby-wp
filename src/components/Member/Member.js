import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Member = ({ name, image, position, company }) => {
  return (
    <article className="team--member">
      <div className="team--member-image">
        <GatsbyImage image={getImage(image)} alt={name} />
      </div>
      <div className="team--member-info">
        <h5>{name}</h5>
        {position && <h4> {`${position}, ${company}`}</h4>}
      </div>
    </article>
  )
}
export default Member
