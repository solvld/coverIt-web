import { currentUserQuery } from 'shared/services/userApi'
import { create } from 'zustand'

interface LoginSate {
  isLoggedIn: boolean
  logIn: () => void
  logOut: () => void
}
const token = localStorage.getItem('token') || ''

const checkToken = async (token: string) => {
  try {
    const status = (await currentUserQuery(token)).status
    return status === 200
  } catch (error) {
    console.log(error)
    return false
  }
}
const logState = await checkToken(token)
export const useLogin = create<LoginSate>(set => ({
  isLoggedIn: logState,
  logIn: () => {
    return set({ isLoggedIn: true })
  },
  logOut: () => {
    localStorage.removeItem('token')
    return set({ isLoggedIn: false })
  },
}))
