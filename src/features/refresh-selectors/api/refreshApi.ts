import axios from 'axios'

const URL = import.meta.env.VITE_API_URL

const refreshInstance = axios.create({
  baseURL: `${URL}/cover/track/generate`,
})

export type QueryParams = 'mood' | 'style'

type RefreshResponse = string[]

export const refreshQuery = async (params: QueryParams, token: string) => {
  return (
    await refreshInstance.get<RefreshResponse>(`/${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).data
}
