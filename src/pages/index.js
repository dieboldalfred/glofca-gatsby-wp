import React from "react"
import { Blogs, Cards, Hero, LogoBanner, Video } from "../components"
import Layout from "../components/Layout"
import subThemes from "../constants/themes"

// hooks
import { useGetThemesQuery } from "../hooks/useGetThemes"
import { useGetDatabasesQuery } from "../hooks/useGetDatabases"
import { useLatestPostsQuery } from "../hooks/useLatestPostsQuery"
import { useGetBannersQuery } from "../hooks/useGetBanners"

const HomePage = () => {
  // Graphql
  const themes = useGetThemesQuery()
  const databases = useGetDatabasesQuery()
  const posts = useLatestPostsQuery()
  const banners = useGetBannersQuery()
  console.log(themes)

  return (
    <Layout>
      <Hero
        title={banners.heroTitle}
        image={banners.image}
        content={banners.heroText}
        align="left"
      />
      <LogoBanner />
      <Video
        title="GLOFCA Project in Action during the First Year – 2021/2022"
        videoURL="https://www.youtube.com/watch?v=avvNRswHDks"
      />
      <Blogs title="Latest News" posts={posts} showLink />
      <Hero
        title={banners.ourMissionTitle}
        image={banners.ourMissionText}
        content={banners.ourMissionText}
      />
      <Cards title="Databases" items={databases} />
      <Hero
        title={banners.ourVisionTitle}
        image={banners.ourVisionText}
        content={banners.ourVisionText}
      />
      <Cards title="Themes" items={themes} />
    </Layout>
  )
}

export default HomePage
