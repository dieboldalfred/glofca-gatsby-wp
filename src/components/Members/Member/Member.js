import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./member.css"

const Member = ({ title, image, position, company, link, customClass }) => {
  const imageClasses = classNames("team--member-image", {
    [customClass]: Boolean(customClass),
  })

  const imageComponent = (
    <GatsbyImage image={getImage(image?.node.localFile)} alt={title} />
  )

  return (
    <article className="team--member">
      <div className={imageClasses}>
        {link ? (
          <Link to={link.url} target={link.target}>
            {imageComponent}
          </Link>
        ) : (
          imageComponent
        )}
      </div>
      <div className="team--member-info">
        <h5 className="team--member-title">{title}</h5>
        {position && (
          <p className="team--member-position">{`${position}${
            !company ? "" : `, ${company}`
          }`}</p>
        )}
      </div>
    </article>
  )
}
export default Member
