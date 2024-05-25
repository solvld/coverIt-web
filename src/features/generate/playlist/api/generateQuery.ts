import { useMutation } from '@tanstack/react-query'
import { generatePlaylistQuery, regeneratePlaylistQuery } from './generateApi'
import axios from 'axios'
import { toastOnError } from 'entities/ToastOnError'

export const useGeneratePlaylist = () => {
  return useMutation({
    mutationFn: generatePlaylistQuery,

    onError(error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message)
        if (error.response) {
          toastOnError(error.response?.data.message)
        } else {
          toastOnError('Something went wrong....')
        }
      } else if (error instanceof Error) {
        console.log(error.message)
      }
    },
  })
}
export const useRegeneratePlaylist = () => {
  return useMutation({
    mutationFn: regeneratePlaylistQuery,

    onError(error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message)
        if (error.response) {
          toastOnError(error.response?.data.message)
        } else {
          toastOnError('Something went wrong....')
        }
      } else if (error instanceof Error) {
        console.log(error.message)
      }
    },
  })
}
