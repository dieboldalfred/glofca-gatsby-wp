import { useStaticQuery, graphql } from "gatsby"

export const useGetEducationQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allWpEducation {
        nodes {
          title
          educationFields {
            contributedBy
            educationCountry
            educationDeadline
            educationDescription
            educationInstitution
            educationLink
            educationSector
            educationType
            educationLogo {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: TRACED_SVG
                    width: 100
                    height: 100
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allWpEducation.nodes
}
