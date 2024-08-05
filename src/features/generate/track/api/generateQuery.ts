import { useMutation } from '@tanstack/react-query'
import { generateTrackQuery, regenerateTrackQuery } from './generateApi'
import { queryError } from 'shared/lib/queryError'
import { useNavigate } from 'react-router-dom'
import { useCurrentCover } from 'widgets/trackCard/model/currentCoverSlice'

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
  const setIndex = useCurrentCover(state => state.setCurrentId)

  return useMutation({
    mutationFn: regenerateTrackQuery,

    onError(error) {
      queryError(error)
    },
    onSuccess(data) {
      setIndex(data.covers.length - 1)
    },
  })
}
export const useEditRelease = () => {
  const setIndex = useCurrentCover(state => state.setCurrentId)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: regenerateTrackQuery,

    onError(error) {
      queryError(error)
    },
    onSuccess(data) {
      const playlistId = data.id
      setIndex(data.covers.length - 1)

      setTimeout(() => {
        navigate(`/generate/release/cover/${playlistId}`)
      }, 300)
    },
  })
}
