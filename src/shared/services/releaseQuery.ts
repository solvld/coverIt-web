import { useQuery } from '@tanstack/react-query'
import { getGeneratedReleaseQuery } from './releaseApi'

export const useGetRelease = (releaseId: number) => {
  return useQuery({
    queryKey: ['release', releaseId],
    queryFn: () => getGeneratedReleaseQuery(releaseId),
  })
}
