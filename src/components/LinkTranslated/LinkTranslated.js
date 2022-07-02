import React from "react"
import { Link } from "gatsby"

import { getTranslatedURL } from "../../utils/links"

const LinkTranslated = ({ children, to, lang, ...args }) => {
  // pageContext = RU/ENG
  // slug = /projects/glacier-lake-mapping
  // func(lang, slug) =>
  // ENG -> /projects/glacier-lake-mapping
  // RU -> /ru/projects/glacier0lake-mapping

  const translatePath = getTranslatedURL(to, lang)
  return (
    <Link {...args} to={translatePath}>
      {children}
    </Link>
  )
}

export default LinkTranslated
