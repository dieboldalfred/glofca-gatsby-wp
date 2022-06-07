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
          {row.isExpanded ? "⬇" : "⮕"}
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
        {/* {logo && <CardImg top src={logo} alt="Card image cap" />} */}
        <CardBody>
          <CardTitle tag="h3">
            <strong>{row.original.title} </strong> <br />
            <br />
          </CardTitle>
          {publisher && (
            <CardText>
              <strong>Publisher</strong>: {publisher} <br />
            </CardText>
          )}
          {publishedIn && (
            <CardText>
              <strong>Published In</strong>: {publishedIn} <br />
            </CardText>
          )}
          {contributor && (
            <CardText>
              <strong>Contributor</strong>: {contributor} <br />
            </CardText>
          )}
          {format && (
            <CardText>
              <strong>Format</strong>: {format} <br />
            </CardText>
          )}
          {link && (
            <CardText>
              <strong>Link</strong>: <Link to={link}>{link}</Link> <br />
            </CardText>
          )}
          {abstract && (
            <CardText>
              <strong>Abstract</strong>: {abstract} <br />
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
