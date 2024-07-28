import { useRef, FC, MutableRefObject, useState } from 'react'
//import Draggable from 'react-draggable'

import {
  CoverCardContainer,
  CoverCardImage,
  CoverCardPositionType,
} from './styles/CoverCard.styles.ts'

import { IPlaylist } from 'pages/main/model/playlistsSlice.ts'
// import { getREMValue } from 'shared/utils/getREMValue.ts'
import { usePlaylistsStore } from 'pages/main/model/playlistsSlice.ts'
import { motion } from 'framer-motion'

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
  containerRef: MutableRefObject<HTMLDivElement | null>
}

const CoverCard: FC<CoverCardProps> = ({
  title,
  image,
  id,
  position,
  width,
  containerRef,
}) => {
  const [zIndex, setZIndex] = useState(0)
  const {
    setCurrentPlaylist,
    resetCurrentPlaylist,
    blockChangingCurrentPlaylist,
    allowChangingCurrentPlaylist,
  } = usePlaylistsStore(state => state)

  const cardRef = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLElement | null>(null)
  // const remValue = getREMValue()

  const onDragStart = () => {
    if (!parentRef.current) {
      parentRef.current = cardRef.current!.parentElement
    }
    parentRef.current!.classList.add('has-dragging-element')
    blockChangingCurrentPlaylist()
  }

  const updateZIndex = () => {
    const elements = document.querySelectorAll('.drag-element')

    let maxIndex = -Infinity

    elements.forEach(element => {
      const zIndex = parseInt(
        window.getComputedStyle(element).getPropertyValue('z-index'),
      )
      if (!isNaN(zIndex) && zIndex > maxIndex) {
        maxIndex = zIndex
      }

      setZIndex(maxIndex + 1)
    })
  }

  return (
    // <Draggable
    //   nodeRef={cardRef}
    //   bounds={`#${BOUNDING_NODE_ID}`}
    //   onStart={onDragStart}
    //   onStop={() => {
    //     parentRef.current!.classList.remove('has-dragging-element')
    //     allowChangingCurrentPlaylist()
    //   }}
    //   defaultPosition={{
    //     x: remValue * position.axesX,
    //     y: remValue * position.axesY,
    //   }}
    // >
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.95}
      onDragStart={onDragStart}
      onDragEnd={() => {
        parentRef.current!.classList.remove('has-dragging-element')
        allowChangingCurrentPlaylist()
      }}
      style={{ width: 'fit-content', height: 'fit-content', zIndex }}
      className="drag-element"
      onMouseDown={updateZIndex}
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
    </motion.div>
    // </Draggable>
  )
}

export default CoverCard
