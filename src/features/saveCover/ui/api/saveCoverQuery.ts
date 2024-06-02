import { useMutation } from '@tanstack/react-query'
import { savePlaylistCoverQuery } from './saveCoverApi'
import { queryError } from 'shared/lib/queryError'

export const useSavePlaylist = () => {
  return useMutation({
    mutationFn: savePlaylistCoverQuery,

    onError(error) {
      queryError(error)
    },
  })
}
