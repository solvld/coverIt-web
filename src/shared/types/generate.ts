export interface TrackInputs {
  title: string
  mood: string
  object: string
  surrounding: string
  coverDescription: string
  isLoFi: string
}

export interface TrackBody {
  title: string
  mood: string[]
  object: string
  surrounding: string
  coverDescription: string[]
  isLoFi: boolean
}

export type Vibe =
  | 'DANCING_FLOOR'
  | 'NATURE_DOES_NOT_CARE'
  | 'BREAKING_DOWN'
  | 'CAMPFIRE_CALMNESS'
  | 'TOUGH_AND_STRAIGHT'
  | 'ENDLESS_JOY'
  | null

export interface GeneratePlaylistResponse {
  id: number
  title: string
  url: string
  vibe: Vibe
  isPrivate: boolean
  isSaved: boolean
  author: {
    id: number
    username: string
    email: string
    loFiPlaylistGenerations: number
    hiFiPlaylistGenerations: number
  }
  tracks: {
    title: string
    authors: string
  }[]

  covers: PlaylistCover[]
  hiFiGenerationsLeft: number
  loFiGenerationsLeft: number
}

export interface PlaylistInputs {
  link: string
  vibe: { value: string | null; label: string }
  isAbstract: string | boolean
  isLoFi: string | boolean
}

export type Covers = (TrackCover | PlaylistCover)[]

export interface TrackCover {
  id: number
  created: string
  link: string
  isLoFi: boolean
  prompt: string
  isSaved: boolean
}
export interface PlaylistCover {
  id: number
  created: string
  link: string
  prompt: string
  isAbstract: boolean
  isLoFi: boolean
  isSaved: boolean
  vibe: Vibe
}
