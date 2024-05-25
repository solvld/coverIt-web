import img10 from 'shared/assets/images/image10.png?url'
import img12 from 'shared/assets/images/image12.png?url'
import img13 from 'shared/assets/images/image13.png?url'
import img15 from 'shared/assets/images/image15.png?url'
import { GeneratePlaylistResponse, PlaylistCover } from 'shared/types/generate'
import { songs } from './songs'

export const covers: PlaylistCover[] = [
  {
    id: 0,
    created: '2024-05-20T17:21:33.696Z',
    link: img10,
    prompt: 'string',
    isAbstract: true,
    isLoFi: true,
    isSaved: true,
    vibe: 'DANCING_FLOOR',
  },
  {
    id: 1,
    created: '2024-05-20T17:21:33.696Z',
    link: img12,
    prompt: 'string',
    isAbstract: true,
    isLoFi: true,
    isSaved: true,
    vibe: 'DANCING_FLOOR',
  },
  {
    id: 2,
    created: '2024-05-20T17:21:33.696Z',
    link: img13,
    prompt: 'string',
    isAbstract: true,
    isLoFi: true,
    isSaved: true,
    vibe: 'DANCING_FLOOR',
  },
  {
    id: 3,
    created: '2024-05-20T17:21:33.696Z',
    link: img15,
    prompt: 'string',
    isAbstract: true,
    isLoFi: true,
    isSaved: true,
    vibe: null,
  },
]

export const playlistResMock: GeneratePlaylistResponse = {
  id: 1,
  title: 'Lol music list',
  url: 'https://open.spotify.com/playlist/5knWMCgLUxEa73cHuuDqa1?si=g_m2S2WVQMGWCEh1U9LYeg&pi=e-fqvAWblPSeWd&nd=1&dlsi=a8da63adf5b84812',
  vibe: 'DANCING_FLOOR',
  isPrivate: false,
  isSaved: true,
  author: {
    id: 0,
    username: 'kozek',
    email: 'expamle@mail.ru',
    loFiPlaylistGenerations: 0,
    hiFiPlaylistGenerations: 0,
  },
  tracks: songs,
  covers: covers,
  hiFiGenerationsLeft: 0,
  loFiGenerationsLeft: 0,
}
