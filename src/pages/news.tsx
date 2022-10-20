import React from "react"
import { graphql, PageProps } from "gatsby"
import { Posts, Seo } from "../components"
import Layout from "../components/Layout"
import { PostCardData } from "../types/posts"

type GraphQlResult = {
  allWpPost: {
    nodes: PostCardData
  }
}

const News: React.FC<PageProps<GraphQlResult>> = ({ data }) => (
  <Layout>
    <Seo title="News" />
    <Posts title="News" posts={data.allWpPost.nodes} />
  </Layout>
)

export const query = graphql`
  {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "news" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        id
        slug
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  width: 600
                  height: 600
                )
              }
            }
          }
        }
      }
    }
  }
`

export default News
