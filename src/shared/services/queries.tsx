import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { signInQuery, signUpQuery } from './authApi'
import { toast } from 'sonner'
import Danger from 'shared/assets/images/dangerCircle.svg?react'
import { useNavigate } from 'react-router-dom'

export const useSignIn = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: signInQuery,
    onError(error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message)
        toast(error.response?.data.message, {
          duration: 8000,
          icon: <Danger />,
        })
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
        toast(error.response?.data.message, {
          duration: 8000,
          icon: <Danger />,
        })
      } else if (error instanceof Error) {
        console.log(error.message)
      }
    },
    onSuccess() {
      navigate('/verify')
    },
  })
}
