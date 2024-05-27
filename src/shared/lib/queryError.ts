import axios from 'axios'
import { toastOnError } from 'entities/ToastOnError'

export const queryError = (error: Error) => {
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
}
