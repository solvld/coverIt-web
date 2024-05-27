import { useMutation } from '@tanstack/react-query'
import { generateTrackQuery, regenerateTrackQuery } from './generateApi'
import { queryError } from 'shared/lib/queryError'

export const useGenerateTrack = () => {
  return useMutation({
    mutationFn: generateTrackQuery,

    onError(error) {
      queryError(error)
    },
  })
}
export const useRegenerateTrack = () => {
  return useMutation({
    mutationFn: regenerateTrackQuery,

    onError(error) {
      queryError(error)
    },
  })
}
