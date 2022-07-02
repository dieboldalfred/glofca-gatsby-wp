import React from "react"

import Card from "./Card/Card"
import LinkTranslated from "../LinkTranslated/LinkTranslated"

// styles
import "./cards.css"

// components
import { Section, SectionContent } from "../../components"

const Cards = ({ title, items, prefix, lang }) => {
  return (
    <Section customClass="cards" title={title}>
      <SectionContent customClass="cards-center">
        {items.map(item => {
          const { id, title, slug, featuredImage } = item
          return (
            <LinkTranslated key={id} to={`/${prefix}/${slug}`} lang={lang}>
              <Card title={title} image={featuredImage} />
            </LinkTranslated>
          )
        })}
      </SectionContent>
    </Section>
  )
}
export default Cards
