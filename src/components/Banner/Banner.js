import React from "react"
import { Link } from "gatsby"

import { SectionContent } from "../index"

// styles
import "./banner.css"

const Banner = ({ link, text }) => (
  <div className="banner">
    <SectionContent customClass="banner__content">
      <Link to={link} className="banner__link">
        {text}
      </Link>
    </SectionContent>
  </div>
)

export default Banner
