import React, { useState } from "react"
import Navbar from "./Navbar/Navbar"
import Sidebar from "./Sidebar/Sidebar"
import Footer from "./Footer/Footer"

// styles
import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openSidebar = () => {
    setIsOpen(true)
    document.body.classList.add("sidebar-open")
  }

  const closeSidebar = () => {
    document.body.classList.remove("sidebar-open")
    setIsOpen(false)
  }

  // ensure sidebar classes are removed on each new page visited
  React.useEffect(() => {
    closeSidebar()
  }, [])

  return (
    <div className="layout">
      <Navbar openSidebar={openSidebar} />
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
