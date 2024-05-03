import axios from 'axios'
import {
  LogInInputs,
  LoginSuccessResponse,
  SignUpInputs,
} from 'shared/types/auth'

const URL = import.meta.env.VITE_API_URL

const authInstance = axios.create({
  baseURL: `${URL}/auth`,
})

export const signInQuery = async (userData: LogInInputs) => {
  return (await authInstance.post<LoginSuccessResponse>('/sign-in', userData))
    .data
}

export const signUpQuery = async (userData: SignUpInputs) => {
  return await authInstance.post<void>('/sign-up', userData)
}

export const verifyEmailQuery = async (secret: string) => {
  return await authInstance.get('/verify', {
    params: {
      code: secret,
    },
  })
}
