import axios from 'axios'

const URL = import.meta.env.VITE_API_URL

// const token = localStorage.getItem('token')

const userInstance = axios.create({
  baseURL: `${URL}/user`,
})

export const currentUserQuery = async (token: string | null) => {
  return await userInstance.get('/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
