import React from "react"
import Card from "./Card/Card"

// styles
import "./cards.css"

// components
import { Section, SectionContent } from "../../components"

const Cards = ({ title, items, link }) => {
  return (
    <Section customClass="cards" title={title}>
      <SectionContent customClass="cards-center">
        {items.map(item => {
          const { id, title, slug, featuredImage } = item
          return (
            <Card
              key={id}
              to={`/${link}/${slug}`}
              title={title}
              image={featuredImage}
            />
          )
        })}
      </SectionContent>
    </Section>
  )
}
export default Cards
