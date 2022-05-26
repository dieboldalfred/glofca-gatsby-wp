import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// styles
import "./logo.css"

const Logo = ({ text }) => {
  return (
    <div className="logo">
      <div className="logo--image">
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
