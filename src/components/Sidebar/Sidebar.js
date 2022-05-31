import React from "react"
import links from "../../data/links"
import socialLinks from "../../data/social-links"
import { Link } from "gatsby"
import { IoMdClose } from "react-icons/io"

// styles
import "./sidebar.css"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" onClick={toggleSidebar}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        {/* <ul className={isOpen ? "sidebar-links" : null}> */}
        <ul className="sidebar-links">
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        {/* <ul className={isOpen ? "social-links sidebar-icons" : null}>*/}
        <ul className="social-links sidebar-icons">
          {socialLinks.map(link => {
            return (
              <li key={link.id}>
                <a href={link.url} className="social-link">
                  {link.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
