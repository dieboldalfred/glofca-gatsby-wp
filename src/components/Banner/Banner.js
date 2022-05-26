import React from "react"
import { Parallax } from "react-parallax"
import italy from "../../assets/images/italy.jpg"

// styles
import "./banner.css"

const Banner = ({ title, blurb, image }) => (
  <Parallax className="banner-image" bgImage={italy} strength={300}>
    <div className="banner-content">
      <div className="banner-caption">{title}</div>
      {blurb && <div className="blurb-caption">{blurb}</div>}
    </div>
  </Parallax>
)

export default Banner
