import axios from 'axios'

const URL = import.meta.env.VITE_API_URL

const userInstance = axios.create({
  baseURL: `${URL}/user`,
})

export const currentUserQuery = async (token: string) => {
  return await userInstance.get('/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
