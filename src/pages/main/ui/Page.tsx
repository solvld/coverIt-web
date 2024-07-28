import Ticker from './Ticker/Ticker'
import { CoverCard } from 'entities/coverCard'
import { PageContainer, CoversContainer } from 'pages/main/ui/Page.styles.ts'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'
import { useRef } from 'react'
import { CARDS_LAYOUTS } from '../lib/CardsLayout'

const Page = () => {
  const playlists = usePlaylistsStore(({ playlists }) => playlists)
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <PageContainer>
      <CoversContainer ref={containerRef}>
        {Array.from(playlists.values()).map(({ id, title, image }, index) => {
          const { axesX, axesY, width } = CARDS_LAYOUTS[index]

          return (
            <CoverCard
              key={id}
              title={title}
              image={image}
              id={id}
              position={{ axesX, axesY }}
              width={width}
              containerRef={containerRef}
            />
          )
        })}
      </CoversContainer>
      <Ticker />
    </PageContainer>
  )
}

export default Page
