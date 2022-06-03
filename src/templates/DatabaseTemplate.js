import React, { useState, useEffect, useMemo } from "react"
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
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import { SelectColumnFilter } from "../utils/filters"

// hooks
import { useGetStakeholdersQuery } from "../hooks/useGetStakeholders"

const DatabaseTemplate = ({ pageContext: { database } }) => {
  const { title } = database
  // const [data, setData] = useState([])

  // // grab data for table
  // useEffect(() => {
  //   const doFetch = async () => {
  //     const response = await fetch("https://randomuser.me/api/?results=5")
  //     const body = await response.json()
  //     const contacts = body.results
  //     setData(contacts)
  //   }
  //   doFetch()
  // }, [])

  const data = useGetStakeholdersQuery()

  // set up columns
  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: "expander", // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "↓" : "→"}
          </span>
        ),
      },
      {
        Header: "Country",
        accessor: "country",
        disableSortBy: true,
        // Filter: SelectColumnFilter,
        filter: "equals",
      },
      {
        Header: "Region",
        accessor: "region",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Role",
        accessor: "role",
      },
    ],
    []
  )

  // render sub component upon click
  const renderRowSubComponent = row => {
    const { region, country, role, name } = row.original
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <strong>{name} </strong>
          </CardTitle>
          <CardText>
            <strong>Role</strong>: {role} <br />
            <strong>Address:</strong> {`${region} ${country}`}
          </CardText>
        </CardBody>
      </Card>
    )
  }

  return (
    <Layout>
      {/* <Hero title={title} image={image} height="medium" /> */}
      <Section title={title}>
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
