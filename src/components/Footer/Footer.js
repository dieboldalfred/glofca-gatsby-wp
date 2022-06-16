import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// styles
import "./footer.css"

// comps
import { Logo, SectionContent, LogoBanner } from "../index"
import FooterMenu from "./Footer-Menu/FooterMenu"

const links = ["item1", "item2", "item3"]

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      projects: wpMenu(name: { eq: "Projects" }) {
        name
        menuItems {
          nodes {
            label
            path
            target
            id
          }
        }
      }
      themes: wpMenu(name: { eq: "Themes" }) {
        name
        menuItems {
          nodes {
            label
            path
            target
            id
          }
        }
      }
      databases: wpMenu(name: { eq: "Databases" }) {
        name
        menuItems {
          nodes {
            label
            path
            target
            id
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <SectionContent customClass="footer--menu">
        <div className="footer--col">
          <Logo
            text="Glacier Lake Outburst Floods in Central Asia"
            customClass="footer--logo"
            size="large"
          />
        </div>
        <div className="footer--col">
          <FooterMenu menuName={data.databases.name} list={data.databases} />
        </div>
        <div className="footer--col">
          <FooterMenu menuName={data.projects.name} list={data.projects} />
        </div>
        <div className="footer--col">
          <FooterMenu menuName={data.themes.name} list={data.themes} />
        </div>
      </SectionContent>
      <LogoBanner />
      <div className="footer--bottom-row">
        <SectionContent customClass="footer--bottom-row-container">
          <Logo customClass="footer--logo" />
          &copy; {new Date().getFullYear()} GLOFCA. All rights reserved.
        </SectionContent>
      </div>
    </footer>
  )
}

export default Footer
