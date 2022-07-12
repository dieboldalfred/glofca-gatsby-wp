import React, { useMemo } from "react"
import { useMediaQuery } from "react-responsive"
import { Container, Card, CardText, CardBody, CardTitle } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  TableContainer,
  Section,
  SectionContent,
  BreadCrumb,
} from "../../components"
import Layout from "../../components/Layout"
import { DefaultColumnFilter, SelectColumnFilter } from "../../utils/filters"

// hooks
import { useGetStakeholdersQuery } from "../../hooks/useGetStakeholders"

const Stakeholders = () => {
  const data = useGetStakeholdersQuery()

  // media breakpoints
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 993px) and (max-width: 1224px)",
  })

  // desktop columns
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
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Involvement",
        accessor: "involvement",
      },
      {
        Header: "Region",
        accessor: "region",
      },
      {
        Header: "Country",
        accessor: "country",
        Filter: SelectColumnFilter,
      },
      {
        Header: "Keywords",
        accessor: "keywords",
      },
    ],
    []
  )

  // desktop sub component
  const renderRowSubComponent = row => {
    const {
      name,
      country,
      address,
      contacts,
      contributedBy,
      description,
      id,
      involvement,
      keywords,
      link,
      region,
      role,
      type,
    } = row.original

    return (
      <Card style={{ margin: "0 auto" }}>
        {/* {logo && <CardImg top src={logo} alt="Card image cap" />} */}
        <CardBody>
          <CardTitle tag="h3">
            <strong>{name} </strong> <br />
            <br />
          </CardTitle>
          {description && (
            <CardText>
              <strong>Description</strong>: {description} <br />
            </CardText>
          )}
          {region && country && (
            <CardText>
              <strong>Region / Country</strong>: {region} / {country} <br />
            </CardText>
          )}
          {role && (
            <CardText>
              <strong>Role</strong>: {role} <br />
            </CardText>
          )}
          {involvement && (
            <CardText>
              <strong>Involvement</strong>: {involvement} <br />
            </CardText>
          )}
          {contributedBy && (
            <CardText>
              <strong>Contributor</strong>: {contributedBy} <br />
            </CardText>
          )}
          {address && (
            <CardText>
              <strong>Address</strong>: {address} <br />
            </CardText>
          )}
          {link && (
            <CardText>
              <strong>Link</strong>:{" "}
              <a target="_blank" href={link}>
                {link}
              </a>{" "}
              <br />
            </CardText>
          )}
          {type && (
            <CardText>
              <strong>Type</strong>: {type} <br />
            </CardText>
          )}
          {keywords && (
            <CardText>
              <strong>Keywords</strong>: {keywords} <br />
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
      <Section title="Stakeholders">
        <SectionContent>
          {isDesktopOrLaptop && (
            <TableContainer
              columns={columns}
              data={data}
              renderRowSubComponent={renderRowSubComponent}
            />
          )}
        </SectionContent>
      </Section>
    </Layout>
  )
}
export default Stakeholders
