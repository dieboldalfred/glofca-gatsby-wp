import { useStaticQuery, graphql } from "gatsby"

export const useGetKazakhstanPartnersQuery = () => {
  const data = useStaticQuery(graphql`
    query GetKazakhstanPartners {
      glofcaJson {
        kazakhstanPartners {
          id
          name
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  return data?.glofcaJson.kazakhstanPartners
}
