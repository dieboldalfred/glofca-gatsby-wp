import React from "react"
import classNames from "classnames"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// styles
import "./logo.css"

const Logo = ({ text, customClass, size = "small" }) => (
  <div
    className={classNames("logo", {
      [customClass]: customClass,
    })}
  >
    <div className={`logo--image logo--image-size-${size}`}>
      <Link to="/">
        <StaticImage
          src="../../assets/images/logo.png"
          className="logo"
          placeholder="blurred"
          alt="logo"
        />
      </Link>
    </div>
    <div className="logo--text">{text && <h4>{text}</h4>}</div>
  </div>
)

export default Logo
