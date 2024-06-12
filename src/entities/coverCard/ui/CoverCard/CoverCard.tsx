import { useRef, FC } from 'react'
import Draggable from 'react-draggable'

import {
  CoverCardContainer,
  CoverCardImage,
  CoverCardPositionType,
} from './styles/CoverCard.styles.ts'

import { IPlaylist } from 'pages/main/model/playlistsSlice.ts'
import { getREMValue } from 'shared/utils/getREMValue.ts'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'

export const BOUNDING_NODE_ID = 'cardDragBounding'

export interface ICardPosition {
  axesX: number
  axesY: number
  top: CoverCardPositionType
  bottom: CoverCardPositionType
  left: CoverCardPositionType
  right: CoverCardPositionType
}

type CoverCardProps = Omit<IPlaylist, 'songs'> & {
  width: number
  position: ICardPosition
}

const CoverCard: FC<CoverCardProps> = ({
  title,
  image,
  id,
  position,
  width,
}) => {
  const {
    setCurrentPlaylist,
    resetCurrentPlaylist,
    blockChangingCurrentPlaylist,
    allowChangingCurrentPlaylist,
  } = usePlaylistsStore(state => state)

  const cardRef = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLElement | null>(null)
  const remValue = getREMValue()

  const onDragStart = () => {
    if (!parentRef.current) {
      parentRef.current = cardRef.current!.parentElement
    }

    parentRef.current!.classList.add('has-dragging-element')
    blockChangingCurrentPlaylist()
  }

  return (
    <Draggable
      nodeRef={cardRef}
      bounds={`#${BOUNDING_NODE_ID}`}
      onStart={onDragStart}
      onStop={() => {
        parentRef.current!.classList.remove('has-dragging-element')
        allowChangingCurrentPlaylist()
      }}
      defaultPosition={{
        x: remValue * position.axesX,
        y: remValue * position.axesY,
      }}
    >
      <CoverCardContainer
        ref={cardRef}
        onMouseEnter={() => setCurrentPlaylist(id)}
        onMouseLeave={resetCurrentPlaylist}
        $width={width}
        $top={position.top}
        $bottom={position.bottom}
        $left={position.left}
        $right={position.right}
      >
        <CoverCardImage>
          <img src={image} alt={`${title} playlist cover`} />
        </CoverCardImage>
      </CoverCardContainer>
    </Draggable>
  )
}

export default CoverCard
