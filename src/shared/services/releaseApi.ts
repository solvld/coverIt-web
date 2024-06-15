import axios from 'axios'
import { GenerateReleaseResponse } from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL
const token = localStorage.getItem('token')

const playlistInstance = axios.create({
  baseURL: `${URL}/release`,
})

export const getGeneratedReleaseQuery = async (releaseId: number) => {
  return (
    await playlistInstance.get<GenerateReleaseResponse>('/get', {
      params: {
        id: releaseId,
      },
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type': 'application/json',
      },
    })
  ).data
}
