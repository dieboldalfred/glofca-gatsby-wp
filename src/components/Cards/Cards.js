import React from "react"
import { Link } from "gatsby"
import Title from "../Title/Title"
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
          const { id, title, image } = item
          return (
            <Link to={`/databases/${title}`}>
              <Card key={id} title={title} image={image} />
            </Link>
          )
        })}
      </SectionContent>
    </Section>
  )
}
export default Cards
