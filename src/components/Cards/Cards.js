import React from "react"
import { Link } from "gatsby"
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
            <Link key={id} to={`/${link}/${slug}`}>
              <Card title={title} image={featuredImage} />
            </Link>
          )
        })}
      </SectionContent>
    </Section>
  )
}
export default Cards

/***
 *
 * child1 = video
 * child2 = brochure + title
 *
 * CTA.js:
 *
 * import { Grid, GridColumn } from 'grid'
 *
 * css => .grid_column + .grid_column { margin-left : 16px}
 *
 * <Grid>
 *  <GridColumn>
 *     <Video></Video>
 *   </GridColumn>
 *    <GridColumn>
        <Brochure></Brochure>
        <Title></Title>
 *   </GridColumn>
 * </Grid>
 *
 *
 * GridColumn.js
 *
 * <div>
 * {children}
 * </div>
 *
 */
