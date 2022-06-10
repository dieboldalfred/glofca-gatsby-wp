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
            size="logo--image-size-large"
          />
        </div>
        <div className="footer--col">
          <FooterMenu menuName="Knowledge" list={data.databases} />
        </div>
        <div className="footer--col">
          <FooterMenu menuName="Project" list={data.projects} />
        </div>
        <div className="footer--col">
          <FooterMenu menuName="Themes" list={data.themes} />
        </div>
      </SectionContent>
      <LogoBanner />
      <SectionContent>
        <div>
          &copy; {new Date().getFullYear()} GLOFCA. All rights reserved.
        </div>
      </SectionContent>
    </footer>
  )
}

export default Footer
