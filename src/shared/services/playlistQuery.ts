import { useQuery } from '@tanstack/react-query'
import { getGeneratedPlaylistQuery } from './playlistApi'
import { GetPlaylistData } from 'shared/types/generate'

export const useGetPlaylist = (data: GetPlaylistData) => {
  return useQuery({
    queryKey: ['playlist', data],
    queryFn: () => getGeneratedPlaylistQuery(data),
  })
}
