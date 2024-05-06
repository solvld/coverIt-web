import axios from 'axios'
import { TrackBody } from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL
const token = localStorage.getItem('token')

const generateInstance = axios.create({
  baseURL: `${URL}/cover/track`,
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
  cover: {
    link: string
    isLoFi: boolean
  }
  createdAt: string
}

export const generateTrackQuery = async (inputs: TrackBody) => {
  return (
    await generateInstance.post<GenerateTrackResponse>('/generate', inputs, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data
}
