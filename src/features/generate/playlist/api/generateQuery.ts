import { useMutation } from '@tanstack/react-query'
import { generatePlaylistQuery } from './generateApi'
import axios from 'axios'
import { toastOnError } from 'entities/ToastOnError'

export const useGeneratePlaylist = () => {
  return useMutation({
    mutationFn: generatePlaylistQuery,

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
