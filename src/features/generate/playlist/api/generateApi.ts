import axios from 'axios'
import {
  GeneratePlaylistResponse,
  PlaylistInputs,
  RegeneratePlaylistInputs,
  RegeneratePlaylistResponse,
} from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL
const token = localStorage.getItem('token')

const generateInstance = axios.create({
  baseURL: `${URL}/cover/playlist`,
})

export const generatePlaylistQuery = async (inputs: PlaylistInputs) => {
  return (
    await generateInstance.post<GeneratePlaylistResponse>(
      '/generate',
      {
        link: inputs.link,
      },
      {
        params: { vibe: inputs.vibe.value, is_abstract: true, is_lofi: true },
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
          'Content-Type': 'application/json',
        },
      },
    )
  ).data
}

export const regeneratePlaylistQuery = async (
  inputs: RegeneratePlaylistInputs,
) => {
  return (
    await generateInstance.patch<RegeneratePlaylistResponse>(
      '/regenerate',
      null,
      {
        params: {
          playlist_id: inputs.playlistId,
          vibe: inputs.vibe.value,
          is_abstract: true,
          is_lofi: true,
        },
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
          'Content-Type': 'application/json',
        },
      },
    )
  ).data
}
