import axios from 'axios'
import { GeneratePlaylistResponse } from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL
const token = localStorage.getItem('token')

const playlistInstance = axios.create({
  baseURL: `${URL}/playlist`,
})

export const getGeneratedPlaylistQuery = async (playlistId: number) => {
  return (
    await playlistInstance.get<GeneratePlaylistResponse>('/get', {
      params: {
        id: playlistId,
      },
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type': 'application/json',
      },
    })
  ).data
}
