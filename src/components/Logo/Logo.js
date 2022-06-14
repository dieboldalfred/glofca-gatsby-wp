import React from "react"
import classNames from "classnames"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// styles
import "./logo.css"

const Logo = ({ text, customClass, size = "small" }) => {
  return (
    <div
      className={classNames("logo", {
        [customClass]: customClass,
      })}
    >
      <div className={`logo--image-size-${size}`}>
        <Link to="/">
          <StaticImage
            src="../../assets/images/logo.png"
            className="logo"
            alt="logo"
          />
        </Link>
      </div>
      <div className="logo--text">{text && <p>{text}</p>}</div>
    </div>
  )
}

export default Logo
