import styled from 'styled-components'

import {
  CoverCardContainer,
  REACT_DRAGGABLE_ACTIVE_CLASS,
} from 'entities/coverCard/ui/CoverCard/styles/CoverCard.styles.ts'

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: calc(100vh - 5.15rem);
  flex-direction: column;
  justify-content: space-between;
`

export const CoversContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 1.875rem;
  height: calc(100vh - 10.15rem);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 1fr 1fr;

  @media (max-width: 750px) {
    grid-template-columns: 10rem 10rem;
    grid-template-rows: min-content;
    height: 100%;
  }

  //this styles prevents other cards from hover while we're dragging something
  &.has-dragging-element {
    ${CoverCardContainer}:not(.${REACT_DRAGGABLE_ACTIVE_CLASS}) {
      pointer-events: none;
    }
  }
`
