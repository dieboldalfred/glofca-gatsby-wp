import { useStaticQuery, graphql } from "gatsby"

export const useGetStakeholdersQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allStakeholdersSheetsData {
        nodes {
          name
          country
          address
          contacts
          contributedBy
          description
          id
          involvement
          keywords
          link
          region
          role
          type
        }
      }
    }
  `)

  return data.allStakeholdersSheetsData.nodes
}
