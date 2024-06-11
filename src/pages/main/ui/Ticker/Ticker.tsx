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
            {new Array(3)
              .fill(null)
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              .map(_ => (
                <TickerText>
                  {currentPlaylistSongs.map(song => song + ' ')}
                </TickerText>
              ))}
          </>
        ) : (
          <>
            {new Array(3)
              .fill(null)
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              .map(_ => (
                <TickerText>{tickerText}</TickerText>
              ))}
          </>
        )}
        {}
      </div>
    </section>
  )
}

export default Ticker
