import React, { useState, Fragment } from "react"
import { IoMdClose } from "react-icons/io"
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"
import { BsCaretDown, BsCaretUp } from "react-icons/bs"
import { Link, useStaticQuery, graphql } from "gatsby"

// styles
import "./sidebar.css"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const data = useStaticQuery(graphql`
    {
      wpMenu(name: { eq: "sideMenu" }) {
        menuItems {
          nodes {
            label
            parentId
            path
            id
            childItems {
              nodes {
                id
                label
                path
              }
            }
          }
        }
      }
    }
  `)

  // menu items without a parent id (top level)
  const menuItems = data.wpMenu.menuItems.nodes.filter(item => !item.parentId)

  // all ids from top level menu items
  const menuIds = menuItems.map(item => {
    return item.id
  })

  // create an object with switches for changing later
  const initialObj = menuIds.reduce((acc, id) => {
    acc[id] = false
    return acc
  }, {})

  // initial state with initialObj
  const [menuItemIsClicked, setMenuItemIsClicked] = useState(initialObj)

  // function to switch switches in state
  const onMenuItemClick = id => {
    // todo
    setMenuItemIsClicked({
      ...menuItemIsClicked,
      [id]: !menuItemIsClicked[id],
    })
  }

  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" onClick={toggleSidebar}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <ul className="sidebar-links">
          {menuItems.map(item => {
            const { id, label, path, childItems } = item
            const itemHasChildren = Boolean(item.childItems.nodes.length)
            const subMenuItems = childItems.nodes
            return (
              <li key={id}>
                {itemHasChildren ? (
                  <Fragment>
                    <div
                      activeClassName="active"
                      className="sidebar-links--link"
                      onClick={() => onMenuItemClick(id)}
                    >
                      {label}
                      {menuItemIsClicked[id] ? <BsCaretUp /> : <BsCaretDown />}
                    </div>
                    {/* {subMenuItems} */}
                    <div className="sidebar-links--sub-menu">
                      {menuItemIsClicked[id]
                        ? subMenuItems.map(subMenuItem => {
                            const { id, path, label } = subMenuItem
                            return (
                              <Link
                                key={id}
                                className="sidebar-links--sub-menu--link"
                                to={path}
                              >
                                {label}
                              </Link>
                            )
                          })
                        : null}
                    </div>
                  </Fragment>
                ) : (
                  <Link
                    to={path}
                    activeClassName="active"
                    className="sidebar-links--link"
                  >
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
        {/* <ul className="social-links sidebar-icons">
          {socialLinks.map(link => {
            return (
              <li key={link.id}>
                <a href={link.url} className="social-link">
                  {link.icon}
                </a>
              </li>
            )
          })}
        </ul> */}
      </div>
    </aside>
  )
}

export default Sidebar
