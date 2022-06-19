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
  BreadCrumb,
} from "../../components"
import Layout from "../../components/Layout"

// hooks
import { useGetEducationQuery } from "../../hooks/useGetEducation"

const Education = () => {
  const data = useGetEducationQuery()

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
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
        Header: "Sector",
        accessor: "educationFields.educationSector",
      },
      {
        Header: "Country",
        accessor: "educationFields.educationCountry",
      },
      // {
      //   Header: "Keywords",
      //   accessor: values => values?.keywords?.nodes.map(k => k.name).join(", "),
      //   // Filter: SelectColumnFilter,
      //   // filter: equals,
      // },
    ],
    []
  )

  return (
    <Layout>
      <Section title="Education">
        <SectionContent>
          <Container>
            {isDesktopOrLaptop && (
              <TableContainer columns={columns} data={data} />
            )}
          </Container>
        </SectionContent>
      </Section>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allWpEducation {
//       nodes {
//         title
//         educationFields {
//           contributedBy
//           educationCountry
//           educationDeadline
//           educationDescription
//           educationInstitution
//           educationLink
//           educationSector
//           educationType
//           educationLogo {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(
//                   placeholder: TRACED_SVG
//                   width: 100
//                   height: 100
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default Education
