import Ticker from './Ticker/Ticker'
import { CoverCard } from 'entities/coverCard'
import { PageContainer, CoversContainer } from 'pages/main/ui/Page.styles.ts'
import { BOUNDING_NODE_ID } from 'entities/coverCard/ui/CoverCard/CoverCard.tsx'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'

import { ICardPosition } from 'entities/coverCard/ui/CoverCard/CoverCard.tsx'

const CARDS_LAYOUTS: Array<ICardPosition & { width: number }> = [
  {
    axesX: 0,
    axesY: -7.7,
    width: 15,
    top: 'unset',
    right: 'unset',
    bottom: 0,
    left: 0,
  },
  {
    axesX: 11.6,
    axesY: 1.5,
    width: 21.5,
    top: 0,
    right: 'unset',
    bottom: 'unset',
    left: 0,
  },
  {
    axesX: -7.7,
    axesY: 0,
    width: 22,
    top: 0,
    right: 0,
    bottom: 'unset',
    left: 'unset',
  },
  {
    axesX: -19.3,
    axesY: -4.5,
    width: 25,
    top: 'unset',
    right: 0,
    bottom: 0,
    left: 'unset',
  },
  {
    axesX: 0,
    axesY: -8.5,
    width: 12.5,
    top: 'unset',
    right: 0,
    bottom: 0,
    left: 'unset',
  },
  {
    axesX: 31.2,
    axesY: 6,
    width: 13.2,
    top: 0,
    right: 'unset',
    bottom: 'unset',
    left: 0,
  },
  {
    axesX: 24.2,
    axesY: -3.6,
    width: 7,
    top: 'unset',
    right: 'unset',
    bottom: 0,
    left: 0,
  },
  {
    axesX: -24.3,
    axesY: 0,
    width: 17.3,
    top: 'unset',
    right: 0,
    bottom: 0,
    left: 'unset',
  },
]

const Page = () => {
  const playlists = usePlaylistsStore(({ playlists }) => playlists)

  return (
    <PageContainer>
      <CoversContainer id={BOUNDING_NODE_ID}>
        {Array.from(playlists.values()).map(
          ({ id, title, songs, image }, index) => {
            const { axesX, axesY, top, right, bottom, left, width } =
              CARDS_LAYOUTS[index]

            return (
              <CoverCard
                key={id}
                title={title}
                songs={songs}
                image={image}
                id={id}
                position={{ axesX, axesY, top, right, bottom, left }}
                width={width}
              />
            )
          },
        )}
      </CoversContainer>
      <Ticker />
    </PageContainer>
  )
}

export default Page
