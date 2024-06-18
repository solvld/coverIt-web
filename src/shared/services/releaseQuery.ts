import { useQuery } from '@tanstack/react-query'
import { getGeneratedReleaseQuery } from './releaseApi'
import { GetReleaseData } from 'shared/types/generate'

export const useGetRelease = (inputs: GetReleaseData) => {
  return useQuery({
    queryKey: ['release', inputs],
    queryFn: () => getGeneratedReleaseQuery(inputs),
  })
}
