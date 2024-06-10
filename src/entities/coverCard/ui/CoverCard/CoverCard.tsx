import { useRef } from 'react'
import Draggable from 'react-draggable'
import { styled } from 'styled-components'

import s from './styles.module.scss'

import CoverImage from './CoverImage'
import CoverDescription from './CoverDescription'
import { getREMValue } from 'shared/utils/getREMValue.ts'

export const BOUNDING_NODE_ID = 'cardDragBounding'

const Card = styled.aside`
  &.react-draggable-dragging {
    z-index: 90;

    .${s.description} {
      transform: translateX(0);
    }
  }
`

const CoverCard = ({
  title,
  image,
  songs,
  position,
}: {
  title: string
  image: string
  songs: string[]
  index: number
  position: { axesX: number; axesY: number }
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const remValue = getREMValue()

  return (
    <Draggable
      nodeRef={cardRef}
      bounds={`#${BOUNDING_NODE_ID}`}
      defaultPosition={{
        x: remValue * position.axesX,
        y: remValue * position.axesY,
      }}
      handle={`.${s.image}`}
    >
      <Card className={s.cardItem} ref={cardRef}>
        <CoverImage image={image} />
        <CoverDescription title={title} songs={songs} />
      </Card>
    </Draggable>
  )
}

export default CoverCard
