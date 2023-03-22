export interface ISearch {
  contents: SearchContent[]
  cursorNext: string
  didYouMean: any
  estimatedResults: number
  filterGroups: FilterGroup[]
  refinements: any[]
}

export interface SearchContent {
  type: string
  video?: SearchVideo
  channel?: Channel
}

export interface SearchVideo {
  author: Author
  badges: string[]
  descriptionSnippet?: string
  isLiveNow: boolean
  lengthSeconds?: number
  movingThumbnails?: MovingThumbnail[]
  publishedTimeText?: string
  stats: Stats
  thumbnails: Thumbnail[]
  title: string
  videoId: string
}

export interface Author {
  avatar: Avatar[]
  badges: Badge[]
  canonicalBaseUrl?: string
  channelId: string
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

export interface MovingThumbnail {
  height: number
  url: string
  width: number
}

export interface Stats {
  views?: number
  viewers?: number
}

export interface Thumbnail {
  height: number
  url: string
  width: number
}

export interface Channel {
  avatar: Avatar2[]
  badges: Badge2[]
  canonicalBaseUrl: string
  channelId: string
  descriptionSnippet?: string
  stats: Stats2
  title: string
  username: string
}

export interface Avatar2 {
  height: number
  url: string
  width: number
}

export interface Badge2 {
  text: string
  type: string
}

export interface Stats2 {
  subscribers: number
  subscribersText: string
}

export interface FilterGroup {
  filters: Filter[]
  title: string
}

export interface Filter {
  cursorSelect?: string
  label: string
  selected: boolean
}
