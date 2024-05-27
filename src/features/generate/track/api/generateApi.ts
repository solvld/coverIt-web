import axios from 'axios'
import { TrackBody } from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL
const token = localStorage.getItem('token')

const generateInstance = axios.create({
  baseURL: `${URL}/cover/release`,
})

interface GenerateTrackResponse {
  id: number
  title: string
  author: {
    id: number
    username: string
    email: string
    hiFiReleaseGenerations: number
    loFiReleaseGenerations: number
  }
  covers: {
    id: number
    created: string
    link: string
    isLoFi: true
    prompt: string
    isSaved: boolean
  }[]
  createdAt: string
}

export const generateTrackQuery = async (inputs: TrackBody) => {
  return (
    await generateInstance.post<GenerateTrackResponse>('/generate', inputs, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data
}

interface RegenerateTrackBody extends TrackBody {
  releaseId: number
}

export const regenerateTrackQuery = async (inputs: RegenerateTrackBody) => {
  const body = {
    title: inputs.title,
    mood: inputs.mood,
    object: inputs.object,
    surrounding: inputs.surrounding,
    isLoFi: inputs.isLoFi,
    coverDescription: inputs.coverDescription,
  }
  return (
    await generateInstance.patch<GenerateTrackResponse>('/regenerate', body, {
      params: { release_id: inputs.releaseId },
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data
}
