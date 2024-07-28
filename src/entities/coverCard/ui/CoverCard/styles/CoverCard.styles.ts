import styled, { css } from 'styled-components'

export const REACT_DRAGGABLE_ACTIVE_CLASS = 'react-draggable-dragging'
export type CoverCardPositionType = string | number

export const CoverCardContainer = styled.aside<{
  $width: number
}>(
  ({ $width = 10 }) => css`
    display: flex;
    z-index: 1;
    transition: transform 0.15s ease-out;
    width: ${$width}rem;
    height: max-content;
    transition:
      box-shadow,
      scale 0.3s ease;

    @media (max-width: 750px) {
      width: ${$width * 0.75}rem;
    }

    &:hover {
      box-shadow: var(--shadow-card);
      scale: 1.05;
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
