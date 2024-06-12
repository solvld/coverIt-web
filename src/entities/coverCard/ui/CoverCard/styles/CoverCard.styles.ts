import styled, { css } from 'styled-components'

export const REACT_DRAGGABLE_ACTIVE_CLASS = 'react-draggable-dragging'
export type CoverCardPositionType = string | number

export const CoverCardContainer = styled.aside<{
  $width: number
  $top: CoverCardPositionType
  $bottom: CoverCardPositionType
  $left: CoverCardPositionType
  $right: CoverCardPositionType
}>(
  ({ $width = 10, $top, $bottom, $left, $right }) => css`
    position: absolute;
    top: ${$top};
    left: ${$left};
    right: ${$right};
    bottom: ${$bottom};
    display: flex;
    z-index: 1;
    transition: transform 0.15s ease-out;
    width: ${$width}rem;
    height: max-content;

    &:hover,
    &.react-draggable-dragging {
      z-index: 20;
    }

    ::-webkit-scrollbar {
      width: 3px;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar-track {
      border-radius: 2px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #00acb5a5;
      border-radius: 4px;
    }
  `,
)

export const CoverCardImage = styled.figure`
  display: flex;
  position: relative;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  cursor: grab;

  img {
    max-width: 100%;
    object-fit: contain;
    pointer-events: none;
  }
`
