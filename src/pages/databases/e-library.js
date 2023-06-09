import React, { useMemo } from "react"
import { useMediaQuery } from "react-responsive"
import { Card, CardText, CardBody, CardTitle } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { TableContainer, Section, SectionContent, Seo } from "../../components"
import Layout from "../../components/Layout"

// utils
import { clearHtml } from "../../utils/typography"

// hooks
import { useGetELibrariesQuery } from "../../hooks/useGetELibaries"

const ELibrary = () => {
  const data = useGetELibrariesQuery()

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })
  const isMobile = useMediaQuery({ query: "(max-width: 764px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 765px) and (max-width: 1224px)",
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
        Header: "Date",
        accessor: "publishedOn",
      },
      {
        Header: "Keywords",
        accessor: "keywords",
      },
      {
        Header: "Topics",
        accessor: "topics",
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
        Header: "Date",
        accessor: "publishedOn",
      },
      {
        Header: "Keywords",
        accessor: "keywords",
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

  // desktop sub component
  const renderRowSubComponent = row => {
    const {
      title,
      abstract,
      author,
      format,
      link,
      regioncountry,
      contributedBy,
      publishedOn,
      publishedBy,
      keywords,
      topics,
    } = row.original

    return (
      <Card style={{ margin: "0 auto" }}>
        {/* {logo && <CardImg top src={logo} alt="Card image cap" />} */}
        <CardBody style={{ backgroundColor: "#F6F6F6" }}>
          <CardTitle tag="h3">
            <strong>{title} </strong> <br />
            <br />
          </CardTitle>
          {author && (
            <CardText>
              <strong>Author</strong>: {author} <br />
            </CardText>
          )}
          {regioncountry && (
            <CardText>
              <strong>Region / Country</strong>: {regioncountry} <br />
            </CardText>
          )}
          {publishedBy && (
            <CardText>
              <strong>Publisher</strong>: {publishedBy} <br />
            </CardText>
          )}
          {publishedOn && (
            <CardText>
              <strong>Published In</strong>: {publishedOn} <br />
            </CardText>
          )}
          {contributedBy && (
            <CardText>
              <strong>Contributor</strong>: {contributedBy} <br />
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
              <a target="_blank" rel="noreferrer" href={link}>
                Click Here
              </a>
              <br />
            </CardText>
          )}
          {abstract && (
            <CardText>
              <strong>Abstract</strong>: {clearHtml(abstract)} <br />
            </CardText>
          )}
          {keywords && (
            <CardText>
              <strong>Keywords</strong>: {keywords} <br />
            </CardText>
          )}
          {topics && (
            <CardText>
              <strong>Topics</strong>: {topics} <br />
            </CardText>
          )}
        </CardBody>
      </Card>
    )
  }

  return (
    <Layout>
      <Seo title="E-Library" />
      <Section title="E-Library">
        <SectionContent>
          {/* <Container> */}
          {isMobile && (
            <TableContainer
              columns={columnsMobile}
              data={data}
              renderRowSubComponent={renderRowSubComponent}
            />
          )}
          {isTablet && (
            <TableContainer
              columns={columnsTablet}
              data={data}
              renderRowSubComponent={renderRowSubComponent}
            />
          )}
          {isDesktopOrLaptop && (
            <TableContainer
              columns={columns}
              data={data}
              renderRowSubComponent={renderRowSubComponent}
            />
          )}
          {/* </Container> */}
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default ELibrary
