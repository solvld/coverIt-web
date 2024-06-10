import Ticker from './Ticker/Ticker'
import { CoverCard } from 'entities/coverCard'
import { cards } from 'shared/mocks/cards'
import s from './style.module.scss'
import { BOUNDING_NODE_ID } from 'entities/coverCard/ui/CoverCard/CoverCard.tsx'

const Page = () => {
  return (
    <div className={s.page}>
      <div id={BOUNDING_NODE_ID} className={s.dragBounding} />
      <div className={s.cardsList}>
        {cards.map(card => (
          <CoverCard
            key={card.id}
            title={card.title}
            songs={card.songs}
            image={card.image}
            index={card.id}
            position={card.position}
          />
        ))}
      </div>
      <Ticker />
    </div>
  )
}

export default Page
