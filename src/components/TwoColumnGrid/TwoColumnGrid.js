import React from "react"
import classNames from "classnames"

// styles
import "./two-column-grid.css"

const TwoColumnGrid = ({ children, customClass, format }) => {
  const classes = classNames(`two-col-grid--${format}`, {
    [customClass]: Boolean(customClass),
  })
  return <section className={classes}>{children}</section>
}
export default TwoColumnGrid
