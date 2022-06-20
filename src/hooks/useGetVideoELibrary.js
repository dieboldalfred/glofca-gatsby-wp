import { useStaticQuery, graphql } from "gatsby"

export const useGetVideoELibraryQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "video e-library" } }
        sort: { fields: id, order: ASC }
      ) {
        nodes {
          data {
            Abstract
            Contributor
            Date
            Keywords
            Length
            Link
            Made_By
            Publisher
            Region
            Title
            Topics
            Logo {
              localFiles {
                childImageSharp {
                  gatsbyImageData(width: 200, placeholder: TRACED_SVG)
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allAirtable.nodes
}
