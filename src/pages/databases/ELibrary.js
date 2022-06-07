import React, { useMemo } from "react"
import { graphql, Link } from "gatsby"
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { TableContainer, Section, SectionContent } from "../../components"
import Layout from "../../components/Layout"
import { SelectColumnFilter } from "../../utils/filters"

// hooks
import { useGetELibrariesQuery } from "../../hooks/useGetELibaries"

const ELibrary = () => {
  const data = useGetELibrariesQuery()
  console.log(data)

  const columns = useMemo(() => [
    {
      Header: () => null,
      id: "expander", // 'id' is required
      Cell: ({ row }) => (
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? "👇" : "👉"}
        </span>
      ),
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Author(s)",
      accessor: "elibraryFields.author",
    },
    {
      Header: "Region",
      accessor: "elibraryFields.region",
    },
  ])

  // render sub component upon click
  const renderRowSubComponent = row => {
    const {
      format,
      abstract,
      contributor,
      link,
      logo,
      publishedIn,
      publisher,
    } = row.original.elibraryFields
    return (
      // <Card style={{ width: "18rem", margin: "0 auto" }}>
      <Card style={{ margin: "0 auto" }}>
        <CardBody>
          <CardTitle>
            <strong>{row.original.title} </strong>
          </CardTitle>
          <CardText>
            <strong>Publisher</strong>: {publisher} <br />
            <strong>Published In</strong>: {publishedIn} <br />
            <strong>Contributor</strong>: {contributor} <br />
            <strong>Format</strong>: {format} <br />
            <strong>Link</strong>: <Link to={link}>{link}</Link> <br />
            <strong>Abstract</strong>: {abstract} <br />
          </CardText>
          {link && (
            <CardText>
              <strong>Link</strong>: <Link to={link}>{link}</Link> <br />
            </CardText>
          )}
        </CardBody>
      </Card>
    )
  }

  return (
    <Layout>
      {/* <Hero title={title} image={image} height="medium" /> */}
      <Section title="E-Library">
        <SectionContent>
          <Container>
            <TableContainer
              columns={columns}
              data={data}
              renderRowSubComponent={renderRowSubComponent}
            />
          </Container>
        </SectionContent>
      </Section>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allWpELibrary {
//       nodes {
//         title
//         elibraryFields {
//           abstract
//           author
//           contributor
//           format
//           link
//           publishedIn
//           publisher
//           region
//           logo {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(placeholder: TRACED_SVG)
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default ELibrary
