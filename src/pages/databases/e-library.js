import React, { useMemo } from "react"
import { useMediaQuery } from "react-responsive"
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
  BreadCrumb,
} from "../../components"
import Layout from "../../components/Layout"
import { DefaultColumnFilter, SelectColumnFilter } from "../../utils/filters"

// utils
import { clearHtml } from "../../utils/typography"

// hooks
import { useGetELibrariesQuery } from "../../hooks/useGetELibaries"

const ELibrary = () => {
  const data = useGetELibrariesQuery()

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 993px) and (max-width: 1224px)",
  })

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
        Header: "Author(s)",
        accessor: "elibraryFields.author",
      },
      {
        Header: "Region",
        accessor: "elibraryFields.region",
      },
      {
        Header: "Keywords",
        accessor: values => values?.keywords?.nodes.map(k => k.name).join(", "),
        // Filter: SelectColumnFilter,
        // filter: equals,
      },
    ],
    []
  )

  const columnsTablet = useMemo(
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
        Header: "Author(s)",
        accessor: "elibraryFields.author",
      },
      {
        Header: "Region",
        accessor: "elibraryFields.region",
      },
    ],
    []
  )

  const columnsMobile = useMemo(
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
    ],
    []
  )

  // render sub component upon click
  const renderMobileRowSubComponent = row => {
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
              <strong>Link</strong>:{" "}
              <a target="_blank" href={link}>
                Click Here
              </a>{" "}
              <br />
            </CardText>
          )}
          {abstract && (
            <CardText>
              <strong>Abstract</strong>: {clearHtml(abstract)} <br />
            </CardText>
          )}
          {row.original.keywords.nodes.length > 0 && (
            <CardText>
              <strong>Keywords</strong>:&nbsp;
              {row.original.keywords.nodes
                .map(keyword => keyword.name)
                .join(", ")}
              <br />
            </CardText>
          )}
          {row.original.topics.nodes.length > 0 && (
            <CardText>
              <strong>Topics</strong>:&nbsp;
              {row.original.topics.nodes.map(topic => topic.name).join(", ")}
              <br />
            </CardText>
          )}
        </CardBody>
      </Card>
    )
  }

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
              <strong>Link</strong>:{" "}
              <a target="_blank" href={link}>
                {link}
              </a>{" "}
              <br />
            </CardText>
          )}
          {abstract && (
            <CardText>
              <strong>Abstract</strong>: {clearHtml(abstract)} <br />
            </CardText>
          )}
          {row.original.keywords.nodes.length > 0 && (
            <CardText>
              <strong>Keywords</strong>:&nbsp;
              {row.original.keywords.nodes
                .map(keyword => keyword.name)
                .join(", ")}
              <br />
            </CardText>
          )}
          {row.original.topics.nodes.length > 0 && (
            <CardText>
              <strong>Topics</strong>:&nbsp;
              {row.original.topics.nodes.map(topic => topic.name).join(", ")}
              <br />
            </CardText>
          )}
        </CardBody>
      </Card>
    )
  }

  return (
    <Layout>
      {/* <SectionContent>
        <BreadCrumb />
      </SectionContent> */}
      <Section title="E-Library">
        <SectionContent>
          <Container>
            {isMobile && (
              <TableContainer
                columns={columnsMobile}
                data={data}
                renderRowSubComponent={renderMobileRowSubComponent}
              />
            )}
            {isTablet && (
              <TableContainer
                columns={columnsTablet}
                data={data}
                renderRowSubComponent={renderMobileRowSubComponent}
              />
            )}
            {isDesktopOrLaptop && (
              <TableContainer
                columns={columns}
                data={data}
                renderRowSubComponent={renderRowSubComponent}
              />
            )}
          </Container>
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default ELibrary
