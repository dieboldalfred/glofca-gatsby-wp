import { ImageDataLike } from "gatsby-plugin-image"

export type PostContentData = {
  title: string
  uri: string
  content: string
  featuredImage: {
    node: {
      localFile: ImageDataLike
    }
  }
}

export type PostCardData = {
  id: string
  slug: string
  excerpt: string
  title: string
  uri: string
  featuredImage: {
    node: {
      localFile: ImageDataLike
    }
  }
}
