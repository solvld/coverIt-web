import { useRef, FC } from 'react'
import Draggable from 'react-draggable'

import { CoverCardContainer } from './styles/CoverCard.styles.ts'

import { IPlaylist } from 'pages/main/model/playlistsSlice.ts'
import CoverImage from './CoverImage'
import CoverDescription from './CoverDescription'
import { getREMValue } from 'shared/utils/getREMValue.ts'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'

export const BOUNDING_NODE_ID = 'cardDragBounding'

const CoverCard: FC<
  IPlaylist & { position: { axesX: number; axesY: number } }
> = ({ title, image, songs, position, id }) => {
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

  return (
    <Draggable
      nodeRef={cardRef}
      bounds={`#${BOUNDING_NODE_ID}`}
      onStart={onDragStart}
      onStop={() => {
        parentRef.current!.classList.remove('has-dragging-element')
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
      >
        <CoverImage image={image} />
        <CoverDescription title={title} songs={songs} />
      </CoverCardContainer>
    </Draggable>
  )
}

export default CoverCard
