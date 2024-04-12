import { tickerText } from './tickerText'
import s from './styles.module.scss'

const Ticker = () => {
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
