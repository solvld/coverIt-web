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
