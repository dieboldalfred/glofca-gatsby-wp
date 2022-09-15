import React from "react"
import Card from "./Card/Card"

// styles
import "./cards.css"

// components
import { Section, SectionContent } from "../../components"

const Cards = ({ title, items, link }) => {
  return (
    <Section title={title}>
      <SectionContent customClass="cards__center">
        {items.map(card => (
          <Card
            key={card.id}
            to={`/${link}/${card.slug}`}
            title={card.title}
            image={card.featuredImage}
          />
        ))}
      </SectionContent>
    </Section>
  )
}
export default Cards
