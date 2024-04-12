import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { usersMock } from 'shared/mocks/users'

interface UserAuthState {
  user: UserData | null
  isLoggedIn: boolean
  signUp: (user: UserData) => void
  logOut: () => void
  signIn: (email: string, password: string) => void
}

interface UserData {
  username: string
  email: string
  password: string
}

export const useRegistration = create<UserAuthState>()(
  immer(set => ({
    user: null,
    isLoggedIn: false,
    signUp: (data: UserData) => {
      set(state => ({
        user: { ...state.user, username: data.username },
        isLoggedIn: true,
      }))

      //якобы добавляет данные юзера в бд
      usersMock.push({
        username: data.username,
        email: data.email,
        password: data.password,
      })
      console.log(usersMock)
    },
    signIn: (email: string, password: string) => {
      //проверяет существует ли такой емейл в бд
      const user = usersMock.find(user => user.email === email)

      if (user && user.password === password) {
        return set(state => ({
          user: { ...state.user, username: user.username },
          isLoggedIn: true,
        }))
      } else if (user) {
        console.log('incorrect password')
      } else {
        console.log('пользователь не найден')
        return null
      }
    },
    logOut: () => set({ user: null, isLoggedIn: false }),
  })),
)
