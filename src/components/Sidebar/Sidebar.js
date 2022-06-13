import React from "react"
import socialLinks from "../../data/social-links"
import { IoMdClose } from "react-icons/io"
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

  const menuItems = data.wpMenu.menuItems.nodes.filter(item => !item.parentId)
  const menuIds = menuItems.map(item => {
    return item.id
  })

  const initialObj = menuIds.reduce((acc, id) => {
    acc[id] = false

    return acc
  }, {})

  const [menuItemIsClicked, setMenuItemIsClicked] = React.useState(initialObj)

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
            const itemHasChildren = Boolean(item.childItems.nodes.length) // length = number == vs === true boolean

            const subMenuItems = childItems.nodes
            // withChildren => function()
            return (
              <li key={id}>
                {itemHasChildren ? (
                  <React.Fragment>
                    <span
                      activeClassName="active"
                      onClick={() => onMenuItemClick(id)}
                    >
                      {label}
                    </span>
                    {/* {subMenuItems} */}
                    <div className="sidebar-links--sub-menu">
                      {menuItemIsClicked[id]
                        ? subMenuItems.map(subMenuItem => {
                            const { id, path, label } = subMenuItem
                            return (
                              <Link
                                className="sidebar-links--sub-menu--link"
                                to={path}
                              >
                                {label}
                              </Link>
                            )
                          })
                        : null}
                    </div>
                  </React.Fragment>
                ) : (
                  <Link to={path} activeClassName="active">
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
