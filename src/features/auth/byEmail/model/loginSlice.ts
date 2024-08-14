import { currentUserQuery } from 'shared/services/userApi'
import { create } from 'zustand'

interface LoginSate {
  isLoggedIn: boolean
  logIn: () => void
  logOut: () => void
  checkToken: (token: string) => void
  currentUser: string | null
}

export const useLogin = create<LoginSate>(set => ({
  isLoggedIn: false,
  currentUser: null,
  logIn: () => {
    return set({ isLoggedIn: true })
  },
  logOut: () => {
    localStorage.removeItem('token')
    return set({ isLoggedIn: false, currentUser: null })
  },
  checkToken: async (token: string) => {
    const status = (await currentUserQuery(token)).status
    const username = (await currentUserQuery(token)).data.username
    return set({ isLoggedIn: status === 200, currentUser: username })
  },
}))
