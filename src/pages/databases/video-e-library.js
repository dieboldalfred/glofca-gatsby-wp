import React, { useMemo } from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

// styles
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

// components
import {
  TableContainer,
  Section,
  SectionContent,
  BreadCrumb,
} from "../../components"
import Layout from "../../components/Layout"

const VideoELibrary = () => {
  // render sub component upon click
  const renderRowSubComponent = row => {
    const { Title, Abstract, Region, Logo } = row.original.data

    console.log(Logo.localFiles[0].childImageSharp.gatsbyImageData)

    {
      /*
          <CardImg
            top
            src={
              Logo.localFiles[0].childImageSharp.gatsbyImageData.images.fallback
                .src
            }
            alt="Card image cap"
          />
          */
    }
    return (
      <Card style={{ margin: "0 auto" }}>
        <CardBody>
          {Logo && (
            <GatsbyImage
              image={getImage(
                Logo.localFiles[0].childImageSharp.gatsbyImageData
              )}
              alt={row.original.data.Title}
            />
          )}
          <CardTitle tag="h3">
            <strong>{row.original.data.Title} </strong> <br />
            <br />
          </CardTitle>
          {Abstract && (
            <CardText>
              <strong>Abstract</strong>: {Abstract} <br />
            </CardText>
          )}
        </CardBody>
      </Card>
    )
  }

  return (
    <Layout>
      <SectionContent>
        <BreadCrumb />
      </SectionContent>
      <Section title="Video E-Library">
        <SectionContent>
          {/* <Container>
            <TableContainer
              columns={columns}
              data={data}
              renderRowSubComponent={renderRowSubComponent}
            />
          </Container> */}
        </SectionContent>
      </Section>
    </Layout>
  )
}
export default VideoELibrary
