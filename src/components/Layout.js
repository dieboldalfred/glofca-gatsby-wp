import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

// styles
import "../assets/css/main.css"

const Layout = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen)
  // }
  return (
    <>
      <Navbar />
      {/* <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />*/}
      {children}
      <Footer />
    </>
  )
}

export default Layout
