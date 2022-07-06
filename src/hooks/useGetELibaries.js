import { useStaticQuery, graphql } from "gatsby"

export const useGetELibrariesQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allELibrarySheetsData {
        nodes {
          id
          title
          link
          abstract
          author
          format
          regioncountry
          publishedOn
          publishedBy
          publishedOn
          keywords
          topics
        }
      }
    }
  `)

  return data.allELibrarySheetsData.nodes
}
