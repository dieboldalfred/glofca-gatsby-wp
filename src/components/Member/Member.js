import React from "react"
import classNames from "classnames"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./member.css"

const Member = ({ title, image, position, company, customClass }) => {
  const imageClasses = classNames("team--member-image", {
    [customClass]: Boolean(customClass),
  })
  return (
    <article className="team--member">
      <div className={imageClasses}>
        <GatsbyImage image={getImage(image?.node.localFile)} alt={title} />
      </div>
      <div className="team--member-info">
        <h5 className="team--member-title">{title}</h5>
        {position && (
          <h4 className="team--member-position">{`${position}${
            company === null || undefined ? "" : `, ${company}`
          }`}</h4>
        )}
      </div>
    </article>
  )
}
export default Member
