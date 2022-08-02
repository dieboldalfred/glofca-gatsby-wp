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

  const listenToScroll = () => {
    let heightToShowFrom = 350
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heightToShowFrom) {
      !showFloatingMenu && // to limit setting state only the first time
        document.getElementById("navbar2").classList.add("navbar2--fixed")
      setShowFloatingMenu(true)
    } else {
      document.getElementById("navbar2").classList.remove("navbar2--fixed")
      setShowFloatingMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return () => window.removeEventListener("scroll", listenToScroll)
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
