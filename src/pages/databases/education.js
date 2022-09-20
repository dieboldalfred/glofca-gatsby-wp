import React, { useMemo } from "react"
import { useMediaQuery } from "react-responsive"
import { graphql } from "gatsby"
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  TableContainer,
  Section,
  SectionContent,
  Breadcrumbs,
} from "../../components"
import Layout from "../../components/Layout"

// hooks
// import { useGetEducationQuery } from "../../hooks/useGetEducation"

const Education = () => {
  // const data = useGetEducationQuery()

  const columns = useMemo(
    () => [
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
        Header: "Sector",
        accessor: "educationFields.educationSector",
      },
      {
        Header: "Country",
        accessor: "educationFields.educationCountry",
      },
    ],
    []
  )

  return (
    <Layout>
      <Section title="Education">
        <SectionContent>
          {/* <Container>
            <TableContainer columns={columns} data={data} />
          </Container> */}
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default Education
