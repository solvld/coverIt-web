import { create } from 'zustand'

import img10 from 'shared/assets/images/image10.png?url'
import img11 from 'shared/assets/images/image11.png?url'
import img12 from 'shared/assets/images/image12.png?url'
import img13 from 'shared/assets/images/image13.png?url'
import img14 from 'shared/assets/images/image14.png?url'
import img15 from 'shared/assets/images/image15.png?url'
import img16 from 'shared/assets/images/image16.png?url'
import img17 from 'shared/assets/images/image17.png?url'

interface Playlist {
  id: number
  title: string
  image: string
  songs: string[]
}

type PlaylistsMap = Map<Playlist['id'], Playlist>

interface PlaylistsState {
  currentPlaylistID: null | Playlist['id']
  playlists: PlaylistsMap
  setCurrentPlaylist: (newPlaylist: Playlist['id']) => void
  resetCurrentPlaylist: () => void
}

const PLAYLISTS: PlaylistsMap = new Map([
  [
    2,
    {
      id: 2,
      title: 'Sochi City',
      image: img12,
      songs: [
        'Sochi - Mzymta River',
        'Irkutsk - Angara River',
        'Novosibirsk - Ob River',
        'Yakutsk - Lena River',
        'Vladivostok - Golden Horn Bay',
      ],
    },
  ],
  [
    3,
    {
      id: 3,
      title: 'Khabarovsk Crab',
      image: img10,
      songs: [
        'Khabarovsk - Amur River',
        'Rostov-on-Don - Don River',
        'Kaliningrad - Pregolya River',
        'Tver - Volga River',
        'Yaroslavl - Volga River',
        'Tyumen - Tura River',
      ],
    },
  ],
  [
    4,
    {
      id: 4,
      title: 'Kuban Rain',
      image: img14,
      songs: [
        'Arkhangelsk - Northern Dvina River',
        'Pskov - Velikaya River',
        'Voronezh - Voronezh River',
        'Krasnodar - Kuban River',
      ],
    },
  ],
  [
    10,
    {
      id: 10,
      title: 'Volga Sad',
      image: img15,
      songs: [
        'Volga - Oka River',
        'Moscow - Volga River',
        'Kazan - Kama River',
        'Saint Petersburg - Neva River',
        'Ufa - Belaya River',
        'Novosibirsk - Ob River',
        'Yakutsk - Lena River',
        'Arkhangelsk - Northern Dvina River',
        'Pskov - Velikaya River',
        'Voronezh - Voronezh River',
      ],
    },
  ],
  [
    5,
    {
      id: 5,
      title: 'Volga Sad',
      image: img11,
      songs: [
        'Volga - Oka River',
        'Moscow - Volga River',
        'Kazan - Kama River',
        'Saint Petersburg - Neva River',
        'Ufa - Belaya River',
        'Novosibirsk - Ob River',
        'Yakutsk - Lena River',
        'Arkhangelsk - Northern Dvina River',
        'Pskov - Velikaya River',
        'Voronezh - Voronezh River',
      ],
    },
  ],
  [
    6,
    {
      id: 6,
      title: 'Sochi City',
      image: img13,
      songs: [
        'Sochi - Mzymta River',
        'Irkutsk - Angara River',
        'Novosibirsk - Ob River',
        'Yakutsk - Lena River',
        'Vladivostok - Golden Horn Bay',
      ],
    },
  ],
  [
    7,
    {
      id: 7,
      title: 'Khabarovsk Crab',
      image: img16,
      songs: [
        'Khabarovsk - Amur River',
        'Rostov-on-Don - Don River',
        'Kaliningrad - Pregolya River',
        'Tver - Volga River',
        'Yaroslavl - Volga River',
        'Tyumen - Tura River',
      ],
    },
  ],
  [
    8,
    {
      id: 8,
      title: 'Kuban Rain',
      image: img17,
      songs: [
        'Arkhangelsk - Northern Dvina River',
        'Pskov - Velikaya River',
        'Voronezh - Voronezh River',
        'Krasnodar - Kuban River',
      ],
    },
  ],
])

export const usePlaylistsStore = create<PlaylistsState>(set => ({
  currentPlaylistID: null,
  playlists: PLAYLISTS,
  setCurrentPlaylist: (playlistID: Playlist['id']) =>
    set({ currentPlaylistID: playlistID }),
  resetCurrentPlaylist: () => set({ currentPlaylistID: null }),
}))
