import React from "react"
import classNames from "classnames"

// styles
import "./grid-column.css"

const GridColumn = ({ children, customClass }) => {
  const classes = classNames("grid-column", {
    [customClass]: Boolean(customClass),
  })
  return <section className={classes}>{children}</section>
}
export default GridColumn
