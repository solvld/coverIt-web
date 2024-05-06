import { useMutation } from '@tanstack/react-query'
import { generateTrackQuery } from './generateApi'
import axios from 'axios'
import { toastOnError } from 'entities/ToastOnError'

export const useGenerateTrack = () => {
  return useMutation({
    mutationFn: generateTrackQuery,

    onError(error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message)
        toastOnError(error.response?.data.message)
      } else if (error instanceof Error) {
        console.log(error.message)
      }
    },
  })
}
