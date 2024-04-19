import axios from 'axios'
import {
  LogInInputs,
  LoginSuccessResponse,
  SignUpInputs,
} from 'shared/types/auth'

const URL = 'http://localhost:8080/auth'

const authInstance = axios.create({
  baseURL: URL,
})

export const signInQuery = async (userData: LogInInputs) => {
  return (await authInstance.post<LoginSuccessResponse>('/sign-in', userData))
    .data
}

// axios.interceptors.response.use(
//   res => {
//     console.log(res.status)
//     return res
//   },
//   err => {
//     if (axios.isAxiosError(err)) {
//       console.log(err.status)
//     }
//   },
// )

export const signUpQuery = async (userData: SignUpInputs) => {
  return await authInstance.post<void>('/sign-up', userData)
}

export const verifyEmailQuery = async (secret: string) => {
  return await axios.get('http://localhost:8080/verify', {
    params: {
      code: secret,
    },
  })
}
