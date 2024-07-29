import { ReactNode, FC } from 'react'

import s from './styles.module.scss'
import { tickerText } from './tickerText'

const TickerText: FC<{ children: ReactNode }> = ({ children }) => (
  <p className={s.tickerItem}>{children}</p>
)

const Ticker = () => {
  return (
    <section className={s.ticker}>
      <div className={s.container}>
        {new Array(3).fill(null).map((_, index) => (
          <TickerText key={index}>{tickerText}</TickerText>
        ))}
      </div>
    </section>
  )
}

export default Ticker
