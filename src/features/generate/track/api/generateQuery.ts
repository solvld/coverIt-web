import { useMutation } from '@tanstack/react-query'
import { generateTrackQuery, regenerateTrackQuery } from './generateApi'
import { queryError } from 'shared/lib/queryError'
import { useNavigate } from 'react-router-dom'

export const useGenerateTrack = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: generateTrackQuery,

    onError(error) {
      queryError(error)
    },
    onSuccess(data) {
      const playlistId = data.id
      setTimeout(() => {
        navigate(`/generate/release/cover/${playlistId}`)
      }, 300)
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
