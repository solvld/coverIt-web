import { useInfiniteQuery } from '@tanstack/react-query'
import { getArchivePlaylists, getLikedPlaylists } from './archiveApi'

interface UseArchiveProps {
  filter: string | null
  token: string | null
}

export const useArchive = ({ filter, token }: UseArchiveProps) => {
  return useInfiniteQuery({
    queryKey: [`archive`, token, filter],
    queryFn: ({ pageParam }) =>
      getArchivePlaylists({ pageParam, token }, filter),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        lastPage.length !== allPage.length ? allPage.length : null
      return nextPage
    },
    retry: false,
  })
}

export const useLiked = ({ filter, token }: UseArchiveProps) => {
  return useInfiniteQuery({
    queryKey: [`liked`, token, filter],
    queryFn: ({ pageParam }) => getLikedPlaylists({ pageParam, token }, filter),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      const nextPage =
        lastPage.length !== allPage.length ? allPage.length : null
      return nextPage
    },
  })
}
