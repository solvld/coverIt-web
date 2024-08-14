import axios from 'axios'

const URL = import.meta.env.VITE_API_URL

const userInstance = axios.create({
  baseURL: `${URL}/user`,
})

interface UserResponse {
  id: number
  username: string
  email: string
  hiFiReleaseGenerations: number
  loFiReleaseGenerations: number
  hiFiPlaylistGenerations: number
  loFiPlaylistGenerations: number
}

export const currentUserQuery = async (token: string) => {
  return await userInstance.get<UserResponse>('/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
