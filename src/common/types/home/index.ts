export interface RelatedContents {
  contents: RelatedContentType[]
  cursorNext: string
}

export interface RelatedContentType {
  type?: string
  video: Video
}

export interface Video {
  author: Author
  isLiveNow: boolean
  lengthSeconds: number
  publishedTimeText: string
  stats: Stats
  thumbnails: Thumbnail[]
  title: string
  videoId: string
}

interface Author {
  avatar: Avatar[]
  badges: Badge[]
  title: string
}

interface Avatar {
  height: number
  url: string
  width: number
}

interface Badge {
  text: string
  type: string
}

interface Stats {
  views: number
}

interface Thumbnail {
  height: number
  url: string
  width: number
}
