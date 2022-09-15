import React from "react"
import { Link } from "gatsby"

import { SectionContent } from ".."

// styles
import "./breadcrumb.css"

const BreadCrumb = ({ parent }) => (
  <SectionContent customClass="breadcrumb">
    <Link to="/">
      <span>Home</span>
    </Link>
    <span className="breadcrumb--divider">/</span>
    {parent ? (
      <>
        <Link to={parent.uri}>
          <span>{parent.title}</span>
        </Link>
        <span className="breadcrumb--divider">/</span>
      </>
    ) : null}
  </SectionContent>
)

export default BreadCrumb
