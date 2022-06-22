import React, { useState } from "react"
import Navbar from "./Navbar/Navbar"
import Sidebar from "./Sidebar/Sidebar"
import Footer from "./Footer/Footer"

// styles
import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen)
  // }

  const openSidebar = () => {
    setIsOpen(true)
    document.body.classList.add("sidebar-open")
  }

  const closeSidebar = () => {
    setIsOpen(false)
    document.body.classList.remove("sidebar-open")
  }
  return (
    <>
      <Navbar openSidebar={openSidebar} />
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
      <div className="container-content">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
