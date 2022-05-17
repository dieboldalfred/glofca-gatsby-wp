import React, { useState } from "react"
import sublinks from "../constants/links"

const GatsbyContext = React.createContext()

// Provider = GatsbyContext

// make component to wrap application
const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider
      value={{ isSidebarOpen, links, openSidebar, closeSidebar }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

// export context + provider
export { GatsbyContext, GatsbyProvider }
