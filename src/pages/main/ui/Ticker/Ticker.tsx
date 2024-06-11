import { ReactNode, FC } from 'react'

import s from './styles.module.scss'
import { tickerText } from './tickerText'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'

const TickerText: FC<{ children: ReactNode }> = ({ children }) => (
  <p className={s.tickerItem}>{children}</p>
)

const Ticker = () => {
  const { currentPlaylistID, playlists } = usePlaylistsStore(
    ({ currentPlaylistID, playlists }) => ({
      currentPlaylistID,
      playlists,
    }),
  )

  const currentPlaylistSongs = currentPlaylistID
    ? playlists.get(currentPlaylistID)!.songs
    : null

  return (
    <section className={s.ticker}>
      <div className={s.container}>
        {currentPlaylistSongs ? (
          <>
            {new Array(3).fill(null).map((_, index) => (
              <TickerText key={index}>
                {currentPlaylistSongs.map(song => song + ' ')}
              </TickerText>
            ))}
          </>
        ) : (
          <>
            {new Array(3).fill(null).map((_, index) => (
              <TickerText key={index}>{tickerText}</TickerText>
            ))}
          </>
        )}
        {}
      </div>
    </section>
  )
}

export default Ticker
