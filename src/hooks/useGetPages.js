// import { useStaticQuery, graphql } from "gatsby"

// export const useGetPagesQuery = name => {
//   const data = useStaticQuery(graphql`
//     query GetPages {
//       wpCategory(name: { eq: "${name}" }) {
//         pages {
//           nodes {
//             id
//             slug
//             title
//             featuredImage {
//               node {
//                 localFile {
//                   childImageSharp {
//                     gatsbyImageData(placeholder: BLURRED)
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   return data?.wpCategory.pages.nodes
// }
