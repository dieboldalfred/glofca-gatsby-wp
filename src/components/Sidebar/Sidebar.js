import React from "react"
import { Link } from "gatsby"
import { IoMdClose } from "react-icons/io"

// styles
import "./sidebar.css"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <ul>
          <li>
            <Link to="/" className="page-link">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
