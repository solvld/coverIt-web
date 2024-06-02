import axios from 'axios'
import {
  SavePlaylistCoverParams,
  SavePlaylistCoverResponse,
} from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL
// const token = localStorage.getItem('token')

const saveInstance = axios.create({
  baseURL: `${URL}/cover/playlist`,
})
interface SavePlaylistCoverParamsQuery extends SavePlaylistCoverParams {
  token: string | null
}
export const savePlaylistCoverQuery = async (
  inputs: SavePlaylistCoverParamsQuery,
) => {
  return (
    await saveInstance.patch<SavePlaylistCoverResponse>('/save', null, {
      params: {
        playlist_id: inputs.playlistId,
        cover_id: inputs.coverId,
        is_private: inputs.isPrivate,
      },
      headers: {
        Authorization: inputs.token ? `Bearer ${inputs.token}` : null,
        'Content-Type': 'application/json',
      },
    })
  ).data
}
