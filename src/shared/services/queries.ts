import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { signInQuery, signUpQuery, verifyEmailQuery } from './authApi'

import { useNavigate } from 'react-router-dom'
import { toastOnError } from 'entities/ToastOnError/ui/toastOnError'
import { currentUserQuery } from './userApi'

export const useSignIn = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: signInQuery,
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
    onSuccess(data) {
      console.log(data.token)
      localStorage.setItem('token', data.token)
      navigate('/profile')
    },
  })
}

export const useSignUp = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: signUpQuery,
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
    onSuccess() {
      navigate('/verify')
    },
  })
}

export const useVerify = (code: string) => {
  return useQuery({
    queryKey: ['secret', code],
    queryFn: () => {
      if (code) {
        return verifyEmailQuery(code)
      }
      return
    },
  })
}

//User queries

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: currentUserQuery,
  })
}
