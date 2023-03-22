export interface VideoContent {
  contents: ContentVideo[]
  cursorNext: string
}

export interface ContentVideo {
  type: string
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

export interface Author {
  avatar: Avatar[]
  badges: Badge[]
  title: string
}

export interface Avatar {
  height: number
  url: string
  width: number
}

export interface Badge {
  text: string
  type: string
}

export interface Stats {
  views: number;
  likes: number;
}

export interface Thumbnail {
  height: number
  url: string
  width: number
}
