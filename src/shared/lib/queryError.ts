import axios from 'axios'
import { toastOnError } from 'entities/ToastOnError'
import { ErrorStatus, RemainingGeneratesData } from 'shared/types/generate'

export const queryError = (error: Error) => {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data.message)
    if (error.response) {
      if (error.response.status === 402) {
        return
      }
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
        const leftData: RemainingGeneratesData = {
          hiFiLeft: error.response?.data.hiFiLeft,
          hoursLeft: error.response?.data.hoursLeft,
          loFiLeft: error.response?.data.loFiLeft,
          minutesLeft: error.response?.data.minutesLeft,
        }
        return leftData
      }
      toastOnError(error.response?.data.message)
    } else {
      toastOnError('Something went wrong....')
    }
  } else if (error instanceof Error) {
    console.log(error.message)
  }
}

export const errorStatusCheck = (error: Error, status: ErrorStatus) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return error.response.status === Number(status)
    }
  } else if (error instanceof Error) {
    console.log(error.message)
  }
}
