import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// comps
import { SectionContent } from "../index"

// styles
import "./logo-banner.css"

const LogoBanner = () => {
  return (
    <SectionContent customClass="logo-banner">
      <div className="logo-banner--container">
        <h5>Implemented by</h5>
        <StaticImage
          src="../../assets/images/unesco-large.png"
          className=""
          alt="logo"
          height="63"
          width="323"
          transformOptions={{ fit: "fill" }}
        />
      </div>
      <div className="logo-banner--container">
        <h5>Funded by</h5>
        <StaticImage
          src="../../assets/images/AF-Logo.jpeg"
          className=""
          alt="logo"
          height="60"
        />
      </div>
    </SectionContent>
  )
}
export default LogoBanner
