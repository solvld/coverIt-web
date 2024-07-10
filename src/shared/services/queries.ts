import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query'
import { signInQuery, signUpQuery, verifyEmailQuery } from './authApi'
import { useNavigate } from 'react-router-dom'
import { currentUserQuery } from './userApi'
import { queryError } from 'shared/lib/queryError'
import { useLogin } from 'features/auth/byEmail'
import { getArchivePlaylists } from './archiveApi'

export const useSignIn = () => {
  const navigate = useNavigate()
  const logIn = useLogin(state => state.logIn)

  return useMutation({
    mutationFn: signInQuery,
    onError(error) {
      queryError(error)
    },
    onSuccess(data) {
      localStorage.setItem('token', data.token)
      navigate('/')
      logIn()
    },
  })
}

export const useSignUp = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: signUpQuery,
    onError(error) {
      queryError(error)
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

export const useCurrentUser = (token: string) => {
  return useQuery({
    queryKey: ['currentUser', token],
    queryFn: () => currentUserQuery(token),
  })
}

export const useArchive = (filter: string| null) => {
  return useInfiniteQuery({
    queryKey: ['archive', filter],
    queryFn:({ pageParam }) => getArchivePlaylists({pageParam}, filter),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
  
      const nextPage = lastPage.length !== allPage.length ?  allPage.length : null
      return nextPage
    },
  })
}
