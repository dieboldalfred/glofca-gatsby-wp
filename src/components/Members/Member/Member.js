import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// styles
import "./member.css"

const Member = ({ member }) => {
  const { title, featuredImage, position, company, link, customClass } = member

  const imageClasses = classNames("member__image", {
    [customClass]: Boolean(customClass),
  })

  const imageComponent = (
    <GatsbyImage image={getImage(featuredImage?.node.localFile)} alt={title} />
  )

  return (
    <article className="member">
      <div className={imageClasses}>
        {link ? (
          <Link to={link.url} target={link.target}>
            {imageComponent}
          </Link>
        ) : (
          imageComponent
        )}
      </div>
      <div className="member__info">
        <h5 className="member__title">{title}</h5>
        {position && (
          <p className="member__position">{`${position}${
            !company ? "" : `, ${company}`
          }`}</p>
        )}
      </div>
    </article>
  )
}
export default Member
