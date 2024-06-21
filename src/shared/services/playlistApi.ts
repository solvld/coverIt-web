import axios from 'axios'
import {
  GeneratePlaylistResponse,
  GetPlaylistData,
} from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL

const playlistInstance = axios.create({
  baseURL: `${URL}/playlist`,
})

export const getGeneratedPlaylistQuery = async (data: GetPlaylistData) => {
  return (
    await playlistInstance.get<GeneratePlaylistResponse>('/get', {
      params: {
        id: data.playlistId,
      },
      headers: {
        Authorization: data.token ? `Bearer ${data.token}` : null,
        'Content-Type': 'application/json',
      },
    })
  ).data
}
