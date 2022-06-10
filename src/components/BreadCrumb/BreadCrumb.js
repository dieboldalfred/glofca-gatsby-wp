import React from "react"
import { Link } from "gatsby"

// styles
import "./breadcrumb.css"

const BreadCrumb = ({ parent }) => (
  <div className="breadcrumb">
    <Link to="/">
      <span>Home</span>
    </Link>
    <span className="breadcrumb--divider">/</span>
    {parent ? (
      <>
        <Link to={parent.uri}>
          <span dangerouslySetInnerHTML={{ __html: parent.title }} />
        </Link>
        <span className="breadcrumb--divider">/</span>
      </>
    ) : null}
  </div>
)

export default BreadCrumb
