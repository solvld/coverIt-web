import Ticker from './Ticker/Ticker'
import { CoverCard } from 'entities/coverCard'
import { PageContainer, CoversContainer } from 'pages/main/ui/Page.styles.ts'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'
import { useEffect, useRef } from 'react'
import { CARDS_LAYOUTS } from '../lib/CardsLayout'
import Description from './Description/description'

const Page = () => {
  const playlists = usePlaylistsStore(({ playlists }) => playlists)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const coverRef = useRef<HTMLDivElement>(null)

  const { currentPlaylistID } = usePlaylistsStore(
    ({ currentPlaylistID, playlists }) => ({
      currentPlaylistID,
      playlists,
    }),
  )

  const { resetCurrentPlaylist } = usePlaylistsStore(state => state)

  const currentPlaylistSongs = currentPlaylistID
    ? playlists.get(currentPlaylistID)!.songs
    : null

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (coverRef.current && !coverRef.current.contains(e.target as Node)) {
        resetCurrentPlaylist()
      }
    }
    document.addEventListener('mouseup', handler)
    return () => document.removeEventListener('mouseup', handler)
  })

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
              cardRef={coverRef}
            />
          )
        })}
      </CoversContainer>
      {currentPlaylistSongs ? (
        <>
          <Description songs={currentPlaylistSongs} />
        </>
      ) : (
        <>
          <Ticker />
        </>
      )}
    </PageContainer>
  )
}

export default Page
