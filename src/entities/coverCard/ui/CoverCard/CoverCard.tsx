import { useRef } from 'react'
import Draggable from 'react-draggable'
import { styled } from 'styled-components'

import s from './styles.module.scss'

import CoverImage from './CoverImage'
import CoverDescription from './CoverDescription'
import { getREMValue } from 'shared/utils/getREMValue.ts'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'

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
  id,
}: {
  title: string
  image: string
  songs: string[]
  id: number
  position: { axesX: number; axesY: number }
}) => {
  const { setCurrentPlaylist, resetCurrentPlaylist } = usePlaylistsStore(
    ({ setCurrentPlaylist, resetCurrentPlaylist }) => ({
      setCurrentPlaylist,
      resetCurrentPlaylist,
    }),
  )

  const cardRef = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLElement | null>(null)
  const remValue = getREMValue()

  const onDragStart = () => {
    if (!parentRef.current) {
      parentRef.current = cardRef.current!.parentElement
    }

    parentRef.current!.classList.add('has-dragging-element')
  }

  const onDragStop = () => {
    parentRef.current!.classList.remove('has-dragging-element')
  }

  return (
    <Draggable
      nodeRef={cardRef}
      bounds={`#${BOUNDING_NODE_ID}`}
      onStart={onDragStart}
      onStop={onDragStop}
      defaultPosition={{
        x: remValue * position.axesX,
        y: remValue * position.axesY,
      }}
    >
      <Card
        className={s.cardItem}
        ref={cardRef}
        onMouseEnter={() => setCurrentPlaylist(id)}
        onMouseLeave={resetCurrentPlaylist}
      >
        <CoverImage image={image} />
        <CoverDescription title={title} songs={songs} />
      </Card>
    </Draggable>
  )
}

export default CoverCard
