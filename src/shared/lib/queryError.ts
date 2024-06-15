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

export const playlistErrorHandle = (error: Error) => {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data.message)
    if (error.response) {
      return error.response?.data.message
    } else {
      return 'Playlist not found...'
    }
  } else if (error instanceof Error) {
    return error.message
  }
}

export const regenerateError = (error: Error) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      if (error.response.status === 402) {
        return error.response?.data.message
      }
      toastOnError(error.response?.data.message)
    } else {
      toastOnError('Something went wrong....')
    }
  } else if (error instanceof Error) {
    console.log(error.message)
  }
}
