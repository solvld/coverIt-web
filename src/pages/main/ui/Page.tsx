import Ticker from './Ticker/Ticker'
import { CoverCard } from 'entities/coverCard'
import {
  PageContainer,
  DragBounding,
  CoversContainer,
} from 'pages/main/ui/Page.styles.ts'
import { BOUNDING_NODE_ID } from 'entities/coverCard/ui/CoverCard/CoverCard.tsx'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'

const CARDS_POSITIONS: Array<{ axesX: number; axesY: number }> = [
  {
    axesX: -2.25,
    axesY: 0,
  },
  {
    axesX: 2,
    axesY: -2,
  },
  {
    axesX: 5,
    axesY: 0,
  },
  {
    axesX: 5,
    axesY: 8,
  },
  {
    axesX: -4,
    axesY: 0,
  },
  {
    axesX: -7,
    axesY: -8,
  },
  {
    axesX: -6,
    axesY: -5,
  },
  {
    axesX: -9,
    axesY: 0,
  },
]

const Page = () => {
  const playlists = usePlaylistsStore(({ playlists }) => playlists)

  return (
    <PageContainer>
      <DragBounding id={BOUNDING_NODE_ID} />
      <CoversContainer>
        {Array.from(playlists.values()).map(
          ({ id, title, songs, image }, index) => (
            <CoverCard
              key={id}
              title={title}
              songs={songs}
              image={image}
              id={id}
              position={CARDS_POSITIONS[index]}
            />
          ),
        )}
      </CoversContainer>
      <Ticker />
    </PageContainer>
  )
}

export default Page
