import React from "react"

// wrap root element
export const wrapRootElement = ({ element }) => {
  return <React.Fragment>{element}</React.Fragment>
}
