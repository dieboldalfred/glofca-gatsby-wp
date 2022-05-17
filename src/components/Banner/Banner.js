import React from "react"
import { Parallax } from "react-parallax"
import italy from "../../assets/images/italy.jpg"

// styles
import "./banner.css"

const Banner = () => (
  <Parallax className="banner-image" bgImage={italy} strength={300}>
    <div className="banner-content">
      <span className="banner-caption">A Trip to Space</span>
    </div>
  </Parallax>
)

export default Banner
