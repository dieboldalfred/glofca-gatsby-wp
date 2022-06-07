import React, { useMemo } from "react"
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { TableContainer, Section, SectionContent } from "../components"
import Layout from "../components/Layout"
import { SelectColumnFilter } from "../utils/filters"

// hooks
import { useGetStakeholdersQuery } from "../hooks/useGetStakeholders"

const DatabaseTemplate = ({ pageContext: { database } }) => {
  const data = useGetStakeholdersQuery()

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
      Header: "Country",
      accessor: "stakeholders.country",
    },
    {
      Header: "Description",
      accessor: "stakeholders.description",
    },
    {
      Header: "Region",
      accessor: "stakeholders.region",
    },
  ])

  // render sub component upon click
  const renderRowSubComponent = row => {
    const { country, region, description, role } = row.original.stakeholders
    return (
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <CardBody>
          <CardTitle>
            <strong>{country} </strong>
          </CardTitle>
          <CardText>
            <strong>Region</strong>: {region} <br />
          </CardText>
        </CardBody>
      </Card>
    )
  }

  return (
    <Layout>
      {/* <Hero title={title} image={image} height="medium" /> */}
      <Section title="my db">
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

export default DatabaseTemplate
