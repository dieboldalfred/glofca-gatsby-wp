import React from "react"
import { graphql } from "gatsby"

import {
  Posts,
  Banner,
  Cards,
  Hero,
  CTAAreaTwoCol,
  Blurb,
  VideoPlayer,
  Seo,
} from "../components"
import Layout from "../components/Layout"

// hooks
import { useGetHomepageFieldsQuery } from "../hooks/useGetHomepageFields"

const HomePage = ({ data }) => {
  const home = useGetHomepageFieldsQuery()

  return (
    <Layout>
      <Seo title="Home" />
      <Hero
        title={home.heroTitle}
        image={home.heroImage.localFile}
        content={home.heroText}
        subText={home.heroSubtext}
        height="full"
      />
      <Banner
        link="tashkent-conference-2021"
        text="Visit our Tashkent Conference 2021"
      />
      <CTAAreaTwoCol
        leftColumn={<Blurb subHeading={home.cta1Title} />}
        rightColumn={
          <VideoPlayer
            videoURL={home.cta1Media}
            customClass="videoplayer--shadow videoplayer--cta"
          />
        }
      />
      <Posts title="Latest News" posts={data.posts.nodes} showLink />
      <Hero
        title={home.ourMissionTitle}
        content={home.ourMissionText}
        image={home.ourMissionImage.localFile}
      />
      <Cards title="Project" link="project" items={data.projects.nodes} />
      <CTAAreaTwoCol
        leftColumn={
          <Blurb
            subHeading={home.cta2Title}
            buttonOneText={home.cta2Button1Text}
            buttonOneLink={home.cta2Button1Link}
            buttonTwoText={home.cta2Button2Text}
            buttonTwoLink={home.cta2Button2Link}
          />
        }
        rightColumn={
          <VideoPlayer
            videoURL={home.cta2Video}
            customClass="videoplayer--shadow videoplayer--cta"
          />
        }
      />
      <Cards title="Themes" link="themes" items={data.themes.nodes} />
      <Hero
        title={home.ourVisionTitle}
        content={home.ourVisionText}
        image={home.ourVisionImage.localFile}
      />
      <Cards title="Databases" link="databases" items={data.databases.nodes} />
    </Layout>
  )
}

export const query = graphql`
  {
    themes: allWpPage(
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "themes" } } } }
      }
    ) {
      nodes {
        # id
        # title
        # slug
        # featuredImage {
        #   node {
        #     localFile {
        #       childImageSharp {
        #         gatsbyImageData(
        #           placeholder: TRACED_SVG
        #           height: 500
        #           width: 500
        #         )
        #       }
        #     }
        #   }
        # }
        ...CardParts
      }
    }
    databases: allWpPage(
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "databases" } } } }
      }
    ) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  height: 500
                  width: 500
                )
              }
            }
          }
        }
      }
    }
    projects: allWpPage(
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "projects" } } } }
      }
    ) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  height: 500
                  width: 500
                )
              }
            }
          }
        }
      }
    }
    posts: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "news" } } } } }
      limit: 3
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        id
        title
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

export default HomePage
