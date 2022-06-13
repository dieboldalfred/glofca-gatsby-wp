import React from "react"
import classNames from "classnames"

// styles
import "./three-column-grid.css"

const ThreeColumnGrid = ({ children, customClass }) => {
  const classes = classNames("three-col-grid", {
    [customClass]: Boolean(customClass),
  })
  return <section className={classes}>{children}</section>
}
export default ThreeColumnGrid
