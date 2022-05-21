import React, { useState } from "react"
import subLinks from "../data/links"
import subProjects from "../data/projects"
import subThemes from "../data/themes"

const GatsbyContext = React.createContext()

// Provider = GatsbyContext

// make component to wrap application
const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(subLinks)
  const [projects, setProjects] = useState(subProjects)
  const [themes, setThemes] = useState(subThemes)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        links,
        projects,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

// export context + provider
export { GatsbyContext, GatsbyProvider }
