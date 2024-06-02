import { currentUserQuery } from 'shared/services/userApi'
import { create } from 'zustand'

interface LoginSate {
  isLoggedIn: boolean
  logIn: () => void
  logOut: () => void
  checkToken: (token: string) => void
}

export const useLogin = create<LoginSate>(set => ({
  isLoggedIn: false,
  logIn: () => {
    return set({ isLoggedIn: true })
  },
  logOut: () => {
    localStorage.removeItem('token')
    return set({ isLoggedIn: false })
  },
  checkToken: async (token: string) => {
    const status = (await currentUserQuery(token)).status
    return set({ isLoggedIn: status === 200 })
  },
}))
