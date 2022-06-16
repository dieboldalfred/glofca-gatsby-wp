import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// components
import { Section, SectionContent, BreadCrumb } from "../components"
import Blog from "../components/Blogs/Blog/Blog"
import Layout from "../components/Layout"

const BlogTemplate = ({ data, pageContext }) => {
  console.log(data)
  const { title, content, featuredImage, related_posts } = data.wpPost

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
          <aside className="">
            <h3>Related Posts:</h3>
            <ul>
              {related_posts?.nodes?.map(post => {
                const { slug, uri, title, excerpt, featuredImage } = post
                return (
                  <li key={slug}>
                    {title}
                    {/* <Link to={uri} rel="bookmark">
                      {title}
                      <Blog
                        title={title}
                        // content={content}
                        image={featuredImage}
                        excerpt={excerpt}
                      />
                    </Link> */}
                  </li>
                )
              })}
            </ul>
          </aside>
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
    }
  }
`

export default BlogTemplate

// related_posts {
//         nodes {
//           title
//           slug
//           uri
//           excerpt
//           featuredImage {
//             node {
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData(placeholder: TRACED_SVG)
//                 }
//               }
//             }
//           }
//         }
//       }
