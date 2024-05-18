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

export interface PlaylistResponse {
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
  tracks: [
    {
      title: string
      authors: string
    },
  ]
  cover: {
    id: number
    created: string
    link: string
    prompt: string
    isAbstract: boolean
    isLoFi: boolean
  }
  hiFiGenerationsLeft: number
  loFiGenerationsLeft: number
}
