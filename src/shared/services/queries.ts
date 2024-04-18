import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { signInQuery } from './authApi'

export const useSignIn = () => {
  return useMutation({
    mutationFn: signInQuery,
    onError(error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message)
        alert(error.response?.data.message)
      } else if (error instanceof Error) {
        console.log(error.message)
      }
    },
  })
}
