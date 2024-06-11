import Ticker from './Ticker/Ticker'
import { CoverCard } from 'entities/coverCard'
import s from './style.module.scss'
import { CoverCardContainer } from 'entities/coverCard/ui/CoverCard/styles/CoverCard.styles.ts'
import { styled } from 'styled-components'
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

const CoversContainer = styled.div`
  //this styles prevents other cards from hover while we're dragging something
  //idk why the same thing in not working in css-modules
  &.has-dragging-element {
    ${CoverCardContainer}:not(.react-draggable-dragging) {
      pointer-events: none;
    }
  }
`

const Page = () => {
  const playlists = usePlaylistsStore(({ playlists }) => playlists)

  return (
    <div className={s.page}>
      <div id={BOUNDING_NODE_ID} className={s.dragBounding} />
      <CoversContainer className={s.cardsList}>
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
    </div>
  )
}

export default Page
