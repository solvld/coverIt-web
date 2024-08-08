import axios from 'axios'
import { ArchivePlaylistResponse } from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL

const archiveInstance = axios.create({
  baseURL: `${URL}/playlist`,
})

interface ArchivePlaylistsInputs {
  pageParam: number
  token: string | null
}

export const getArchivePlaylists = async (
  { pageParam, token }: ArchivePlaylistsInputs,
  filter: string | null,
): Promise<ArchivePlaylistResponse[]> => {
  return (
    await archiveInstance.get('/archive', {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type': 'application/json',
      },
      params: {
        page: pageParam,
        size: 4,
        filter: filter,
      },
    })
  ).data
}

export const getLikedPlaylists = async (
  { pageParam, token }: ArchivePlaylistsInputs,
  filter: string | null,
): Promise<ArchivePlaylistResponse[]> => {
  return (
    await archiveInstance.get('/liked', {
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type': 'application/json',
      },
      params: {
        page: pageParam,
        size: 4,
        filter: filter,
      },
    })
  ).data
}
