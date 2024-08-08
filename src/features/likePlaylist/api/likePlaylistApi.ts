import axios from 'axios'

const URL = import.meta.env.VITE_API_URL

const likeInstance = axios.create({
  baseURL: `${URL}/playlist`,
})

interface LikePlaylistQueryInput {
  token: string | null
  playlistId: number
}

export const likePlaylistQuery = async ({
  token,
  playlistId,
}: LikePlaylistQueryInput) => {
  return (
    await likeInstance.patch('/like', null, {
      params: {
        playlist_id: playlistId,
      },
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type': 'application/json',
      },
    })
  ).data
}
export const unlikePlaylistQuery = async ({
  token,
  playlistId,
}: LikePlaylistQueryInput) => {
  return (
    await likeInstance.patch('/unlike', null, {
      params: {
        playlist_id: playlistId,
      },
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type': 'application/json',
      },
    })
  ).data
}
