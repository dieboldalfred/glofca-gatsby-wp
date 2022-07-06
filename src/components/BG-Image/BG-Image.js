import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
// import BackgroundImage from "gatsby-background-image"
import { BgImage } from "gbimage-bridge"

import "./bg-image.css"

const GbiBridged = () => {
  const { backgroundImage } = useStaticQuery(graphql`
    {
      backgroundImage: file(relativePath: { eq: "italy.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            quality: 50
            webpOptions: { quality: 70 }
          )
        }
      }
    }
  `)

  // const image = getImage(italy)

  // const bgImage = convertToBgImage(image)

  const pluginImage = getImage(backgroundImage)

  return (
    <BgImage image={pluginImage} className="bgimage">
      <h1 className="bgimage--text">TEST</h1>
    </BgImage>
  )
}

export default GbiBridged
