import { useMutation } from '@tanstack/react-query'
import { savePlaylistCoverQuery, saveReleaseCoverQuery } from './saveCoverApi'
import { queryError } from 'shared/lib/queryError'

export const useSavePlaylist = () => {
  return useMutation({
    mutationFn: savePlaylistCoverQuery,

    onError(error) {
      queryError(error)
    },
  })
}

export const useSaveRelease = () => {
  return useMutation({
    mutationFn: saveReleaseCoverQuery,

    onError(error) {
      queryError(error)
    },
  })
}
