import Ticker from './Ticker/Ticker'
import { CoverCard } from 'entities/coverCard'
import { cards } from 'shared/mocks/cards'

const Page = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
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
    </>
  )
}

export default Page
