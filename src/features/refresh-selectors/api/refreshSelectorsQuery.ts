import { useQuery } from '@tanstack/react-query'
import { QueryParams, refreshQuery } from './refreshApi'

export const useRefreshSelectors = (
  params: QueryParams,
  token: string | null,
) => {
  return useQuery({
    queryKey: [params, token],
    queryFn: () => {
      if (token) {
        return refreshQuery(params, token)
      }
      return
    },
  })
}
