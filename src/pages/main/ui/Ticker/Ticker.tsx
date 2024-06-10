import s from './styles.module.scss'
import { tickerText } from './tickerText'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'

const Ticker = () => {
  const currentPlaylist = usePlaylistsStore(
    ({ currentPlaylist }) => currentPlaylist,
  )

  console.log(currentPlaylist)

  return (
    <section className={s.ticker}>
      <div className={s.container}>
        <p className={s.tickerItem}>{tickerText}</p>
        <p className={s.tickerItem}>{tickerText}</p>
        <p className={s.tickerItem}>{tickerText}</p>
      </div>
    </section>
  )
}

export default Ticker
