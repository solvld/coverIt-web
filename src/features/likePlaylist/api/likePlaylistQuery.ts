import { useMutation } from '@tanstack/react-query'
import { likePlaylistQuery, unlikePlaylistQuery } from './likePlaylistApi'
import { queryError } from 'shared/lib/queryError'

export const useLikePlaylist = () => {
  return useMutation({
    mutationFn: likePlaylistQuery,

    onError(error) {
      queryError(error)
    },
  })
}
export const useUnlikePlaylist = () => {
  return useMutation({
    mutationFn: unlikePlaylistQuery,

    onError(error) {
      queryError(error)
    },
  })
}
