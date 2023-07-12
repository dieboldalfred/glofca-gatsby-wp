import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import classNames from "classnames"

// styles
import "./logo-banner.css"

const LogoBanner = ({ customClass }) => {
  const classes = classNames("logo--banner", {
    [customClass]: Boolean(customClass),
  })

  return (
    <div className={classes}>
      <div className="logo-banner--container">
        <h5 className="logo-banner--container-title">Implemented by</h5>
        <StaticImage
          src="../../assets/images/unesco-large.png"
          className=""
          alt="logo"
          height={63}
          width={323}
          transformOptions={{ fit: "fill" }}
        />
      </div>
      <div className="logo-banner--container">
        <h5 className="logo-banner--container-title">Funded by</h5>
        <StaticImage
          src="../../assets/images/AF_Logo.jpeg"
          className=""
          alt="logo"
          height={60}
        />
      </div>
    </div>
  )
}
export default LogoBanner
