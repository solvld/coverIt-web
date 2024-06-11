import axios from 'axios'
import {
  ReleaseSaveResponse,
  SavePlaylistCoverParams,
  SavePlaylistCoverResponse,
  SaveReleaseCoverParamsQuery,
} from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL

const saveInstance = axios.create({
  baseURL: `${URL}/cover`,
})
interface SavePlaylistCoverParamsQuery extends SavePlaylistCoverParams {
  token: string | null
}
export const savePlaylistCoverQuery = async (
  inputs: SavePlaylistCoverParamsQuery,
) => {
  return (
    await saveInstance.patch<SavePlaylistCoverResponse>(
      '/playlist/save',
      null,
      {
        params: {
          playlist_id: inputs.playlistId,
          cover_id: inputs.coverId,
          is_private: inputs.isPrivate,
        },
        headers: {
          Authorization: inputs.token ? `Bearer ${inputs.token}` : null,
          'Content-Type': 'application/json',
        },
      },
    )
  ).data
}
export const saveReleaseCoverQuery = async (
  inputs: SaveReleaseCoverParamsQuery,
) => {
  return (
    await saveInstance.patch<ReleaseSaveResponse>('/release/save', null, {
      params: {
        release_id: inputs.releaseId,
        cover_id: inputs.coverId,
      },
      headers: {
        Authorization: inputs.token ? `Bearer ${inputs.token}` : null,
        'Content-Type': 'application/json',
      },
    })
  ).data
}
