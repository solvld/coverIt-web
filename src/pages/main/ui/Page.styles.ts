import styled from 'styled-components'

import {
  CoverCardContainer,
  REACT_DRAGGABLE_ACTIVE_CLASS,
} from 'entities/coverCard/ui/CoverCard/styles/CoverCard.styles.ts'

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: calc(100vh - 110px);
  flex-direction: column;
  justify-content: space-between;
`

export const CoversContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1.875rem;
  height: 54rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

  //this styles prevents other cards from hover while we're dragging something
  &.has-dragging-element {
    ${CoverCardContainer}:not(.${REACT_DRAGGABLE_ACTIVE_CLASS}) {
      pointer-events: none;
    }
  }

  @media (max-width: 1376px) {
    padding: 2rem 0;
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    min-height: 32rem;
    height: 100%;
  }
`
