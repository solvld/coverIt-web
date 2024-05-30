import { useQuery } from '@tanstack/react-query'
import { getGeneratedPlaylistQuery } from './playlistApi'

export const useGetPlaylist = (playlistId: number) => {
  return useQuery({
    queryKey: ['playlist', playlistId],
    queryFn: () => getGeneratedPlaylistQuery(playlistId),
  })
}
