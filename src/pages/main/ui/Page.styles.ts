import styled from 'styled-components'

import {
  CoverCardContainer,
  REACT_DRAGGABLE_ACTIVE_CLASS,
} from 'entities/coverCard/ui/CoverCard/styles/CoverCard.styles.ts'

export const PageContainer = styled.div`
  --card-list-height: 32rem;
  position: relative;
  display: flex;
  height: 100%;
  min-height: calc(100vh - 110px);
  flex-direction: column;
  justify-content: space-between;
`

export const DragBounding = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: calc(var(--card-list-height) + 15rem);
`

export const CoversContainer = styled.div`
  border: solid 1px;
  max-width: 76rem;
  height: var(--card-list-height);
  margin: 3rem 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-content: center;
  align-items: center;

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
