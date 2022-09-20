import React from "react"
import { Link } from "gatsby"

import { SectionContent } from ".."

// styles
import "./Breadcrumbs.css"

const Breadcrumbs = ({ parent }) => (
  <SectionContent customClass="Breadcrumbs">
    <Link to="/">
      <span>Home</span>
    </Link>
    <span className="Breadcrumbs--divider">/</span>
    {parent ? (
      <>
        <Link to={parent.uri}>
          <span>{parent.title}</span>
        </Link>
        <span className="Breadcrumbs--divider">/</span>
      </>
    ) : null}
  </SectionContent>
)

export default Breadcrumbs
