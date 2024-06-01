import { useMutation } from '@tanstack/react-query'
import { generatePlaylistQuery, regeneratePlaylistQuery } from './generateApi'
import { queryError } from 'shared/lib/queryError'
import { useNavigate } from 'react-router-dom'

export const useGeneratePlaylist = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: generatePlaylistQuery,

    onSuccess(data) {
      const playlistId = data.id
      setTimeout(() => {
        navigate(`/generate/playlist/cover/${playlistId}`)
      }, 300)
    },

    onError(error) {
      queryError(error)
    },
  })
}
export const useRegeneratePlaylist = () => {
  return useMutation({
    mutationFn: regeneratePlaylistQuery,

    onError(error) {
      queryError(error)
    },
  })
}
