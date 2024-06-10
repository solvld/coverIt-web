import { useRef } from 'react'
import styled, { css } from 'styled-components'
import Draggable from 'react-draggable'

import s from './styles.module.scss'

import CoverImage from './CoverImage'
import CoverDescription from './CoverDescription'
import { getREMValue } from 'shared/utils/getREMValue.ts'

const Card = styled.article<{ $position: { axesX: number; axesY: number } }>(
  ({ $position: { axesX, axesY } }) => css`
    cursor: grab;
    // transform: translate(${axesX}rem, ${axesY}rem);

    //@media (max-width: 1376px) {
    //  transform: translate(0, 0);
    //}
  `,
)

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
      defaultPosition={{
        x: remValue * position.axesX,
        y: remValue * position.axesY,
      }}
    >
      <Card $position={position} className={s.cardItem} ref={cardRef}>
        <CoverImage image={image} />
        <CoverDescription title={title} songs={songs} />
      </Card>
    </Draggable>
  )
}

export default CoverCard
