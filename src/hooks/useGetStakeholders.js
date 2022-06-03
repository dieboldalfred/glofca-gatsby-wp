import { useStaticQuery, graphql } from "gatsby"

export const useGetStakeholdersQuery = () => {
  const data = useStaticQuery(graphql`
    query GetStakeholders {
      allWpStakeholder {
        nodes {
          stakeholders {
            country
            description
            name
            region
            role
            type
          }
        }
      }
    }
  `)

  return data.allWpStakeholder.nodes
}
