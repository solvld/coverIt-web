import axios from 'axios'
import { GenerateReleaseResponse, GetReleaseData } from 'shared/types/generate'

const URL = import.meta.env.VITE_API_URL

const playlistInstance = axios.create({
  baseURL: `${URL}/release`,
})

export const getGeneratedReleaseQuery = async (inputs: GetReleaseData) => {
  return (
    await playlistInstance.get<GenerateReleaseResponse>('/get', {
      params: {
        id: inputs.releaseId,
      },
      headers: {
        Authorization: inputs.token ? `Bearer ${inputs.token}` : null,
        'Content-Type': 'application/json',
      },
    })
  ).data
}
