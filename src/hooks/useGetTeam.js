import { useStaticQuery, graphql } from "gatsby"

export const useGetTeamQuery = () => {
  const data = useStaticQuery(graphql`
    query GetTeamQuery {
      glofcaJson {
        team {
          id
          name
          position
          company
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  return data?.glofcaJson.team
}
