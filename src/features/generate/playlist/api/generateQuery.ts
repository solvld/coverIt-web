import { useMutation } from '@tanstack/react-query'
import { generatePlaylistQuery, regeneratePlaylistQuery } from './generateApi'
import { queryError } from 'shared/lib/queryError'

export const useGeneratePlaylist = () => {
  return useMutation({
    mutationFn: generatePlaylistQuery,

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
