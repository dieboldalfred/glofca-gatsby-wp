import React, { useMemo } from "react"
import { useMediaQuery } from "react-responsive"
import { Card, CardText, CardBody, CardTitle } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { TableContainer, Section, SectionContent, Seo } from "../../components"
import Layout from "../../components/Layout"

// hooks
import { useGetVideoELibraryQuery } from "../../hooks/useGetVideoELibrary"

const VideoELibrary = () => {
  const data = useGetVideoELibraryQuery()

  // media breakpoints
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  })
  const isMobile = useMediaQuery({ query: "(max-width: 764px)" })
  const isTablet = useMediaQuery({
    query: "(min-width: 765px) and (max-width: 1224px)",
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
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Length",
        accessor: "length",
      },
      {
        Header: "Producer",
        accessor: "producer",
      },
      {
        Header: "Publisher",
        accessor: "publisher",
      },
      {
        Header: "Keywords",
        accessor: "keywords",
      },
    ],
    []
  )

  // tablet columns
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
        Header: "Length",
        accessor: "length",
      },
      {
        Header: "Producer",
        accessor: "producer",
      },
    ],
    []
  )

  // tablet columns
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
      {
        Header: "Length",
        accessor: "length",
      },
    ],
    []
  )

  // desktop sub component
  const renderRowSubComponent = row => {
    const {
      title,
      region,
      link,
      length,
      keywords,
      date,
      abstract,
      topics,
      contributor,
      producer,
      publisher,
    } = row.original

    return (
      <Card style={{ margin: "0 auto" }}>
        {/* {logo && <CardImg top src={logo} alt="Card image cap" />} */}
        <CardBody>
          <CardTitle tag="h3">
            <strong>{title} </strong> <br />
            <br />
          </CardTitle>
          {abstract && (
            <CardText>
              <strong>Abstract</strong>: {abstract} <br />
            </CardText>
          )}
          {region && (
            <CardText>
              <strong>Region </strong>: {region} <br />
            </CardText>
          )}
          {length && (
            <CardText>
              <strong>Length</strong>: {length} <br />
            </CardText>
          )}
          {date && (
            <CardText>
              <strong>Date</strong>: {date} <br />
            </CardText>
          )}
          {contributor && (
            <CardText>
              <strong>Contributor</strong>: {contributor} <br />
            </CardText>
          )}
          {producer && (
            <CardText>
              <strong>Producer</strong>: {producer} <br />
            </CardText>
          )}
          {publisher && (
            <CardText>
              <strong>Publisher</strong>: {publisher} <br />
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
      <Seo title="Video E-Library" />
      <Section title="Video E-Library">
        <SectionContent>
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
        </SectionContent>
      </Section>
    </Layout>
  )
}
export default VideoELibrary
