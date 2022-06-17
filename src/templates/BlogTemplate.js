import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useMediaQuery } from "react-responsive"

// components
import { Section, SectionContent, BreadCrumb, Blogs } from "../components"
import Layout from "../components/Layout"

const BlogTemplate = ({ data, pageContext }) => {
  const { title, content, featuredImage, related_posts } = data.wpPost

  const isTabletorMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  })

  return (
    <Layout>
      <SectionContent>
        <BreadCrumb
          parent={{
            uri: pageContext.uri,
            title: pageContext.title,
          }}
        />
      </SectionContent>
      <Section title={title}>
        <SectionContent customClass="blog-featured-image">
          <GatsbyImage
            image={getImage(featuredImage?.node.localFile)}
            alt={title}
          />
        </SectionContent>
        <SectionContent customClass="blog-center">
          <div
            className="blog--content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </SectionContent>
        <SectionContent>
          {isTabletorMobile ? (
            <Blogs
              title="Related Posts"
              posts={related_posts.nodes.slice(0, 2)}
            />
          ) : (
            <Blogs
              title="Related Posts"
              posts={related_posts.nodes.slice(0, 3)}
            />
          )}
        </SectionContent>
      </Section>
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
      related_posts {
        nodes {
          title
          slug
          uri
          excerpt
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
    }
  }
`

export default BlogTemplate
