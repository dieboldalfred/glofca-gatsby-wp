import { useStaticQuery, graphql } from "gatsby"

export const useGetDatabasesQuery = () => {
  const data = useStaticQuery(graphql`
    query GetDatabasesQuery {
      glofcaJson {
        databases {
          id
          title
        }
      }
    }
  `)
  return data?.glofcaJson.databases
}
