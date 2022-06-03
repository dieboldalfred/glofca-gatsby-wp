import React from "react"
import { Link } from "gatsby"
import Card from "./Card/Card"

// styles
import "./cards.css"

// components
import { Section, SectionContent } from "../../components"

const Cards = ({ title, items }) => {
  return (
    <Section customClass="cards" title={title}>
      <SectionContent customClass="cards-center">
        {items.map(item => {
          const { id, title, slug, featuredImage } = item
          return (
            <Link key={id} to={`/${slug}`}>
              <Card title={title} image={featuredImage} />
            </Link>
          )
        })}
      </SectionContent>
    </Section>
  )
}
export default Cards
