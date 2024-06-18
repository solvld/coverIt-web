import axios from 'axios'
import { GenerateReleaseResponse, TrackBody } from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL

const generateInstance = axios.create({
  baseURL: `${URL}/cover/release`,
})

export const generateTrackQuery = async (inputs: TrackBody) => {
  return (
    await generateInstance.post<GenerateReleaseResponse>('/generate', inputs, {
      headers: { Authorization: `Bearer ${inputs.token}` },
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
    await generateInstance.patch<GenerateReleaseResponse>('/regenerate', body, {
      params: { release_id: inputs.releaseId },
      headers: { Authorization: `Bearer ${inputs.token}` },
    })
  ).data
}
