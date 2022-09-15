import React from "react"
import { Link } from "gatsby"

// styles
import "./banner.css"

const Banner = ({ link, text }) => (
  <div className="banner">
    <Link to={link} className="banner__link">
      <h5>{text}</h5>
    </Link>
  </div>
)

export default Banner
