import styled from 'styled-components'

export const CoverCardDescription = styled.aside`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 17rem;
  height: 17rem;
  background: #ffffffd7;
  transition:
    box-shadow 0.9s linear,
    transform 0.9s ease-in-out;
  transition-delay: 0s;
  cursor: default;
  box-shadow: 0 0 0 #0000000b;

  padding: 0 1rem;
  border-radius: 0 1rem 1rem 0;

  h2 {
    text-align: center;
    padding: 0.5rem;
  }

  ol {
    overflow-y: scroll;
    list-style-position: inside;
    height: 12.5rem;
  }
`

export const CoverCardContainer = styled.aside`
  position: relative;
  z-index: 1;
  transition: transform 0.25s ease-out 0s;
  width: 17rem;

  &:hover,
  &.react-draggable-dragging {
    z-index: 20;
    box-shadow: 0 2px 4px #0000005a;
  }

  &:hover ${CoverCardDescription} {
    transform: translateX(17rem);
    box-shadow: 0 2px 4px #0000002e;
  }

  &.react-draggable-dragging ${CoverCardDescription} {
    transform: translateX(0);
  }

  &:nth-of-type(4n) {
    ${CoverCardDescription} {
      border-radius: 1rem 0 0 1rem;
    }

    &:hover ${CoverCardDescription} {
      transform: translateX(-17rem);
    }
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

  @media (max-width: 1204px) {
    &:hover,
    &:nth-of-type(4n):hover,
    &.react-draggable-dragging {
      ${CoverCardDescription} {
        transform: translateX(0px);
        z-index: 20;
        border-radius: 0 0 0 0;
      }
    }
  }
`

export const CoverCardImage = styled.figure`
  position: relative;
  z-index: 1;
  height: 17rem;
  width: 17rem;
  overflow: hidden;
  cursor: grab;

  img {
    height: 17rem;
    width: 17rem;
    pointer-events: none;
  }
`
