import React, { useState, useEffect } from "react"
import Navbar2 from "./Navbar2/Navbar2"
import Sidebar from "./Sidebar/Sidebar"
import Footer from "./Footer/Footer"

// styles
import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showFloatingMenu, setShowFloatingMenu] = useState(false)

  const openSidebar = () => {
    setIsOpen(true)
    document.body.classList.add("body-has-sidebar-open")
  }

  const closeSidebar = () => {
    document.body.classList.remove("body-has-sidebar-open")
    setIsOpen(false)
  }
  React.useEffect(() => {
    closeSidebar()
  }, [])

  return (
    <div className="layout">
      <Navbar2 openSidebar={openSidebar} />
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
