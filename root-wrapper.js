import React from "react"
// provider
import { GatsbyProvider } from "./src/context/context"

// wrap root element
export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      <GatsbyProvider>{element}</GatsbyProvider>
    </React.Fragment>
  )
}
