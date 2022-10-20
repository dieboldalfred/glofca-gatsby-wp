import React from "react"
import { graphql, PageProps } from "gatsby"

// components
import { Article, Breadcrumbs, Seo } from "../components"
import Layout from "../components/Layout"

import { PostContentData } from "../types/posts"

type GraphQlResult = {
  wpPost: PostContentData
}

const PostTemplate: React.FC<PageProps<GraphQlResult>> = ({
  data,
  pageContext,
}) => {
  const { title, content, featuredImage } = data.wpPost

  return (
    <Layout>
      <Seo title={pageContext.title} />
      <Breadcrumbs
        parent={{
          uri: pageContext.uri,
          title: pageContext.title,
        }}
      />
      <Article title={title} image={featuredImage} content={content} />
    </Layout>
  )
}

export const query = graphql`
  query GetBlogPage($slugQuery: StringQueryOperatorInput) {
    wpPost(slug: $slugQuery) {
      title
      uri
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
