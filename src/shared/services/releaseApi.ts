import axios from 'axios'
import { GeneratePlaylistResponse } from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL
const token = localStorage.getItem('token')

const playlistInstance = axios.create({
  baseURL: `${URL}/release`,
})

export const getGeneratedReleaseQuery = async (releaseId: number) => {
  return (
    await playlistInstance.get<GeneratePlaylistResponse>('/get', {
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
