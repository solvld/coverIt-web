import Ticker from './Ticker/Ticker'
import { CoverCard } from 'entities/coverCard'
import { cards } from 'shared/mocks/cards'
import s from './style.module.scss'
import cardStyles from 'entities/coverCard/ui/CoverCard/styles.module.scss'
import { styled } from 'styled-components'
import { BOUNDING_NODE_ID } from 'entities/coverCard/ui/CoverCard/CoverCard.tsx'

const CoversContainer = styled.div`
  //this styles prevents other cards from hover while we're dragging something
  //idk why the same thing in not working in css-modules
  &.has-dragging-element {
    .${cardStyles.cardItem}:not(.react-draggable-dragging) {
      pointer-events: none;
    }
  }
`

const Page = () => {
  return (
    <div className={s.page}>
      <div id={BOUNDING_NODE_ID} className={s.dragBounding} />
      <CoversContainer className={s.cardsList}>
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
      </CoversContainer>
      <Ticker />
    </div>
  )
}

export default Page
