import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./member.css"

const Member = ({ title, image, position, company }) => {
  return (
    <article className="team--member">
      <div className="team--member-image">
        <GatsbyImage image={getImage(image?.node.localFile)} alt={title} />
      </div>
      <div className="team--member-info">
        <h5>{title}</h5>
        {position && <h4> {`${position}, ${company}`}</h4>}
      </div>
    </article>
  )
}
export default Member
