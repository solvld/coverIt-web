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
  token: string | null
}
export interface RegenerateTrackBody extends TrackBody {
  releaseId: number
}

export type Vibe =
  | 'DANCING_FLOOR'
  | 'NATURE_DOES_NOT_CARE'
  | 'BREAKING_DOWN'
  | 'CAMPFIRE_CALMNESS'
  | 'TOUGH_AND_STRAIGHT'
  | 'ENDLESS_JOY'
  | null

export interface Author {
  id: number
  username: string
  email: string
  loFiPlaylistGenerations: number
  hiFiPlaylistGenerations: number
}

export interface GeneratePlaylistResponse {
  id: number
  title: string
  url: string
  vibe: Vibe
  isPrivate: boolean
  isSaved: boolean
  author: Author
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

export type PlaylistId = number

export interface RegeneratePlaylistInputs extends Omit<PlaylistInputs, 'link'> {
  playlistId: number
}

export interface RegeneratePlaylistResponse {
  id: number
  covers: PlaylistCover[]
  vibe: Vibe
  author: Author
  hiFiGenerationsLeft: number
  loFiGenerationsLeft: number
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

export interface SavePlaylistCoverParams {
  playlistId: number
  coverId: number
  isPrivate: boolean
}

export type SavePlaylistCoverResponse = Omit<
  GeneratePlaylistResponse,
  'isSaved'
>

export interface GenerateReleaseResponse {
  id: number
  title: string
  author: {
    id: number
    username: string
    email: string
    hiFiReleaseGenerations: number
    loFiReleaseGenerations: number
  }
  covers: TrackCover[]
  createdAt: string
  mood: string[]
  object: string
  surrounding: string
  coverDescription: string[]
}

export interface ReleaseSaveResponse {
  id: number
  title: string
  author: {
    id: number
    username: string
    email: string
    hiFiReleaseGenerations: number
    loFiReleaseGenerations: number
  }
  covers: [
    {
      id: number
      created: string
      link: string
      isLoFi: true
      prompt: string
      isSaved: true
    },
  ]
  saved: true
  savedAt: string
}
export interface SaveReleaseCoverParamsQuery {
  releaseId: number
  coverId: number
  token: string
}

export interface RemainingGeneratesData {
  hiFiLeft: number | null
  hoursLeft: number | null
  loFiLeft: number | null
  minutesLeft: number | null
}

export interface GetReleaseData {
  token: string | null
  releaseId: number
}
