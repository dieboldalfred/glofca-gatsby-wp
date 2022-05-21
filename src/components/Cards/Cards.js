import React from "react"
import Title from "../Title/Title"
import Card from "./Card/Card"

// styles
import "./cards.css"

const Cards = ({ title, items }) => {
  return (
    <section className="section cards">
      <Title title={title} />

      <div className="section-center cards-center">
        {items.map(item => {
          const { id, title } = item
          return <Card key={id} title={title} />
        })}
      </div>
    </section>
  )
}
export default Cards
