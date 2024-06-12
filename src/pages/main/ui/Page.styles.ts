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
  height: 41rem;
  margin: 0 auto;
}

  //this styles prevents other cards from hover while we're dragging something
  &.has-dragging-element {
    ${CoverCardContainer}:not(.${REACT_DRAGGABLE_ACTIVE_CLASS}) {
      pointer-events: none;
    }
  }
`
