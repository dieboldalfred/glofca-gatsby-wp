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
import { Hero, TableContainer } from "../components"
import Layout from "../components/Layout"
import { SelectColumnFilter } from "../utils/filters"

const DatabaseTemplate = ({ pageContext: { database } }) => {
  const { title, image } = database
  const [data, setData] = useState([])

  // grab data for table
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("https://randomuser.me/api/?results=5")
      const body = await response.json()
      const contacts = body.results
      setData(contacts)
    }
    doFetch()
  }, [])

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
        Header: "Title",
        accessor: "name.title",
        disableSortBy: true,
        // Filter: SelectColumnFilter,
        filter: "equals",
      },
      {
        Header: "First Name",
        accessor: "name.first",
      },
      {
        Header: "Last Name",
        accessor: "name.last",
        disableFilters: true,
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "City",
        accessor: "location.city",
      },
    ],
    []
  )

  // render sub component upon click
  const renderRowSubComponent = row => {
    const {
      name: { first, last },
      location: { city, street, postcode },
      picture,
      cell,
    } = row.original
    return (
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <CardBody>
          <CardTitle>
            <strong>{`${first} ${last}`} </strong>
          </CardTitle>
          <CardText>
            <strong>Phone</strong>: {cell} <br />
            <strong>Address:</strong>{" "}
            {`${street.name} ${street.number} - ${postcode} - ${city}`}
          </CardText>
        </CardBody>
      </Card>
    )
  }

  return (
    <Layout>
      <Hero title={title} image={image} />
      <Container style={{ marginTop: 100 }}>
        <TableContainer
          columns={columns}
          data={data}
          renderRowSubComponent={renderRowSubComponent}
        />
      </Container>
    </Layout>
  )
}

export default DatabaseTemplate
